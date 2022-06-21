/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./src/js/modules/mobileMenu.js\");\n/* harmony import */ var _modules_selectbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/selectbox.js */ \"./src/js/modules/selectbox.js\");\n/* harmony import */ var _modules_productSlider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/productSlider.js */ \"./src/js/modules/productSlider.js\");\n/* harmony import */ var _modules_starSlider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/starSlider.js */ \"./src/js/modules/starSlider.js\");\n/* harmony import */ var _modules_countdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/countdown.js */ \"./src/js/modules/countdown.js\");\n/* harmony import */ var _modules_reviews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/reviews.js */ \"./src/js/modules/reviews.js\");\n/* harmony import */ var _modules_blog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/blog.js */ \"./src/js/modules/blog.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/blog.js":
/*!********************************!*\
  !*** ./src/js/modules/blog.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfetch(\"https://kinopoiskapiunofficial.tech/api/v2.2/films/301\", {\n  method: \"GET\",\n  headers: {\n    \"X-API-KEY\": \"dd2f4bcb-6e93-4be0-b4ab-11da694b7e23\",\n    \"Content-Type\": \"application/json\",\n  },\n})\n  .then((res) => res.json())\n  .then((json) => console.log(json))\n  .catch((err) => console.log(err));\n\nfunction renderFilms(films) {\n  const div = document.createElement(\"div\");\n  div.className = \"card\";\n  div.style.backgroundImage = `url(\"${films.posterUrlPreview}\")`;\n  div.innerHTML = `\n    <div class=\"card__info\">\n      <div>\n        <i class=\"ic_calendar\"></i> \n        <span>Год: ${films.year}</span>\n      </div>\n      <div>\n        <i class=\"ic_comment\"></i> \n        <span>Рейтинг: ${films.ratingKinopoisk}</span>\n      </div>\n    </div>\n    <div class=\"card__title\">${films.nameRu}</div>\n    <a class=\"card__more\" href=\"${films.webUrl}\">Смотреть на кинопоиске</a>\n  `;\n}\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/blog.js?");

/***/ }),

/***/ "./src/js/modules/countdown.js":
/*!*************************************!*\
  !*** ./src/js/modules/countdown.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst timerItems = document.querySelectorAll(\".timer__num\");\nconst finishDate = new Date(2022, 6, 20);\n\n// Получение объекта данных счетчика\nfunction getCountdownData(date) {\n  const timeNow = Date.now();\n  const timeFinish = date.valueOf();\n  const time = timeFinish - timeNow;\n\n  if (time < 0) {\n    clearInterval(interval);\n    return {\n      days: 0,\n      hours: 0,\n      minutes: 0,\n      seconds: 0,\n    };\n  }\n\n  return {\n    days: Math.floor(time / 1000 / 60 / 60 / 24),\n    hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),\n    minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),\n    seconds: Math.floor((time % (1000 * 60)) / 1000),\n  };\n}\n\n// Отрисовка таймера обратного отсчета\nfunction renderCountdown(items, finishDate) {\n  const countdownData = getCountdownData(finishDate);\n  items.forEach((item) => {\n    const span = item.querySelector(\"span\");\n    const segment = item.querySelector(\".segment\");\n    const id = span.id;\n    const value = countdownData[id];\n    span.innerText = value;\n    renderStroke(segment, id, value);\n  });\n}\n\n// Отрисовка обводки\nfunction renderStroke(segment, timeType, value) {\n  if ([\"seconds\", \"minutes\", \"days\"].includes(timeType)) {\n    segment.style.strokeDasharray = `${value} 60`;\n  } else {\n    const hourSegment = 60 / 24;\n    const hours = value * hourSegment;\n    segment.style.strokeDasharray = `${hours} 60`;\n  }\n}\n\nconst interval = setInterval(() => {\n  renderCountdown(timerItems, finishDate);\n}, 1000);\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/countdown.js?");

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst mobileMenuBtn = document.getElementById(\"mobile-btn\");\nconst mobileMenu = document.getElementById(\"mobile-menu\");\nconst mobileMenuCloseBtn = document.querySelector(\".menu__close-btn\");\n\nconst cb = (event) => {\n  mobileMenu.classList.toggle(\"menu_mobile-open\");\n};\n\nmobileMenuBtn.addEventListener(\"click\", cb);\nmobileMenuCloseBtn.addEventListener(\"click\", cb);\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/js/modules/productSlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/productSlider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/js/modules/slider.js\");\n\n\nconst productSliderSettings = {\n  id: \"product-slider\",\n  slideWidth: 300,\n  gap: 60,\n};\nnew _slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](productSliderSettings);\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/productSlider.js?");

/***/ }),

