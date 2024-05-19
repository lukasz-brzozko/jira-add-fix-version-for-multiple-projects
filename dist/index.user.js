function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ==UserScript==
// @name         Jira Add Fix Version For Multiple Projects
// @namespace    https://github.com/lukasz-brzozko/jira-add-fix-version-for-multiple-projects
// @version      2024-05-18
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

  var GET_PROJECT_VERSIONS_MAX_RESULTS = 50;
  var SELECTORS = {
    defaultAddBtn: ".aui-button.aui-button-primary",
    addVersionInput: ".releases-add__name > input",
    versionTableRow: "tr[data-version-id]",
    versionTableLink: ".versions-table__name a",
    versionTableRowPanel: ".dynamic-table__actions div.version-actions > ul.aui-list-truncate",
    versionTableRowArchiveBtn: "a.project-config-operations-archive",
    versionTableBody: "tbody.items",
    archiveForMultipleProjectBtn: ".archive-for-multiple-projects-btn"
  };
  var IDS = {
    form: "releases-add__version",
    listContainer: "fix-version-list",
    addBtnContainer: "add-btn-container",
    versionsTable: "versions-table"
  };
  var MESSAGES = {
    customArchiveButton: "Archive for more projects",
    optionsBtnContent: "Split More",
    addBtnContent: "Add for more projects",
    containerFound: "Znaleziono formularz ".concat(IDS.form),
    versionCreated: "Created",
    error: {
      basic: "Error",
      containerNotFound: "Nie znaleziono kontenera ".concat(IDS.form, ". Skrypt zosta\u0142 wstrzymany.")
    }
  };
  var BASE_URL = "https://jira.nd0.pl";
  var ENDPOINTS = {
    createVersion: "/rest/api/2/version",
    updateVersion: function updateVersion(id) {
      return "/rest/api/2/version/".concat(id);
    },
    getProjectVersions: function getProjectVersions(project) {
      return "/rest/api/2/project/".concat(project, "/version");
    }
  };
  var JIRA_FIX_VERSION_PROJECTS = "JIRA_FIX_VERSION_PROJECTS";
  var DEFAULT_PROJECT_LIST = [{
    name: "ORB2BPOO",
    id: "13001",
    active: true
  }, {
    name: "B2BM",
    id: "13513",
    active: true
  }, {
    name: "ORPP",
    id: "12919",
    active: false
  }, {
    name: "CRMO",
    id: "14600",
    active: false
  }];
  var form;
  var defaultAddBtn;
  var addVersionInput;
  var projects;
  var versionsTable;
  var versionsTableobserver;
  var versionTableRows = [];
  var linkStyles = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var myCss, styleTag;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            myCss = GM_getResourceText("styles");
            styleTag = document.createElement("style");
            styleTag.textContent = myCss;
            document.body.prepend(styleTag);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function linkStyles() {
      return _ref.apply(this, arguments);
    };
  }();
  var getDefaultUiElements = function getDefaultUiElements() {
    defaultAddBtn = form.querySelector(SELECTORS.defaultAddBtn);
    addVersionInput = form.querySelector(SELECTORS.addVersionInput);
    udpateVersionsTableEl();
  };
  var getVersionRows = function getVersionRows() {
    return new Promise(function (resolve, reject) {
      var attempts = 0;
      var intervalId = 0;
      udpateVersionsTableEl();
      var rows = versionsTable.querySelectorAll(SELECTORS.versionTableRow);
      if (rows.length > 0) return resolve(rows);
      intervalId = setInterval(function () {
        attempts++;
        udpateVersionsTableEl();
        var rows = versionsTable.querySelectorAll(SELECTORS.versionTableRow);
        if (rows.length > 0) {
          clearInterval(intervalId);
          return resolve(rows);
        } else if (attempts > 25) {
          clearInterval(intervalId);
          return reject(new Error("Not found"));
        }
      }, 500);
    });
  };
  var debounce = function debounce(callback, wait) {
    var timeoutId = null;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        callback.apply(void 0, args);
      }, wait);
    };
  };
  var getProjectList = function getProjectList() {
    try {
      var _JSON$parse;
      var projectsString = localStorage.getItem(JIRA_FIX_VERSION_PROJECTS);
      projects = (_JSON$parse = JSON.parse(projectsString)) !== null && _JSON$parse !== void 0 ? _JSON$parse : [].concat(DEFAULT_PROJECT_LIST);
    } catch (e) {
      projects = [].concat(DEFAULT_PROJECT_LIST);
    }
    return projects;
  };
  var listenForDisabledChanges = function listenForDisabledChanges(button) {
    var observer = new MutationObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        entry = _ref3[0];
      var isTargetDisabled = entry.target.disabled;
      button.toggleAttribute("disabled", isTargetDisabled);
      button.setAttribute("tabindex", isTargetDisabled ? "-1" : "0");
    });
    observer.observe(defaultAddBtn, {
      attributeFilter: ["disabled"]
    });
  };
  var callCreateVersionEndpoint = function callCreateVersionEndpoint(projects) {
    var body = {
      project: "",
      name: addVersionInput.value,
      description: "",
      userStartDate: "",
      userReleaseDate: ""
    };
    return Promise.allSettled(projects.map(function (_ref4) {
      var name = _ref4.name;
      var options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_objectSpread(_objectSpread({}, body), {}, {
          project: name
        }))
      };
      return fetch(ENDPOINTS.createVersion, options);
    }));
  };
  var getCurrentProjectName = function getCurrentProjectName() {
    return window.location.pathname.split("/").at(-1);
  };
  var getIsProjectsPage = function getIsProjectsPage() {
    return window.location.pathname.split("/").at(1) === "projects";
  };
  var displayMessage = function displayMessage(_ref5) {
    var _ref5$type = _ref5.type,
      type = _ref5$type === void 0 ? "info" : _ref5$type,
      title = _ref5.title,
      content = _ref5.content;
    unsafeWindow.AJS.flag({
      type: type,
      body: "<strong>".concat(title, "</strong>\n            <ul style=\"margin-top: 8px; padding-left: 0;\">\n              ").concat(content, "\n            ")
    });
  };
  var getListItemsContent = function getListItemsContent(_ref6) {
    var data = _ref6.data,
      targetProjects = _ref6.targetProjects,
      responses = _ref6.responses;
    var listElements = data.map(function (el, index) {
      var _ref7, _el$errorMessages$, _el$errors;
      var project = targetProjects[index].name;
      var status = responses[index].value.status;
      var message = status === 201 ? MESSAGES.versionCreated : (_ref7 = (_el$errorMessages$ = el.errorMessages[0]) !== null && _el$errorMessages$ !== void 0 ? _el$errorMessages$ : (_el$errors = el.errors) === null || _el$errors === void 0 ? void 0 : _el$errors.name) !== null && _ref7 !== void 0 ? _ref7 : MESSAGES.error.basic;
      var lozengeClassName = status === 201 ? "aui-lozenge-success" : "aui-lozenge-removed";
      var messageColor = status === 201 ? "--aui-lozenge-success-subtle-text-color" : "--aui-badge-removed-text-color";
      return "\n      <li>\n        <span>".concat(project, ": </span>\n        <span class=\"aui-lozenge aui-lozenge-subtle ").concat(lozengeClassName, "\">").concat(status, "</span>\n        <span style=\"font-size: 10px; line-height: 1; color: var(").concat(messageColor, ")\"> - ").concat(message, "</span>\n      </li>");
    });
    return listElements;
  };
  var getTargetProjects = function getTargetProjects() {
    var currentProject = getCurrentProjectName();
    var targetProjects = projects.filter(function (_ref8) {
      var active = _ref8.active,
        name = _ref8.name;
      return active && name !== currentProject;
    });
    return targetProjects;
  };
  var createFixVersions = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var target, targetProjects, responses, data, listElements;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            target = e.currentTarget;
            if (!target.hasAttribute("disabled")) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            targetProjects = getTargetProjects();
            if (!(targetProjects.length > 0)) {
              _context2.next = 15;
              break;
            }
            target.busy();
            _context2.next = 8;
            return callCreateVersionEndpoint(targetProjects);
          case 8:
            responses = _context2.sent;
            _context2.next = 11;
            return Promise.all(responses.map(function (resp) {
              return resp.value.json();
            }));
          case 11:
            data = _context2.sent;
            listElements = getListItemsContent({
              data: data,
              targetProjects: targetProjects,
              responses: responses
            });
            displayMessage({
              type: "info",
              title: "Response status of other projects",
              content: listElements.join("")
            });
            target.idle();
          case 15:
            defaultAddBtn.click();
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function createFixVersions(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  var saveStateInLocalStorage = debounce(function (state) {
    localStorage.setItem(JIRA_FIX_VERSION_PROJECTS, JSON.stringify(state));
  }, 500);
  var handleProjectListChange = function handleProjectListChange(e) {
    var textContent = e.target.textContent;
    var currentProject = getCurrentProjectName();
    var project = projects.find(function (_ref10) {
      var name = _ref10.name;
      return name === textContent && name !== currentProject;
    });
    if (!project) return;
    var projectPrevValue = project.active;
    var projectNewValue = e.target.hasAttribute("checked");
    if (projectPrevValue === projectNewValue) return;
    project.active = projectNewValue;
    saveStateInLocalStorage(projects);
  };
  var renderFixVersionList = function renderFixVersionList() {
    var currentProject = getCurrentProjectName();
    var container = document.createElement("aui-dropdown-menu");
    var section = document.createElement("aui-section");
    container.id = IDS.listContainer;
    container.className = "aui-dropdown2 aui-style-default aui-layer";
    container.setAttribute("data-aui-alignment-container", "#".concat(IDS.addBtnContainer));
    container.toggleAttribute("resolved", true);
    container.toggleAttribute("aria-hidden", true);
    section.setAttribute("label", "Projects");
    projects.forEach(function (_ref11) {
      var active = _ref11.active,
        name = _ref11.name;
      var checkbox = document.createElement("aui-item-checkbox");
      var isCurrentProject = name === currentProject;
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
  var renderBtns = function renderBtns() {
    var buttonContainer = document.createElement("div");
    var addBtn = document.createElement("div");
    var optionsBtn = document.createElement("div");
    buttonContainer.id = IDS.addBtnContainer;
    buttonContainer.className = "aui-buttons";
    addBtn.className = "aui-button aui-button-split-main";
    addBtn.textContent = MESSAGES.addBtnContent;
    addBtn.setAttribute("role", "button");
    addBtn.setAttribute("tabindex", defaultAddBtn.disabled ? "-1" : "0");
    addBtn.toggleAttribute("resolved", true);
    addBtn.toggleAttribute("disabled", defaultAddBtn.disabled);
    optionsBtn.className = "aui-button aui-dropdown2-trigger aui-button-split-more";
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
  var renderUiElements = function renderUiElements() {
    renderBtns();
    renderFixVersionList();
  };
  var lookForAppContainer = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var DOMElements;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Promise(function (resolve, reject) {
              var maxAttempts = 50;
              var attempt = 0;
              var setIntervalId = setInterval(function () {
                form = document.getElementById(IDS.form);
                if (form) {
                  clearInterval(setIntervalId);
                  window.console.info("%c ".concat(MESSAGES.containerFound), "background: #B7E1CD; color: #000; font-size: 20px");
                  resolve({
                    container: form
                  });
                } else {
                  if (attempt >= maxAttempts) {
                    clearInterval(setIntervalId);
                    reject({
                      error: MESSAGES.error.containerNotFound
                    });
                  } else {
                    attempt++;
                  }
                }
              }, 300);
            });
          case 2:
            DOMElements = _context3.sent;
            return _context3.abrupt("return", DOMElements);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function lookForAppContainer() {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleContainerNotFound = function handleContainerNotFound() {
    window.console.error("%c ".concat(MESSAGES.error), "background: red; color: #fff; font-size: 20px");
  };
  var handleNavigate = function handleNavigate() {
    if (getIsProjectsPage()) return init();
  };
  var filterFixVersionRows = function filterFixVersionRows(rows) {
    var filteredRows = _toConsumableArray(rows).filter(function (row) {
      var anchor = row.querySelector(SELECTORS.versionTableLink);
      return anchor === null || anchor === void 0 ? void 0 : anchor.textContent.match(/^FrontPortal-(\d)(\.\d{0,3})?$/);
    });
    return filteredRows;
  };
  var getVersionIds = function getVersionIds(_ref13) {
    var projectsVersions = _ref13.projectsVersions,
      targetVersionName = _ref13.targetVersionName;
    return projectsVersions.map(function (projectVersions) {
      var _projectVersions$valu;
      return (_projectVersions$valu = projectVersions.values.find(function (_ref14) {
        var name = _ref14.name;
        return name === targetVersionName;
      })) === null || _projectVersions$valu === void 0 ? void 0 : _projectVersions$valu.id;
    });
  };
  var archiveVersions = function archiveVersions(versionIds) {
    return Promise.allSettled(versionIds.map(function (id) {
      if (!id) return;
      var options = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          archived: true
        })
      };
      var url = new URL(ENDPOINTS.updateVersion(id), BASE_URL);
      return fetch(url.toString(), options);
    }));
  };
  var getArchiveListItemsContent = function getArchiveListItemsContent(_ref15) {
    var archiveData = _ref15.archiveData,
      targetProjects = _ref15.targetProjects,
      archiveResponses = _ref15.archiveResponses;
    var SUCCESS_STATUS = 200;
    var NOT_EXISTS_STATUS = 600;
    var listElements = archiveData.map(function (el, index) {
      var _ref16, _el$errorMessages$2, _el$errors2;
      var project = targetProjects[index].name;
      var value = archiveResponses[index].value;
      var status = value ? archiveResponses[index].value.status : NOT_EXISTS_STATUS;
      var message = "";
      switch (status) {
        case SUCCESS_STATUS:
          message = "Version archived";
          break;
        case NOT_EXISTS_STATUS:
          message = "Did not find version with the provided id";
          break;
        default:
          message = (_ref16 = (_el$errorMessages$2 = el.errorMessages[0]) !== null && _el$errorMessages$2 !== void 0 ? _el$errorMessages$2 : (_el$errors2 = el.errors) === null || _el$errors2 === void 0 ? void 0 : _el$errors2.name) !== null && _ref16 !== void 0 ? _ref16 : MESSAGES.error.basic;
          break;
      }
      var lozengeClassName = status === SUCCESS_STATUS ? "aui-lozenge-success" : "aui-lozenge-removed";
      var messageColor = status === SUCCESS_STATUS ? "--aui-lozenge-success-subtle-text-color" : "--aui-badge-removed-text-color";
      return "\n      <li>\n        <span>".concat(project, ": </span>\n        <span class=\"aui-lozenge aui-lozenge-subtle ").concat(lozengeClassName, "\">").concat(status, "</span>\n        <span style=\"font-size: 10px; line-height: 1; color: var(").concat(messageColor, ")\"> - ").concat(message, "</span>\n      </li>");
    });
    return listElements;
  };
  var handleArchiveBtnClick = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref17) {
      var e, archiveButton, targetProjects, targetVersionName, projectsVersionsResponses, projectsVersions, versionIds, archiveResponses, archiveData, listElements;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            e = _ref17.e, archiveButton = _ref17.archiveButton;
            targetProjects = getTargetProjects();
            targetVersionName = e.currentTarget.dataset.fixVersionName; // Fetch project versions
            _context4.next = 5;
            return fetchProjectsVersions(targetProjects);
          case 5:
            projectsVersionsResponses = _context4.sent;
            _context4.next = 8;
            return Promise.all(projectsVersionsResponses.map(function (resp) {
              return resp.value.json();
            }));
          case 8:
            projectsVersions = _context4.sent;
            // Extract versions ids from the response data
            versionIds = getVersionIds({
              projectsVersions: projectsVersions,
              targetVersionName: targetVersionName
            }); // Call an endpoint to archive project version
            _context4.next = 12;
            return archiveVersions(versionIds);
          case 12:
            archiveResponses = _context4.sent;
            _context4.next = 15;
            return Promise.all(archiveResponses.map(function (resp) {
              if (!resp.value) return;
              return resp.value.json();
            }));
          case 15:
            archiveData = _context4.sent;
            listElements = getArchiveListItemsContent({
              archiveData: archiveData,
              targetProjects: targetProjects,
              archiveResponses: archiveResponses
            });
            displayMessage({
              type: "info",
              title: "".concat(targetVersionName, " - response status of other projects (archiving)"),
              content: listElements.join("")
            });
            archiveButton.click();
          case 19:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleArchiveBtnClick(_x2) {
      return _ref18.apply(this, arguments);
    };
  }();
  var createArchiveButton = function createArchiveButton(_ref19) {
    var name = _ref19.name,
      archiveButton = _ref19.archiveButton;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = MESSAGES.customArchiveButton;
    a.dataset.fixVersionName = name;
    a.className = "archive-for-multiple-projects-btn";
    li.appendChild(a);
    a.addEventListener("click", function (e) {
      return handleArchiveBtnClick({
        e: e,
        archiveButton: archiveButton
      });
    });
    return li;
  };
  var fetchProjectsVersions = function fetchProjectsVersions(targetProjects) {
    return Promise.allSettled(targetProjects.map(function (_ref20) {
      var name = _ref20.name;
      var url = new URL(ENDPOINTS.getProjectVersions(name), BASE_URL);
      url.searchParams.set("orderBy", "-sequence");
      url.searchParams.set("maxResults", GET_PROJECT_VERSIONS_MAX_RESULTS);
      return fetch(url.toString());
    }));
  };
  var addArchiveButtons = function addArchiveButtons() {
    versionTableRows.forEach(function (row) {
      var anchor = row.querySelector(SELECTORS.versionTableLink);
      var buttonPanel = row === null || row === void 0 ? void 0 : row.querySelector(SELECTORS.versionTableRowPanel);
      var archiveButton = buttonPanel === null || buttonPanel === void 0 ? void 0 : buttonPanel.querySelector(SELECTORS.versionTableRowArchiveBtn);
      var archiveForMultipleProjectBtn = buttonPanel === null || buttonPanel === void 0 ? void 0 : buttonPanel.querySelector(SELECTORS.archiveForMultipleProjectBtn);
      if (!archiveButton || archiveForMultipleProjectBtn) return;
      var archiveButtonContainer = archiveButton === null || archiveButton === void 0 ? void 0 : archiveButton.parentNode;
      var fixVersionName = anchor.textContent;
      var customArchiveButton = createArchiveButton({
        name: fixVersionName,
        archiveButton: archiveButton
      });
      archiveButtonContainer.after(customArchiveButton);
    });
  };
  var addButtons = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var rows;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getVersionRows();
          case 2:
            rows = _context5.sent;
            versionTableRows = filterFixVersionRows(rows);
            addArchiveButtons();
          case 5:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function addButtons() {
      return _ref21.apply(this, arguments);
    };
  }();
  var udpateVersionsTableEl = function udpateVersionsTableEl() {
    versionsTable = document.getElementById(IDS.versionsTable);
  };
  var handleVersionTableBodyUpdate = debounce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return addButtons();
        case 2:
          udpateVersionsTableEl();
          versionsTableobserver.disconnect();
          listenForTableChanges();
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })), 250);
  var listenForTableChanges = function listenForTableChanges() {
    var versionsTableBody = versionsTable.querySelector(SELECTORS.versionTableBody);
    versionsTableobserver = new MutationObserver(handleVersionTableBodyUpdate);
    versionsTableobserver.observe(versionsTableBody, {
      childList: true
    });
  };
  var initArchive = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return addButtons();
          case 3:
            listenForTableChanges();
            _context7.next = 10;
            break;
          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            console.error("Nie znaleziono rekordów z fix version w tabeli");
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 6]]);
    }));
    return function initArchive() {
      return _ref23.apply(this, arguments);
    };
  }();
  var init = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return lookForAppContainer();
          case 3:
            _context8.next = 8;
            break;
          case 5:
            _context8.prev = 5;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", handleContainerNotFound());
          case 8:
            linkStyles();
            getProjectList();
            getDefaultUiElements();
            renderUiElements();
            _context8.next = 14;
            return initArchive();
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 5]]);
    }));
    return function init() {
      return _ref24.apply(this, arguments);
    };
  }();
  if (getIsProjectsPage()) return init();
  window.navigation.addEventListener("navigate", handleNavigate);
})();