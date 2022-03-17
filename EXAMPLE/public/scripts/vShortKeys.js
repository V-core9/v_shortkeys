/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./EXAMPLE/source/appExample.js":
/*!**************************************!*\
  !*** ./EXAMPLE/source/appExample.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//* Loading of some random things to make the example work\r\nconst { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = __webpack_require__(/*! ./helpers */ \"./EXAMPLE/source/helpers.js\");\r\n\r\n\r\n//?- - - - - - - - - - -\r\nconst vShortKeys = __webpack_require__(/*! ../../ */ \"./index.js\");\r\nvar vsk = new vShortKeys();\r\n\r\nvsk.setOption({ debug: true, interval: 250 });\r\n\r\nvsk.setOption({ interval: (1000 / 60) });\r\n\r\n//* vShortKeys.registerShortcut(name, buttons, callback, description, autoTrigger, coolDown)\r\n//? Super basic example:\r\nvsk.registerShortcut(\"number1\", [49], () => console.log('YEA Demo Button 1'));\r\n\r\n//? Register few shortcuts:\r\nvsk.registerShortcut(\"clearConsole\", [67, 83], clearConsole, \"Will clear the console messages.\", 500, 1000);\r\nvsk.registerShortcut(\"rootModal\", [77, 79, 68], toggleRootModal, \"Random demo modal pops up.\", 2000, 1000);\r\nvsk.registerShortcut(\"fullScreen.toggle\", [18, 13], fullScreen.toggle, \"Toggler for the fullscreen mode.\", 1000, 0);\r\nvsk.registerShortcut(\"console.log\", [81, 87, 69], messageConsoleDemo, \"This will send console log message.\", 250, 1000);\r\n\r\n//? Enable and Disable \"rootModal\" Shortcut using 2 other.\r\nvsk.registerShortcut(\"enableRootModal\", [69, 82, 77], () => vsk.enableShortcut(\"rootModal\"), \"Enable Root Modal Shortcut.\", 1000, 0);\r\nvsk.registerShortcut(\"disableRootModal\", [68, 82, 77], () => vsk.disableShortcut(\"rootModal\"), \"Disable Root Modal Shortcut.\", 1000, 0);\r\n\r\n//? Probably will not work cuz it needs to open that window before chrome allows you to close it.\r\nvsk.registerShortcut(\"closeWindow\", [18, 67], closeWindowFunc, \"Will try to close the window. NOTE:Disabled so we dont press it at random.\", 0, 0);\r\nvsk.registerShortcut(\"reEnableCloseWindow\", [69, 67, 87], () => vsk.enableShortcut(\"closeWindow\"), \"Re-Enable [closeWindow] Shortcut .\", 1000, 0);\r\n\r\n//? Enable and Disable debug logging using the shortcuts\r\nvsk.registerShortcut(\"enableDebugLogging\", [68, 66, 71], () => vsk.setOption({ debug: true }), \"Enable debug logging\", 1000, 0);\r\nvsk.registerShortcut(\"disableDebugLogging\", [71, 66, 72], () => vsk.setOption({ debug: false }), \"Disable debug logging\", 1000, 0);\r\n\r\n\r\n//? Disable the one that can close the tab. [init demo]\r\nvsk.disableShortcut(\"closeWindow\");\r\n\r\nvsk.setOption({ debug: false });\r\n//!---------------------------------------------\r\n\r\n\r\nconsole.log(vsk);\r\nconsole.table(vsk.shortKeys);\r\n\r\n\r\nvar skList = vsk.shortKeys;\r\n\r\nvar stringShortKeys = '';\r\nfor (let i = 0; i < skList.length; i++) {\r\n  stringShortKeys += `\r\n                        <div class=\"singleShotCode\">\r\n                            <p class=\"name\"><span class=\"number\">${i + 1}. ${skList[i].name}()</span></p>\r\n                            <p>🎹 Keys : ${JSON.stringify(skList[i].buttons.map(item => String.fromCharCode(item)))}</p>\r\n                            <p class=\"delay\">⏳ CoolDown: ${skList[i].coolDown}ms</p>\r\n                            <p class=\"delay\">🔃 AutoTrigger: ${skList[i].autoTrigger}ms</p>\r\n                            ${(skList[i].disabled == true) ? '<p style=\"color:red;\">Disabled</p>' : ''}\r\n                            <div class=\"description\">\r\n                                <h4>Description:</h4>\r\n                                <p>${skList[i].description}</p>\r\n                            </div>\r\n                        </div>\r\n                        `;\r\n}\r\ndocument.querySelector('.docs').innerHTML = stringShortKeys;\r\n\n\n//# sourceURL=webpack://v_shortkeys/./EXAMPLE/source/appExample.js?");

/***/ }),

/***/ "./EXAMPLE/source/helpers.js":
/*!***********************************!*\
  !*** ./EXAMPLE/source/helpers.js ***!
  \***********************************/