/***/ "./src/js/modules/reviews.js":
/*!***********************************!*\
  !*** ./src/js/modules/reviews.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst reviews = document.getElementById(\"reviews\");\n\nasync function getUsers() {\n  const request = fetch(\"https://reqres.in/api/users?page=2\");\n  const response = await request;\n  if (response.ok) {\n    const data = await response.json();\n    console.log(data);\n    renderUsers(data.data);\n  }\n}\ngetUsers();\n\nfunction renderUsers(users) {\n  users.forEach((user) => {\n    const review = document.createElement(\"div\");\n    review.className = \"review\";\n    review.innerHTML = `\n      <div class=\"review__avatar\" style=\"background-image: url('${user.avatar}')\"></div>\n      <div class=\"review__text\">\n        \"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings”.\n      </div>\n      <div class=\"review__name\">${user.first_name} ${user.last_name}</div>\n      <div class=\"review__label\">${user.email}</div>\n    `;\n    reviews.appendChild(review);\n  });\n}\n\nconst user = {\n  name: \" Анатолий\",\n  job: \"Программист\",\n};\n\nasync function setUser() {\n  const options = {\n    method: \"POST\",\n    body: JSON.stringify(user),\n  };\n  const request = fetch(`https://reqres.in/api/users`, options);\n  const response = await request;\n  if (response.ok) {\n    const data = await response.json();\n    user.id = data.id;\n    user.name = \"Сергей\";\n    console.log(data);\n    updateUser(user);\n  }\n}\nsetUser();\n\nasync function updateUser(user) {\n  console.log(user);\n  const options = {\n    method: \"PUT\",\n    body: JSON.stringify(user),\n  };\n  const request = fetch(`https://reqres.in/api/users/${user.id}`, options);\n  const response = await request;\n  if (response.ok) {\n    const data = await response.json();\n    console.log(data);\n\n    setTimeout(() => {\n      deleteUser(user.id);\n    }, 2000);\n  }\n}\n\nasync function deleteUser(id) {\n  console.log(id);\n  const options = {\n    method: \"DELETE\",\n  };\n  const request = fetch(`https://reqres.in/api/users/${id}`, options);\n  const response = await request;\n  if (response.ok) {\n    console.log(\"Пользователь удален!\");\n  }\n}\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/reviews.js?");

/***/ }),

/***/ "./src/js/modules/selectbox.js":
/*!*************************************!*\
  !*** ./src/js/modules/selectbox.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst selectboxDOM = {\n  selectbox: document.querySelectorAll(\".selectbox\"),\n  selected: document.querySelectorAll(\".selectbox__selected\"),\n  list: document.querySelectorAll(\".selectbox__list\"),\n};\n\n// Отслеживаем клик по селектбоксу и открываем его, если кликнули по нему (втавляем класс open)\nselectboxDOM.selectbox.forEach((selectbox) => {\n  selectbox.addEventListener(\"click\", () => {\n    selectbox.classList.add(\"open\");\n  });\n});\n\nfunction cb(event) {\n  const target = event.target;\n  // Проверяем, если элемент не селектбокс, то закрываем селектбокс (удаляем класс open)\n  if (\n    !target.matches(\".selectbox\") &&\n    !target.matches(\".selectbox__selected\")\n  ) {\n    selectboxDOM.selectbox.forEach((selectbox) => {\n      selectbox.classList.remove(\"open\");\n    });\n  }\n\n  selectCurrency(event);\n}\n// Выбор валюты\nfunction selectCurrency(e) {\n  const { target } = e;\n  const value = target.innerText;\n  if (target.matches(\".selectbox__item\")) {\n    // Удаляем класс selected у всех блоков с классом selectbox__item и selected\n    const selectedItems = document.querySelectorAll(\n      \".selectbox__item.selected\"\n    );\n    selectedItems.forEach((item) => {\n      item.classList.remove(\"selected\");\n    });\n\n    // Вставляем  класс selected элементу списка, по которому кликнули\n    const items = document.querySelectorAll(\".selectbox__item\");\n    items.forEach((item) => {\n      if (item.innerText === value) {\n        item.classList.add(\"selected\");\n      }\n    });\n\n    // Вставляем значение выбранной валюты в элементы с классом selectbox__selected\n    selectboxDOM.selected.forEach((selected) => {\n      selected.innerText = value;\n    });\n  }\n}\n\n// Отлавливаем событие клика на теге body\nconst body = document.querySelector(\"body\");\nbody.addEventListener(\"click\", cb);\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/selectbox.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\nclass Slider {\n  slide = 0;\n  offset = 0;\n\n  constructor(settings) {\n    const sliderWrap = document.getElementById(settings.id);\n    (this.slider = sliderWrap.querySelector(\".slider\")),\n      (this.prev = sliderWrap.querySelector(\".prev\")),\n      (this.next = sliderWrap.querySelector(\".next\")),\n      (this.slidesCount = this.slider.querySelectorAll(\".slide\")?.length);\n    this.slideWidth = settings.slideWidth;\n    this.gap = settings.gap;\n    this.prevSlideBtn();\n    this.nextSlideBtn();\n  }\n\n  // Меняем позицию слайдера\n  changeSlide(btn) {\n    if (btn === \"next\" && this.slide + 1 < this.slidesCount) {\n      this.slide++;\n      this.offset = (this.slideWidth + this.gap) * -this.slide;\n    } else if (btn === \"prev\" && this.slide > 0) {\n      this.slide--;\n      this.offset = (this.slideWidth + this.gap) * -this.slide;\n    }\n\n    this.slider.style.left = `${this.offset}px`;\n  }\n\n  // Перелистываем слайдер к ледующему слайду\n  nextSlideBtn() {\n    this.next.addEventListener(\"click\", () => {\n      this.changeSlide(\"next\");\n      if (this.slide + 1 === this.slidesCount) {\n        this.next.classList.add(\"disable\");\n      }\n      this.changeBtnDisable(this.prev);\n    });\n  }\n\n  // Перелистываем слайдер к предидущему слайду\n  prevSlideBtn() {\n    this.prev.addEventListener(\"click\", () => {\n      this.changeSlide(\"prev\");\n      if (this.slide === 0) {\n        this.prev.classList.add(\"disable\");\n      }\n      this.changeBtnDisable(this.next);\n    });\n  }\n\n  // Разблокировка кнопок слайдера\n  changeBtnDisable(btn) {\n    if (btn.matches(\".disable\")) {\n      btn.classList.remove(\"disable\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/starSlider.js":
/*!**************************************!*\
  !*** ./src/js/modules/starSlider.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/js/modules/slider.js\");\n\n\nconst starSliderSettings = {\n  id: \"star-slider\",\n  slideWidth: 346,\n  gap: 22,\n};\nnew _slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](starSliderSettings);\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/starSlider.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;