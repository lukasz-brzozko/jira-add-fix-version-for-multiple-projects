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
  };

  const MESSAGES = {
    addBtnContent: "Add for multiple projects",
    containerFound: `Znaleziono formularz ${IDS.form}`,
    error: {
      containerNotFound: `Nie znaleziono kontenera ${IDS.form}. Skrypt został wstrzymany.`,
    },
  };

  const CREATE_VERSION_ENDPOINT = "https://jira.nd0.pl/rest/api/2/version";
  const PROJECTS = [
    { name: "ORB2BPOO", active: true },
    { name: "B2BM", active: true },
    { name: "ORPP", active: true },
    { name: "CRMO", active: false },
  ];

  const payload = {
    project: "ORB2BPOO",
    name: "FrontPortal-1.542",
    description: "",
    userStartDate: "",
    userReleaseDate: "",
  };

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

  const createFixVersions = async () => {
    const currentProject = window.location.pathname.split("/").at(-1);
    const targetProjects = PROJECTS.filter(
      ({ active, name }) => active && name !== currentProject
    );

    // defaultAddBtn.click(); //TODO uncomment
    const resp = await callCreateVersionEndpoint(targetProjects);

    console.log({ resp, targetProjects });
  };

  const renderBtn = () => {
    const buttonContainer = document.createElement("div");
    const button = document.createElement("div");

    button.className = "aui-button";
    button.textContent = MESSAGES.addBtnContent;
    button.setAttribute("role", "button");
    button.toggleAttribute("resolved", true);
    button.toggleAttribute("disabled", defaultAddBtn.disabled);

    buttonContainer.appendChild(button);
    form.appendChild(buttonContainer);

    listenForDisabledChanges(button);

    button.addEventListener("click", createFixVersions);
  };

  const renderUiElements = () => {
    renderBtn();
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
