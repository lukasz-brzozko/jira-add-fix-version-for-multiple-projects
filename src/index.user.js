// ==UserScript==
// @name         Userscript starter
// @namespace    https://github.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects
// @version      2024-05-03
// @description  Creates a new userscript
// @author       Łukasz Brzózko
// @match        https://jira.nd0.pl/projects*
// @exclude      https://jira.nd0.pl/plugins/servlet/*
// @icon         https://jira.nd0.pl/s/a3v501/940003/1dlckms/_/images/fav-jsw.png
// @updateURL    https://raw.githubusercontent.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects/main/dist/index.meta.js
// @downloadURL  https://raw.githubusercontent.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects/main/dist/index.user.js
// @grant        none
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
    addBtnContainer: "add-btn-continer",
  };

  const MESSAGES = {
    optionsBtnContent: "Split More",
    addBtnContent: "Add for more projects",
    containerFound: `Znaleziono formularz ${IDS.form}`,
    error: {
      containerNotFound: `Nie znaleziono kontenera ${IDS.form}. Skrypt został wstrzymany.`,
    },
  };

  const CREATE_VERSION_ENDPOINT = "https://jira.nd0.pl/rest/api/2/version";
  const PROJECTS = [
    { name: "ORB2BPOO", active: true },
    { name: "B2BM", active: true },
    { name: "ORPP", active: false },
    { name: "CRMO", active: false },
  ];

  let form;
  let defaultAddBtn;
  let addVersionInput;

  const getDefaultUiElements = () => {
    defaultAddBtn = form.querySelector(SELECTORS.defaultAddBtn);
    addVersionInput = form.querySelector(SELECTORS.addVersionInput);
  };

  const listenForDisabledChanges = (button) => {
    const observer = new MutationObserver(([entry]) => {
      button.toggleAttribute("disabled", entry.target.disabled);
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

  const createFixVersions = async () => {
    const currentProject = getCurrentProjectName();
    const targetProjects = PROJECTS.filter(
      ({ active, name }) => active && name !== currentProject
    );

    // defaultAddBtn.click(); //TODO uncomment
    // const resp = await callCreateVersionEndpoint(targetProjects);

    // console.log({ resp, targetProjects });
  };

  const renderFixVersionList = () => {
    const currentProject = getCurrentProjectName();

    const container = document.createElement("div");
    const section = document.createElement("aui-section");

    container.id = IDS.listContainer;
    container.className = "aui-dropdown2 aui-style-default aui-layer";
    ("add-btn-continer");
    container.setAttribute(
      "data-aui-alignment-container",
      `#${IDS.addBtnContainer}`
    );
    container.toggleAttribute("resolved", true);
    container.toggleAttribute("aria-hidden", true);

    section.setAttribute("label", "Projects");

    PROJECTS.forEach(({ active, name }) => {
      const checkbox = document.createElement("aui-item-checkbox");
      const isCurrentProject = name === currentProject;

      checkbox.textContent = name;
      checkbox.toggleAttribute("interactive", true);
      checkbox.toggleAttribute("checked", isCurrentProject || active);
      checkbox.toggleAttribute("disabled", isCurrentProject);

      section.appendChild(checkbox);
    });

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
    addBtn.toggleAttribute("resolved", true);
    addBtn.toggleAttribute("disabled", defaultAddBtn.disabled);

    optionsBtn.className =
      "aui-button aui-dropdown2-trigger aui-button-split-more";
    optionsBtn.textContent = MESSAGES.optionsBtnContent;
    optionsBtn.setAttribute("role", "button");
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

  const init = async () => {
    try {
      await lookForAppContainer();
    } catch (err) {
      return handleContainerNotFound();
    }

    getDefaultUiElements();
    renderUiElements();
  };

  init();
})();
