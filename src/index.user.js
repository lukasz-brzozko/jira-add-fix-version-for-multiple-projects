// ==UserScript==
// @name         Jira Add Fix Version For Multiple Projects
// @namespace    https://github.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects
// @version      2024-05-07
// @description  Allows to add one fix version for different projects simultaneously
// @author       Łukasz Brzózko
// @match        https://jira.nd0.pl/*
// @exclude      https://jira.nd0.pl/plugins/servlet/*
// @icon         https://jira.nd0.pl/s/a3v501/940003/1dlckms/_/images/fav-jsw.png
// @resource styles    https://raw.githubusercontent.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects/main/dist/styles.css
// @updateURL    https://raw.githubusercontent.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects/main/dist/index.meta.js
// @downloadURL  https://raw.githubusercontent.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects/main/dist/index.user.js
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
  "use strict";

  const SELECTORS = {
    defaultAddBtn: ".aui-button.aui-button-primary",
    addVersionInput: ".releases-add__name > input",
  };

  const IDS = {
    form: "releases-add__version",
    listContainer: "fix-version-list",
    addBtnContainer: "add-btn-container",
  };

  const MESSAGES = {
    optionsBtnContent: "Split More",
    addBtnContent: "Add for more projects",
    containerFound: `Znaleziono formularz ${IDS.form}`,
    versionCreated: "Created",
    error: {
      basic: "Error",
      containerNotFound: `Nie znaleziono kontenera ${IDS.form}. Skrypt został wstrzymany.`,
    },
  };

  const JIRA_FIX_VERSION_PROJECTS = "JIRA_FIX_VERSION_PROJECTS";
  const CREATE_VERSION_ENDPOINT = "https://jira.nd0.pl/rest/api/2/version";
  const DEFAULT_PROJECT_LIST = [
    { name: "ORB2BPOO", active: true },
    { name: "B2BM", active: true },
    { name: "ORPP", active: false },
    { name: "CRMO", active: false },
  ];

  let form;
  let defaultAddBtn;
  let addVersionInput;
  let projects;

  const linkStyles = async () => {
    const myCss = GM_getResourceText("styles");
    const styleTag = document.createElement("style");
    styleTag.textContent = myCss;

    document.body.prepend(styleTag);
  };

  const getDefaultUiElements = () => {
    defaultAddBtn = form.querySelector(SELECTORS.defaultAddBtn);
    addVersionInput = form.querySelector(SELECTORS.addVersionInput);
  };

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  const getProjectList = () => {
    try {
      const projectsString = localStorage.getItem(JIRA_FIX_VERSION_PROJECTS);
      projects = JSON.parse(projectsString) ?? [...DEFAULT_PROJECT_LIST];
    } catch (e) {
      projects = [...DEFAULT_PROJECT_LIST];
    }

    return projects;
  };

  const listenForDisabledChanges = (button) => {
    const observer = new MutationObserver(([entry]) => {
      const isTargetDisabled = entry.target.disabled;

      button.toggleAttribute("disabled", isTargetDisabled);
      button.setAttribute("tabindex", isTargetDisabled ? "-1" : "0");
    });

    observer.observe(defaultAddBtn, {
      attributeFilter: ["disabled"],
    });
  };

  const callCreateVersionEndpoint = (projects) => {
    const body = {
      project: "",
      name: addVersionInput.value,
      description: "",
      userStartDate: "",
      userReleaseDate: "",
    };

    return Promise.allSettled(
      projects.map(({ name }) => {
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...body, project: name }),
        };

        return fetch(CREATE_VERSION_ENDPOINT, options);
      })
    );
  };

  const getCurrentProjectName = () => {
    return window.location.pathname.split("/").at(-1);
  };

  const getIsProjectsPage = () => {
    return window.location.pathname.split("/").at(1) === "projects";
  };

  const displayMessage = ({ type = "info", title, content }) => {
    unsafeWindow.AJS.flag({
      type,
      body: `<strong>${title}</strong>
            <ul style="margin-top: 8px; padding-left: 0;">
              ${content}
            `,
    });
  };

  const getListItemsContent = ({ data, targetProjects, responses }) => {
    const listElements = data.map((el, index) => {
      const project = targetProjects[index].name;
      const status = responses[index].value.status;
      const message =
        status === 201
          ? MESSAGES.versionCreated
          : el.errorMessages[0] ?? el.errors?.name ?? MESSAGES.error.basic;
      const lozengeClassName =
        status === 201 ? "aui-lozenge-success" : "aui-lozenge-removed";
      const messageColor =
        status === 201
          ? "--aui-lozenge-success-subtle-text-color"
          : "--aui-badge-removed-text-color";

      return `
      <li>
        <span>${project}: </span>
        <span class="aui-lozenge aui-lozenge-subtle ${lozengeClassName}">${status}</span>
        <span style="font-size: 10px; line-height: 1; color: var(${messageColor})"> - ${message}</span>
      </li>`;
    });

    return listElements;
  };

  const createFixVersions = async (e) => {
    const target = e.currentTarget;

    if (target.hasAttribute("disabled")) return;

    const currentProject = getCurrentProjectName();
    const targetProjects = projects.filter(
      ({ active, name }) => active && name !== currentProject
    );

    if (targetProjects.length === 0) return;

    target.busy();

    const responses = await callCreateVersionEndpoint(targetProjects);
    const data = await Promise.all(responses.map((resp) => resp.value.json()));

    const listElements = getListItemsContent({
      data,
      targetProjects,
      responses,
    });

    displayMessage({
      type: "info",
      title: "Response status of other projects",
      content: listElements.join(""),
    });

    target.idle();
    defaultAddBtn.click();
  };

  const saveStateInLocalStorage = debounce((state) => {
    localStorage.setItem(JIRA_FIX_VERSION_PROJECTS, JSON.stringify(state));
  }, 500);

  const handleProjectListChange = (e) => {
    const { textContent } = e.target;

    const currentProject = getCurrentProjectName();
    const project = projects.find(
      ({ name }) => name === textContent && name !== currentProject
    );

    if (!project) return;

    const projectPrevValue = project.active;
    const projectNewValue = e.target.hasAttribute("checked");

    if (projectPrevValue === projectNewValue) return;

    project.active = projectNewValue;

    saveStateInLocalStorage(projects);
  };

  const renderFixVersionList = () => {
    const currentProject = getCurrentProjectName();

    const container = document.createElement("aui-dropdown-menu");
    const section = document.createElement("aui-section");

    container.id = IDS.listContainer;
    container.className = "aui-dropdown2 aui-style-default aui-layer";
    container.setAttribute(
      "data-aui-alignment-container",
      `#${IDS.addBtnContainer}`
    );
    container.toggleAttribute("resolved", true);
    container.toggleAttribute("aria-hidden", true);

    section.setAttribute("label", "Projects");

    projects.forEach(({ active, name }) => {
      const checkbox = document.createElement("aui-item-checkbox");
      const isCurrentProject = name === currentProject;

      checkbox.textContent = name;
      checkbox.toggleAttribute("interactive", true);
      checkbox.toggleAttribute("checked", isCurrentProject || active);
      checkbox.toggleAttribute("disabled", isCurrentProject);

      section.appendChild(checkbox);
    });

    container.addEventListener("change", handleProjectListChange);

    container.appendChild(section);
    form.appendChild(container);
  };

  const renderBtns = () => {
    const buttonContainer = document.createElement("div");
    const addBtn = document.createElement("div");
    const optionsBtn = document.createElement("div");

    buttonContainer.id = IDS.addBtnContainer;
    buttonContainer.className = "aui-buttons";

    addBtn.className = "aui-button aui-button-split-main";
    addBtn.textContent = MESSAGES.addBtnContent;
    addBtn.setAttribute("role", "button");
    addBtn.setAttribute("tabindex", defaultAddBtn.disabled ? "-1" : "0");
    addBtn.toggleAttribute("resolved", true);
    addBtn.toggleAttribute("disabled", defaultAddBtn.disabled);

    optionsBtn.className =
      "aui-button aui-dropdown2-trigger aui-button-split-more";
    optionsBtn.textContent = MESSAGES.optionsBtnContent;
    optionsBtn.setAttribute("role", "button");
    optionsBtn.setAttribute("tabindex", "0");
    optionsBtn.setAttribute("aria-controls", IDS.listContainer);
    optionsBtn.setAttribute("aria-expanded", "false");
    optionsBtn.toggleAttribute("resolved", true);
    optionsBtn.toggleAttribute("aria-haspopup", true);

    buttonContainer.appendChild(addBtn);
    buttonContainer.appendChild(optionsBtn);
    form.appendChild(buttonContainer);

    listenForDisabledChanges(addBtn);

    addBtn.addEventListener("click", createFixVersions);
  };

  const renderUiElements = () => {
    renderBtns();
    renderFixVersionList();
  };

  const lookForAppContainer = async () => {
    const DOMElements = await new Promise((resolve, reject) => {
      const maxAttempts = 50;
      let attempt = 0;

      const setIntervalId = setInterval(() => {
        form = document.getElementById(IDS.form);
        if (form) {
          clearInterval(setIntervalId);
          window.console.info(
            `%c ${MESSAGES.containerFound}`,
            "background: #B7E1CD; color: #000; font-size: 20px"
          );
          resolve({ container: form });
        } else {
          if (attempt >= maxAttempts) {
            clearInterval(setIntervalId);
            reject({ error: MESSAGES.error.containerNotFound });
          } else {
            attempt++;
          }
        }
      }, 300);
    });

    return DOMElements;
  };

  const handleContainerNotFound = () => {
    window.console.error(
      `%c ${MESSAGES.error}`,
      "background: red; color: #fff; font-size: 20px"
    );
  };

  const handleNavigate = () => {
    if (getIsProjectsPage()) return init();
  };

  const init = async () => {
    try {
      await lookForAppContainer();
    } catch (err) {
      return handleContainerNotFound();
    }

    linkStyles();
    getProjectList();
    getDefaultUiElements();
    renderUiElements();
  };

  if (getIsProjectsPage()) return init();

  window.navigation.addEventListener("navigate", handleNavigate);
})();