/***/ ((module) => {

eval("const fullScreen = {\r\n\r\n  _status: false,\r\n\r\n  get status() {\r\n    return this._status;\r\n  },\r\n\r\n  set status(value) {\r\n    if (typeof value === 'boolean') {\r\n      this._status = value;\r\n      console.log('Fullscreen Status : ' + this._status);\r\n    } else {\r\n      throw new Error('Fullscreen status must be a boolean');\r\n    }\r\n  },\r\n\r\n  toggle: async () => {\r\n    if (fullScreen.status) {\r\n      fullScreen.status = false;\r\n      fullScreen.close();\r\n    } else {\r\n      fullScreen.status = true;\r\n      fullScreen.open();\r\n    }\r\n  },\r\n\r\n  open: async () => {\r\n    var fullScreenBody = document.body;\r\n    if (fullScreenBody.requestFullscreen) {\r\n      fullScreenBody.requestFullscreen();\r\n    } else if (fullScreenBody.webkitRequestFullscreen) {\r\n      /* Safari */\r\n      fullScreenBody.webkitRequestFullscreen();\r\n    } else if (fullScreenBody.msRequestFullscreen) {\r\n      /* IE11 */\r\n      fullScreenBody.msRequestFullscreen();\r\n    }\r\n  },\r\n\r\n  close: async () => {\r\n    if (document.exitFullscreen) {\r\n      document.exitFullscreen();\r\n    } else if (document.webkitExitFullscreen) {\r\n      /* Safari */\r\n      document.webkitExitFullscreen();\r\n    } else if (document.msExitFullscreen) {\r\n      /* IE11 */\r\n      document.msExitFullscreen();\r\n    }\r\n  }\r\n};\r\n\r\nconst closeWindowFunc = async () => {\r\n  window.close();\r\n};\r\n\r\nconst toggleRootModal = async () => {\r\n  var rootModal = document.querySelector('.rootModal');\r\n  if (rootModal !== null) {\r\n    rootModal.remove();\r\n  } else {\r\n    document.body.innerHTML += `\r\n          <div class=\"rootModal\">\r\n              <div class=\"inner\">\r\n                  <p class=\"title\">Something Happened</p>\r\n                  <p class=\"description\">Yea you can say so something just showed up...sooo</p>\r\n                  <button>Yea</button>\r\n                  <button>No</button>\r\n              </div>\r\n          </div>\r\n      `;\r\n  }\r\n};\r\n\r\nconst messageConsoleDemo = async () => {\r\n  console.log('PRESSED MESSAGE SHORTKEYS @' + Date.now());\r\n};\r\n\r\nconst clearConsole = async () => {\r\n  console.clear();\r\n};\r\n\r\nmodule.exports = {\r\n  closeWindowFunc,\r\n  fullScreen,\r\n  toggleRootModal,\r\n  messageConsoleDemo,\r\n  clearConsole\r\n};\r\n\n\n//# sourceURL=webpack://v_shortkeys/./EXAMPLE/source/helpers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./src */ \"./src/index.js\");\r\n\n\n//# sourceURL=webpack://v_shortkeys/./index.js?");

/***/ }),

/***/ "./src/debug.js":
/*!**********************!*\
  !*** ./src/debug.js ***!
  \**********************/
