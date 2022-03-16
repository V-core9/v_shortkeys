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

/***/ "./EXAMPLE/source/helpers.js":
/*!***********************************!*\
  !*** ./EXAMPLE/source/helpers.js ***!
  \***********************************/
/***/ ((module) => {

eval("const fullScreen = {\r\n\r\n  _status: false,\r\n\r\n  get status() {\r\n    return this._status;\r\n  },\r\n\r\n  set status(value) {\r\n    if (typeof value === 'boolean') {\r\n      this._status = value;\r\n      console.log('Fullscreen Status : ' + this._status);\r\n    } else {\r\n      throw new Error('Fullscreen status must be a boolean');\r\n    }\r\n  },\r\n\r\n  toggle: async () => {\r\n    if (fullScreen.status) {\r\n      fullScreen.status = false;\r\n      fullScreen.close();\r\n    } else {\r\n      fullScreen.status = true;\r\n      fullScreen.open();\r\n    }\r\n  },\r\n\r\n  open: async () => {\r\n    var fullScreenBody = document.body;\r\n    if (fullScreenBody.requestFullscreen) {\r\n      fullScreenBody.requestFullscreen();\r\n    } else if (fullScreenBody.webkitRequestFullscreen) {\r\n      /* Safari */\r\n      fullScreenBody.webkitRequestFullscreen();\r\n    } else if (fullScreenBody.msRequestFullscreen) {\r\n      /* IE11 */\r\n      fullScreenBody.msRequestFullscreen();\r\n    }\r\n  },\r\n\r\n  close: async () => {\r\n    if (document.exitFullscreen) {\r\n      document.exitFullscreen();\r\n    } else if (document.webkitExitFullscreen) {\r\n      /* Safari */\r\n      document.webkitExitFullscreen();\r\n    } else if (document.msExitFullscreen) {\r\n      /* IE11 */\r\n      document.msExitFullscreen();\r\n    }\r\n  }\r\n};\r\n\r\nconst closeWindowFunc = async () => {\r\n  window.close();\r\n};\r\n\r\nconst toggleRootModal = async () => {\r\n  var rootModal = document.querySelector('.rootModal');\r\n  if (rootModal !== null) {\r\n    rootModal.remove();\r\n  } else {\r\n    document.body.innerHTML += `\r\n          <div class=\"rootModal\">\r\n              <div class=\"inner\">\r\n                  <p class=\"title\">Something Happened</p>\r\n                  <p class=\"description\">Yea you can say so something just showed up...sooo</p>\r\n                  <button>Yea</button>\r\n                  <button>No</button>\r\n              </div>\r\n          </div>\r\n      `;\r\n  }\r\n};\r\n\r\nconst messageConsoleDemo = async () => {\r\n  console.log('PRESSED MESSAGE SHORTKEYS @' + Date.now());\r\n};\r\n\r\nconst clearConsole = async () => {\r\n  console.clear();\r\n};\r\n\r\nmodule.exports = {\r\n  closeWindowFunc,\r\n  fullScreen,\r\n  toggleRootModal,\r\n  messageConsoleDemo,\r\n  clearConsole\r\n};\r\n\n\n//# sourceURL=webpack://v_shortkeys/./EXAMPLE/source/helpers.js?");

/***/ }),

