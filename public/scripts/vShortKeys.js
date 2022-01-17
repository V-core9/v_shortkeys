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

/***/ "./source/helpers.js":
/*!***************************!*\
  !*** ./source/helpers.js ***!
  \***************************/
/***/ ((module) => {

eval("const fullScreen = {\r\n\r\n  _status: false,\r\n\r\n  get status() {\r\n    return this._status;\r\n  },\r\n\r\n  set status(value) {\r\n    if (typeof value === 'boolean') {\r\n      this._status = value;\r\n      console.log('Fullscreen Status : ' + this._status);\r\n    } else {\r\n      throw new Error('Fullscreen status must be a boolean');\r\n    }\r\n  },\r\n\r\n  toggle: async () => {\r\n    if (fullScreen.status) {\r\n      fullScreen.status = false;\r\n      fullScreen.close();\r\n    } else {\r\n      fullScreen.status = true;\r\n      fullScreen.open();\r\n    }\r\n  },\r\n\r\n  open: async () => {\r\n    var fullScreenBody = document.body;\r\n    if (fullScreenBody.requestFullscreen) {\r\n      fullScreenBody.requestFullscreen();\r\n    } else if (fullScreenBody.webkitRequestFullscreen) {\r\n      /* Safari */\r\n      fullScreenBody.webkitRequestFullscreen();\r\n    } else if (fullScreenBody.msRequestFullscreen) {\r\n      /* IE11 */\r\n      fullScreenBody.msRequestFullscreen();\r\n    }\r\n  },\r\n\r\n  close: async () => {\r\n    if (document.exitFullscreen) {\r\n      document.exitFullscreen();\r\n    } else if (document.webkitExitFullscreen) {\r\n      /* Safari */\r\n      document.webkitExitFullscreen();\r\n    } else if (document.msExitFullscreen) {\r\n      /* IE11 */\r\n      document.msExitFullscreen();\r\n    }\r\n  }\r\n};\r\n\r\nconst closeWindowFunc = async () => {\r\n  window.close();\r\n};\r\n\r\nconst toggleRootModal = async () => {\r\n  var rootModal = document.querySelector('.rootModal');\r\n  if (rootModal !== null) {\r\n    rootModal.remove();\r\n  } else {\r\n    document.body.innerHTML += `\r\n          <div class=\"rootModal\">\r\n              <div class=\"inner\">\r\n                  <p class=\"title\">Something Happened</p>\r\n                  <p class=\"description\">Yea you can say so something just showed up...sooo</p>\r\n                  <button>Yea</button>\r\n                  <button>No</button>\r\n              </div>\r\n          </div>\r\n      `;\r\n  }\r\n};\r\n\r\nconst messageConsoleDemo = async () => { \r\n  console.log('PRESSED MESSAGE SHORTKEYS @' + Date.now()); \r\n};\r\n\r\nmodule.exports = {\r\n  closeWindowFunc,\r\n  fullScreen,\r\n  toggleRootModal,\r\n  messageConsoleDemo\r\n};\r\n\n\n//# sourceURL=webpack://v_shortkeys/./source/helpers.js?");

/***/ }),

/***/ "./source/vShortKeys.js":
/*!******************************!*\
  !*** ./source/vShortKeys.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { closeWindowFunc, fullScreen, toggleRootModal, messageConsoleDemo } = __webpack_require__(/*! ./helpers */ \"./source/helpers.js\");\r\n\r\nvar currentKeyPress = [];\r\n\r\nvar scArray = [\r\n    {\r\n        name: \"console.log\",\r\n        buttons: [81, 87, 69],\r\n        delay: 3000,\r\n        date: 0,\r\n        triggered: false,\r\n        exec: messageConsoleDemo\r\n    },\r\n    {\r\n        name: \"fullScreen.toggle\",\r\n        buttons: [18, 13],\r\n        delay: 3000,\r\n        date: 0,\r\n        triggered: false,\r\n        exec : fullScreen.toggle\r\n    },\r\n    {\r\n        name: \"closeWindowFunc\",\r\n        buttons: [18, 67],\r\n        delay: 0,\r\n        date: 0,\r\n        triggered: false,\r\n        disabled: false,\r\n        exec: closeWindowFunc\r\n    },\r\n    {\r\n        name: \"showRootModal\",\r\n        buttons: [77, 79, 68],\r\n        delay: 3000,\r\n        date: 0,\r\n        triggered: false,\r\n        disabled: false,\r\n        exec: toggleRootModal\r\n    }\r\n];\r\n\r\nconst keyDownFunc = async (event) => {\r\n    var key = event.keyCode;\r\n    if (!currentKeyPress.includes(key)) {\r\n        currentKeyPress.push(key);\r\n    }\r\n};\r\n\r\nconst keyUpFunc = async (event) => {\r\n    var key = event.keyCode;\r\n    var index = currentKeyPress.indexOf(key);\r\n    if (index > -1) {\r\n        currentKeyPress.splice(index, 1);\r\n    }\r\n};\r\n\r\nconst shortCutFunction = () => {\r\n    console.time('shortCutFunction');\r\n    var i, j;\r\n    for (i = 0; i < scArray.length; i++) {\r\n        if (scArray[i].disabled !== true) {\r\n            var btnNum = scArray[i].buttons.length;\r\n            for (j = 0; j < scArray[i].buttons.length; j++) {\r\n                if (currentKeyPress.indexOf(scArray[i].buttons[j]) > -1) {\r\n                    btnNum--;\r\n                }\r\n            }\r\n            if (btnNum == 0) {\r\n                if ((scArray[i].triggered == false) || ((Date.now() - scArray[i].date) > scArray[i].delay)) {\r\n                    scArray[i].exec();\r\n                    scArray[i].date = Date.now();\r\n                    scArray[i].triggered = true;\r\n                    console.log(currentKeyPress);\r\n                }\r\n            } else {\r\n                if (scArray[i].triggered) {\r\n                    scArray[i].triggered = false;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    console.timeEnd('shortCutFunction');\r\n};\r\n\r\nvar skTimeInt = 10;\r\nvar shortCutsInterval = setInterval(shortCutFunction, skTimeInt);\r\n\r\ndocument.addEventListener(\"keydown\", keyDownFunc);\r\ndocument.addEventListener(\"keyup\", keyUpFunc);\r\n\n\n//# sourceURL=webpack://v_shortkeys/./source/vShortKeys.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/vShortKeys.js");
/******/ 	
/******/ })()
;