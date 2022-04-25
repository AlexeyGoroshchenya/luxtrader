/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\n\n\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__.burger)();\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('01 may 2022')\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\nconst burger = () => {\r\n\r\n    const menu = document.querySelector('.menu-header__body')\r\n    const userMenu = document.querySelector('.user-menu__menu')\r\n\r\n\r\n    const moveMenu = () => {\r\n        menu.classList.toggle('menu-header__body-active')\r\n    }\r\n\r\n    const moveUserMenu = () => {\r\n        userMenu.classList.toggle('user-menu__menu-active')\r\n    }\r\n\r\n    document.body.addEventListener('click', (e) => {\r\n\r\n        if (document.querySelector('.menu-header__body-active') && !e.target.matches('.menu-header__item>a')) {\r\n            e.preventDefault()\r\n            moveMenu()\r\n        }\r\n\r\n        if (e.target.closest('.header__menu__btn') || e.target.matches('.menu-header__item>a')) {\r\n            e.preventDefault()\r\n            moveMenu()\r\n        }\r\n\r\n\r\n        if (e.target.closest('.header__user ')) {\r\n            e.preventDefault()\r\n            moveUserMenu()\r\n        }\r\n\r\n        if (document.querySelector('.user-menu__menu-active') && !e.target.closest('.header__user ')) {\r\n            e.preventDefault()\r\n            moveUserMenu()\r\n        }\r\n\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerDays = document.querySelectorAll('.card__timer__body>span')[0];\r\n    const timerHours = document.querySelectorAll('.card__timer__body>span')[1];\r\n    const timerMinutes = document.querySelectorAll('.card__timer__body>span')[2];\r\n    const timerSeconds = document.querySelectorAll('.card__timer__body>span')[3];\r\n\r\n    const getTimerRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n\r\n        let timeRemaning = (dateStop - dateNow) / 1000;\r\n        let seconds = Math.floor(timeRemaning % 60);\r\n        let minutes = Math.floor((timeRemaning / 60) % 60);\r\n        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);\r\n        let days = Math.floor(((timeRemaning / 60) / 60) / 24);\r\n\r\n        return { timeRemaning, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const addZero = (number) => {\r\n        return number < 10 ? `0${number}` : number;\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimerRemaining();\r\n\r\n        if (getTime.timeRemaning > 0) {\r\n\r\n            timerHours.textContent = addZero(getTime.hours)\r\n            timerMinutes.textContent = addZero(getTime.minutes)\r\n            timerSeconds.textContent = addZero(getTime.seconds)\r\n            timerDays.textContent = addZero(getTime.days)\r\n        }\r\n    }\r\n\r\n    if (getTimerRemaining().timeRemaning > 0) {\r\n        updateClock();\r\n        setInterval(updateClock, 1000, deadline)\r\n    } else {\r\n        timerHours.textContent = '00'\r\n        timerMinutes.textContent = '00'\r\n        timerSeconds.textContent = '00'\r\n        timerDays.textContent = '00'\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;