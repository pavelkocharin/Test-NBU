/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция проигрывания видео по кнопке Play

(function () {// var playButton = document.querySelector('.feedback__video-play');
  // var videoContent = document.querySelector('.feedback__video');
  // if (playButton.addEventListener) {
  //   playButton.addEventListener('click', play, false)
  // } else if (playButton.attachEvent) {
  //   playButton.attachEvent("onclick", play)
  // };
  // function play() { 
  //   if (videoContent.paused){
  //     videoContent.play(); 
  //     playButton.classList.add = ('feedback__video-play-hidden');
  //   } else {
  //     videoContent.pause(); 
  //     playButton.classList.remove = ('feedback__video-play-hidden');
  //   }
  // }; 
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //простая функция попап увеличения картинок

(function () {
  var imagesContent = document.querySelectorAll('.diplom-block__img, .slide-learning__img');
  var popupActive = 'popup__active';
  Array.prototype.forEach.call(imagesContent, function (elem) {
    elem.addEventListener('click', function () {
      var popupLayout = document.createElement('div');
      var buttonClosePopup = document.createElement('button');
      var cloneElem = elem.cloneNode(true);
      popupLayout.classList.add(popupActive);
      buttonClosePopup.classList.add('popup__button-close');

      if (popupLayout.classList.contains(popupActive)) {
        document.body.appendChild(popupLayout);
        document.body.appendChild(buttonClosePopup);
        setTimeout(function () {
          popupLayout.appendChild(cloneElem);
          cloneElem.classList.add('popup__image');
        }, 200);
      }

      ;
      popupLayout.addEventListener('click', function () {
        document.body.removeChild(popupLayout);
        document.body.removeChild(buttonClosePopup);
      });
      buttonClosePopup.addEventListener('click', function () {
        document.body.removeChild(popupLayout);
        document.body.removeChild(buttonClosePopup);
      });
    });
  });
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/play-video.js
var play_video = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/show-image.js
var show_image = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/index.js
// import './range.js'
// import './modal-saved.js'
// import './registration.js'
// import './mobile-menu.js'
// import './login.js'
// import './fogot-pass.js'


// EXTERNAL MODULE: ./src/scss/body-page.scss
var body_page = __webpack_require__(2);

// EXTERNAL MODULE: ./src/scss/header.scss
var header = __webpack_require__(3);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(4);

// EXTERNAL MODULE: ./src/scss/feedback.scss
var feedback = __webpack_require__(5);

// EXTERNAL MODULE: ./src/scss/diplom-block.scss
var diplom_block = __webpack_require__(6);

// EXTERNAL MODULE: ./src/scss/slide-learning.scss
var slide_learning = __webpack_require__(7);

// EXTERNAL MODULE: ./src/scss/social-links.scss
var social_links = __webpack_require__(8);

// EXTERNAL MODULE: ./src/scss/footer.scss
var footer = __webpack_require__(9);

// EXTERNAL MODULE: ./src/scss/variables.scss
var variables = __webpack_require__(10);

// EXTERNAL MODULE: ./src/scss/popup.scss
var popup = __webpack_require__(11);

// CONCATENATED MODULE: ./src/index.js
// JS - ./js/index.js
 // SCSS












/***/ })
/******/ ]);