/***/ "./EXAMPLE/source/vShortKeys.V2.js":
/*!*****************************************!*\
  !*** ./EXAMPLE/source/vShortKeys.V2.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo, clearConsole } = __webpack_require__(/*! ./helpers */ \"./EXAMPLE/source/helpers.js\");\r\n\r\nvar demoShortKeys = [\r\n    {\r\n        name: \"console.log\",\r\n        description: \"[q + w + e] \\n This will send console log message. NOTE:-!-will auto trigger soon as it can cuz coolDown is much bigger than autoTrigger time-!-\",\r\n        buttons: [81, 87, 69],\r\n        date: 0,\r\n        triggered: false,\r\n        exec: messageConsoleDemo,\r\n        autoTrigger: 250,\r\n        coolDown: 1000\r\n    },\r\n    {\r\n        name: \"fullScreen.toggle\",\r\n        description: \"[alt + enter] \\n Toggler for the fullscreen mode. NOTE:-!-User can trigger it as fast as it gets to release and press back the same buttons-!-\",\r\n        buttons: [18, 13],\r\n        autoTrigger: 1000,\r\n        date: 0,\r\n        triggered: false,\r\n        exec: fullScreen.toggle,\r\n        coolDown: 0\r\n    },\r\n    {\r\n        name: \"closeWindowFunc\",\r\n        description: \"[alt + c] \\n Will try to close the window. NOTE:Disabled so we dont press it at random.\",\r\n        buttons: [18, 67],\r\n        autoTrigger: 0,\r\n        date: 0,\r\n        triggered: false,\r\n        disabled: true,\r\n        exec: closeWindowFunc,\r\n        coolDown: 0\r\n    },\r\n    {\r\n        name: \"showRootModal\",\r\n        description: \"[m + o + d] \\n Random demo modal pops up.\",\r\n        buttons: [77, 79, 68],\r\n        autoTrigger: 2000,\r\n        date: 0,\r\n        triggered: false,\r\n        disabled: false,\r\n        exec: toggleRootModal,\r\n        coolDown: 1000\r\n    },\r\n    {\r\n        name: \"clearConsole\",\r\n        description: \"[c + s] \\n Will clear the console messages.\",\r\n        buttons: [67, 83],\r\n        autoTrigger: 500,\r\n        date: 0,\r\n        triggered: false,\r\n        disabled: false,\r\n        exec: clearConsole,\r\n        coolDown: 1000\r\n    }\r\n];\r\n\r\nconst vShortKeys = __webpack_require__(/*! ../../index.v2 */ \"./index.v2.js\");\r\n\r\nvar vsk = new vShortKeys({ shortKeys: demoShortKeys, options: { debug: true, loopInterval: 50 } });\r\n\r\nconsole.log(vsk);\r\n\r\nvar stringShortKeys = '<h4>Shortcodes:</h4>';\r\n\r\nfor (let i = 0; i < demoShortKeys.length; i++) {\r\n    stringShortKeys += `\r\n                        <div class=\"singleShotCode\">\r\n                            <p class=\"name\"><span class=\"number\">${i + 1}. ${demoShortKeys[i].name}()</span></p>\r\n                            <p>🎹 Keys : ${JSON.stringify(demoShortKeys[i].buttons)}</p>\r\n                            <p class=\"delay\">⏳ CoolDown: ${demoShortKeys[i].coolDown}ms</p>\r\n                            <p class=\"delay\">🔃 AutoTrigger: ${demoShortKeys[i].autoTrigger}ms</p>\r\n                            ${(demoShortKeys[i].disabled == true) ? '<p style=\"color:red;\">Disabled</p>' : ''}\r\n                            <div class=\"description\">\r\n                                <h4>Description:</h4>\r\n                                <p>${demoShortKeys[i].description}</p>\r\n                            </div>\r\n                        </div>\r\n                        `;\r\n}\r\ndocument.querySelector('.docs').innerHTML = stringShortKeys;\n\n//# sourceURL=webpack://v_shortkeys/./EXAMPLE/source/vShortKeys.V2.js?");

/***/ }),