/***/ ((module) => {

eval("var debug = false;\r\n\r\nmodule.exports = {\r\n\r\n  log: (data) => (debug) ? console.log(data) : null,\r\n  info: (data) => (debug) ? console.info(data) : null,\r\n  warn: (data) => (debug) ? console.warn(data) : null,\r\n\r\n  set debug(value = false) {\r\n    if (typeof value === 'boolean') {\r\n      debug = value;\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  },\r\n  get debug() {\r\n      return debug || false;\r\n  },\r\n\r\n};\r\n\n\n//# sourceURL=webpack://v_shortkeys/./src/debug.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vShortKeyItem = __webpack_require__(/*! ./shortcut-item-class */ \"./src/shortcut-item-class.js\");\r\n\r\nconst dbg = __webpack_require__(/*! ./debug */ \"./src/debug.js\");\r\nconst { log, warn, info } = dbg;\r\n\r\nmodule.exports = function vShortKeys(data = {}) {\r\n  this.shortKeys = data.shortKeys || [];\r\n  this.currentPresses = [];\r\n  this.intervalObject = null;\r\n\r\n  this.options = {\r\n    loopInterval: (1000 / 60), // loop interval in milliseconds\r\n  };\r\n\r\n  //? Start and stop methods.\r\n  this.start = () => {\r\n    this.intervalObject = setInterval(this.loop, this.options.loopInterval);\r\n  };\r\n\r\n  this.stop = () => {\r\n    clearInterval(this.intervalObject);\r\n    this.intervalObject = null;\r\n    this.currentPresses = [];\r\n  };\r\n\r\n  //? Main Looping Function\r\n  this.loop = () => {\r\n    if (this.currentPresses.length > 0) {\r\n      log(this.currentPresses);\r\n      var i, j;\r\n      for (i = 0; i < this.shortKeys.length; i++) {\r\n        if (this.shortKeys[i].disabled !== true) {\r\n          var btnNum = this.shortKeys[i].buttons.length;\r\n          for (j = 0; j < this.shortKeys[i].buttons.length; j++) {\r\n            if (this.currentPresses.indexOf(this.shortKeys[i].buttons[j]) > -1) {\r\n              btnNum--;\r\n            }\r\n          }\r\n          if (btnNum == 0) {\r\n            var timeDelta = Date.now() - this.shortKeys[i].date;\r\n            if (((this.shortKeys[i].triggered == false) || (timeDelta > this.shortKeys[i].autoTrigger)) && (timeDelta > this.shortKeys[i].coolDown)) {\r\n              this.shortKeys[i].exec();\r\n              this.shortKeys[i].date = Date.now();\r\n              this.shortKeys[i].triggered = true;\r\n              warn(`Triggered : ${this.shortKeys[i].name}`);\r\n            }\r\n          } else {\r\n            if (this.shortKeys[i].triggered) this.shortKeys[i].triggered = false;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n  };\r\n\r\n  this.findByName = (name) => {\r\n    for (var i = 0; i < this.shortKeys.length; i++) {\r\n      if (this.shortKeys[i].name == name) return this.shortKeys[i];\r\n    }\r\n    return null;\r\n  };\r\n\r\n  //? Enable/Disable Shortcut\r\n  this.enableShortcut = (name) => {\r\n    try {\r\n      var item = this.findByName(name);\r\n      if (item.disabled !== true) {\r\n        log(`🧯 Failed : Shortcut is already enabled [${name}]`);\r\n        return false;\r\n      } else {\r\n        item.disabled = false;\r\n        log(`🟢 Shortcut Enabled : ${name}`);\r\n        return true;\r\n      }\r\n    } catch (err) {\r\n      return err;\r\n    }\r\n  };\r\n\r\n  this.disableShortcut = (name) => {\r\n    try {\r\n      var item = this.findByName(name);\r\n      if (item.disabled) {\r\n        log(`🧯 Failed : Shortcut is already disabled [${name}]`);\r\n        return false;\r\n      } else {\r\n        this.findByName(name).disabled = true;\r\n        log(`🛑 Disabled Shortcut : ${name}`);\r\n        return true;\r\n      }\r\n    } catch (err) {\r\n      return err;\r\n    }\r\n  };\r\n\r\n  //? Method to register new Shortcuts\r\n  this.registerShortcut = (name, buttons, exec, description = \"\", autoTrigger = 0, coolDown = 0) => {\r\n    var newItem = new vShortKeyItem(name, buttons, exec, description, autoTrigger, coolDown);\r\n    this.shortKeys.push(newItem);\r\n    log(`📃 Shortcut Registered : ${name}`);\r\n  };\r\n\r\n  //? Event Handlers [ KeyDown, KeyUp ]\r\n  this.keyDown = (event) => {\r\n    var key = event.keyCode;\r\n    if (!this.currentPresses.includes(key)) {\r\n      this.currentPresses.push(key);\r\n    }\r\n  };\r\n\r\n  this.keyUp = (ev) => {\r\n    var key = ev.keyCode;\r\n    var index = this.currentPresses.indexOf(key);\r\n    if (index > -1) {\r\n      this.currentPresses.splice(index, 1);\r\n    }\r\n  };\r\n\r\n  this.setLoopInterval = (interval) => {\r\n    try {\r\n      info(`Setting LoopInterval Value to ${interval}`);\r\n      this.options.loopInterval = interval;\r\n      this.stop();\r\n      this.start();\r\n      return true;\r\n    } catch (err) {\r\n      warn(err);\r\n      return false;\r\n    }\r\n  };\r\n\r\n  this.setOption = (options = {}) => {\r\n    info(`📐 Setting Options`);\r\n    if (options.debug !== undefined) dbg.debug = options.debug;\r\n    if (options.interval !== undefined) this.setLoopInterval(options.interval);\r\n  };\r\n\r\n\r\n  this.setEventListeners = () => {\r\n    window.addEventListener(\"keydown\", this.keyDown);\r\n    window.addEventListener(\"keyup\", this.keyUp);\r\n    window.addEventListener('blur', this.stop);\r\n    window.addEventListener('focus', this.start);\r\n    return this;\r\n  };\r\n\r\n  //* In case some options have been passed in.\r\n  if (data.options !== undefined) this.setOption(data.options);\r\n\r\n  this.setEventListeners();\r\n  this.start();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://v_shortkeys/./src/index.js?");

/***/ }),

/***/ "./src/shortcut-item-class.js":
/*!************************************!*\
  !*** ./src/shortcut-item-class.js ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = function vShortKeyItem(name, buttons, exec, description = \"\", autoTrigger = 0, coolDown = 0) {\r\n  this.name = name;\r\n  this.description = description;\r\n  this.buttons = buttons;\r\n  this.exec = exec;\r\n  this.autoTrigger = autoTrigger;\r\n  this.coolDown = coolDown;\r\n  this.date = Date.now();\r\n  this.triggered = false;\r\n  this.disabled = false;\r\n};\r\n\n\n//# sourceURL=webpack://v_shortkeys/./src/shortcut-item-class.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./EXAMPLE/source/appExample.js");
/******/ 	
/******/ })()
;