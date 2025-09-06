/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*---------------------------------------------------------------------------

---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const cards = document.querySelectorAll(".art-work__card");

   if (cards.length === 0) return;

   cards.forEach(card => {
      const levels = card.querySelectorAll(".art-work__card-level");
      const images = card.querySelectorAll(".art-work__card-image");
      const descriptions = card.querySelectorAll(".art-work__card-description");

      if (levels.length === 0 || images.length === 0 || descriptions.length === 0) return;

      levels[0].classList.add("active");
      images[0].classList.add("active");
      descriptions[0].classList.add("reveal-ltr");

      levels.forEach(level => {
         const btn = level.querySelector(".art-work__card-level-btn");
         if (!btn) return;

         btn.addEventListener("click", () => {
            const levelValue = level.dataset.level;

            levels.forEach(el => el.classList.remove("active"));
            images.forEach(img => img.classList.remove("active"));
            descriptions.forEach(desc => desc.classList.remove("reveal-ltr"));

            level.classList.add("active");

            const image = card.querySelector(`.art-work__card-image[data-level="${levelValue}"]`);
            const description = card.querySelector(`.art-work__card-description[data-level="${levelValue}"]`);

            if (image) image.classList.add("active");
            if (description) description.classList.add("reveal-ltr");
         });
      });
   });
});


/*------------------------------
Команда слайдер
---------------------------*/
const teamSlider = document.querySelector(".art-team__slider");

if (teamSlider) {
   const teamSwiper = new Swiper(teamSlider, {
      slidesPerView: 'auto',
      loop: false,
      pagination: {
         el: '.art-team__slider-pagination',
         clickable: false,
      },
      navigation: {
         nextEl: '.art-team__slider-next',
         prevEl: '.art-team__slider-prev',
      },
   });
}

/*---------------------------------------------------------------------------
Team slider cursor
---------------------------------------------------------------------------*/
const slides = document.querySelectorAll('.art-team__slide');
const allLinks = document.querySelectorAll('.art-team__slide-link');

slides.forEach(slide => {
   const link = slide.querySelector('.art-team__slide-link');
   let rect = null;
   let mouseX = 0, mouseY = 0;
   let isActive = false;
   let rafId;

   function animate() {
      if (!isActive) return;
      link.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      rafId = requestAnimationFrame(animate);
   }

   slide.addEventListener('mouseenter', () => {
      allLinks.forEach(l => (l.style.display = 'none'));

      link.style.display = 'block';

      rect = slide.getBoundingClientRect();
      isActive = true;
      animate();
   });

   slide.addEventListener('mousemove', e => {
      if (!rect) return;
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
   });

   slide.addEventListener('mouseleave', () => {
      link.style.display = 'none';
      rect = null;
      isActive = false;
      cancelAnimationFrame(rafId);
   });
});

})();

/******/ })()
;