/***/ "./index.v2.js":
/*!*********************!*\
  !*** ./index.v2.js ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = function vShortKeys(data) {\r\n    this.debug = false;\r\n    this.shortKeys = data.shortKeys || [];\r\n    this.currentPresses = [];\r\n    this.intervalObject = null;\r\n\r\n    this.options = {\r\n        loopInterval: (1000 / 60), // loop interval in milliseconds\r\n    };\r\n\r\n\r\n    //? Start and stop methods.\r\n    this.start = () => {\r\n        this.intervalObject = setInterval(this.loop, this.options.loopInterval);\r\n    };\r\n\r\n    this.stop = () => {\r\n        clearInterval(this.intervalObject);\r\n        this.intervalObject = null;\r\n        this.currentPresses = [];\r\n    };\r\n\r\n\r\n    //? Main Looping Function\r\n    this.loop = () => {\r\n        //console.time('shortCutFunction');\r\n        if (this.currentPresses.length > 0) {\r\n            console.log(this.currentPresses);\r\n            var i, j;\r\n            for (i = 0; i < this.shortKeys.length; i++) {\r\n                if (this.shortKeys[i].disabled !== true) {\r\n                    var btnNum = this.shortKeys[i].buttons.length;\r\n                    for (j = 0; j < this.shortKeys[i].buttons.length; j++) {\r\n                        if (this.currentPresses.indexOf(this.shortKeys[i].buttons[j]) > -1) {\r\n                            btnNum--;\r\n                        }\r\n                    }\r\n                    if (btnNum == 0) {\r\n                        var timeDelta = Date.now() - this.shortKeys[i].date;\r\n                        if (((this.shortKeys[i].triggered == false) || (timeDelta > this.shortKeys[i].autoTrigger)) && (timeDelta > this.shortKeys[i].coolDown )) {\r\n                            this.shortKeys[i].exec();\r\n                            this.shortKeys[i].date = Date.now();\r\n                            this.shortKeys[i].triggered = true;\r\n                            console.warn(`Triggered : ${this.shortKeys[i].name}`);\r\n                        }\r\n                    } else {\r\n                        if (this.shortKeys[i].triggered) {\r\n                            this.shortKeys[i].triggered = false;\r\n                            console.warn(`UN-Triggered : ${this.shortKeys[i].name}`);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        //console.timeEnd('shortCutFunction');\r\n    };\r\n\r\n\r\n    //? Event Handlers [ KeyDown, KeyUp ]\r\n    this.keyDown = (event) => {\r\n        var key = event.keyCode;\r\n        if (!this.currentPresses.includes(key)) {\r\n            this.currentPresses.push(key);\r\n        }\r\n    };\r\n\r\n    this.keyUp = (ev) => {\r\n        var key = ev.keyCode;\r\n        var index = this.currentPresses.indexOf(key);\r\n        if (index > -1) {\r\n            this.currentPresses.splice(index, 1);\r\n        }\r\n    };\r\n\r\n\r\n    //* Setting up options\r\n    this.setLoopInterval = (interval) => {\r\n        try {\r\n            console.info(`Setting LoopInterval Value to ${interval}`);\r\n            this.options.loopInterval = interval;\r\n            return this;\r\n        } catch (e) {\r\n            return e;\r\n        }\r\n    };\r\n\r\n    this.setDebug = (debug) => {\r\n        try {\r\n            console.info(`Setting Debug Value to ${debug}`);\r\n            if (typeof debug === 'boolean') {\r\n                this.debug = debug;\r\n            } else {\r\n                throw new Error('Debug Value must be a boolean');\r\n            }\r\n            return this;\r\n        } catch (e) {\r\n            return e;\r\n        }\r\n    };\r\n\r\n    this.setOptions = (options) => { \r\n        console.info(`Setting Options`);\r\n        if (options.loopInterval !== undefined) this.setLoopInterval(options.loopInterval);\r\n        if (options.debug !== undefined) this.setDebug(options.debug);\r\n    };\r\n\r\n\r\n    this.setEventListeners = () => {\r\n        window.addEventListener(\"keydown\", this.keyDown);\r\n        window.addEventListener(\"keyup\", this.keyUp);\r\n        window.addEventListener('blur', this.stop);\r\n        window.addEventListener('focus', this.start);\r\n        return this;\r\n    };\r\n\r\n    if (data.options !== undefined) this.setOptions(data.options);\r\n\r\n    this.setEventListeners();\r\n    this.start();\r\n};\r\n\n\n//# sourceURL=webpack://v_shortkeys/./index.v2.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./EXAMPLE/source/vShortKeys.V2.js");
/******/ 	
/******/ })()
;