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
Work Cards
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const cards = document.querySelectorAll(".art-work__card");

   if (cards.length === 0) return;

   cards.forEach(card => {
      const levels = card.querySelectorAll(".art-work__card-level");
      const images = card.querySelectorAll(".art-work__card-image");

      if (levels.length === 0 || images.length === 0) return;

      levels[0].classList.add("active");
      images[0].classList.add("active");

      levels.forEach(level => {
         const btn = level.querySelector(".art-work__card-level-btn");
         if (!btn) return;

         btn.addEventListener("click", () => {
            const levelValue = level.dataset.level;

            levels.forEach(el => el.classList.remove("active"));
            images.forEach(img => img.classList.remove("active"));

            level.classList.add("active");

            const image = card.querySelector(`.art-work__card-image[data-level="${levelValue}"]`);
            if (image) image.classList.add("active");
         });
      });
   });
});



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

/*---------------------------------------------------------------------------
Support card
---------------------------------------------------------------------------*/
let atropos1 = null;
let atropos2Instances = [];
let caseAtroposInstances = [];

function initAtropos() {

   if (window.innerWidth < 1000) {
      if (atropos1) {
         atropos1.destroy();
         atropos1 = null;
      }
   } else {
      if (!atropos1) {
         atropos1 = Atropos({
            el: '.my-atropos',
            activeOffset: 40,
            shadow: true,
            shadowOffset: 40,
            shadowScale: 1,
            highlight: false,
         });
      }
   }

   // --- my-atropos2 ---
   if (window.innerWidth >= 1000) {
      if (atropos2Instances.length === 0) {
         document.querySelectorAll('.my-atropos2').forEach(el => {
            const instance = Atropos({
               el: el,
               activeOffset: 20,
               shadow: true,
               shadowOffset: 40,
               shadowScale: 1,
               highlight: false,
            });
            atropos2Instances.push(instance);
         });
      }

      if (caseAtroposInstances.length === 0) {
         document.querySelectorAll('.case-atropos').forEach(card => {
            const instance = Atropos({
               el: card,
               activeOffset: 40,
               shadow: true,
               shadowOffset: 10,
               shadowScale: 1,
               highlight: false,
               rotateXMax: 5,
               rotateYMax: 5,
            });
            caseAtroposInstances.push(instance);
         });
      }
   } else {
      if (atropos2Instances.length > 0) {
         atropos2Instances.forEach(instance => instance.destroy());
         atropos2Instances = [];
      }

      if (caseAtroposInstances.length > 0) {
         caseAtroposInstances.forEach(instance => instance.destroy());
         caseAtroposInstances = [];
      }
   }
}

initAtropos();
window.addEventListener('resize', initAtropos);

/*------------------------------
Popups
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons && openButtons.length > 0) {
      openButtons.forEach(button => {
         if (!button) return;

         button.addEventListener('click', function () {
            const popupId = this.dataset.popup;
            if (!popupId) return;

            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');

      if (!openPopup) return;

      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});



/*------------------------------
Phone mask
---------------------------*/
window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll('input.tel-mask'), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) : a
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
               return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
         }
         if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
         }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});



/*---------------------------------------------------------------------------
Dropdown
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const dropdowns = document.querySelectorAll(".theme-dropdown");

   if (dropdowns.length > 0) {
      dropdowns.forEach(dropdown => {
         const button = dropdown.querySelector(".theme-dropdown__button");
         const list = dropdown.querySelector(".theme-dropdown__list");

         if (button && list) {
            list.querySelectorAll("li").forEach((item, index) => {
               item.style.setProperty("--delay", `${index * 0.05}s`);
            });

            button.addEventListener("click", (e) => {
               e.stopPropagation();
               dropdowns.forEach(d => {
                  if (d !== dropdown) {
                     d.querySelector(".theme-dropdown__button")?.classList.remove("active");
                     d.querySelector(".theme-dropdown__list")?.classList.remove("show");
                  }
               });

               button.classList.toggle("active");
               list.classList.toggle("show");
            });
         }
      });

      document.addEventListener("click", (e) => {
         dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
               dropdown.querySelector(".theme-dropdown__button")?.classList.remove("active");
               dropdown.querySelector(".theme-dropdown__list")?.classList.remove("show");
            }
         });
      });
   }
});

/*---------------------------------------------------------------------------
Filter
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const form = document.querySelector("#filter-form");
   const selectedContainer = document.querySelector(".art-filters__selected-items");
   const resetButton = document.querySelector(".art-filters__reset button[type=reset]");
   const selectedTitle = document.querySelector(".art-filters__selected-title");

   if (!form || !selectedContainer || !resetButton || !selectedTitle) return;

   function updateVisibility() {
      const hasItems = selectedContainer.children.length > 0;
      resetButton.style.display = hasItems ? "" : "none";
      selectedTitle.style.display = hasItems ? "" : "none";
   }

   function createSelectedItem(name, input) {
      const item = document.createElement("div");
      item.classList.add("art-filters__selected-item");
      item.innerHTML = `
      ${name}
      <span class="art-filters__selected-icon"></span>
    `;

      item.addEventListener("click", () => {
         input.checked = false;
         item.remove();
         updateVisibility();
      });

      return item;
   }

   form.querySelectorAll("input[type=checkbox][data-name]").forEach(input => {
      input.addEventListener("change", () => {
         const name = input.dataset.name;

         if (input.checked) {
            const exists = [...selectedContainer.querySelectorAll(".art-filters__selected-item")]
               .some(item => item.textContent.trim() === name);
            if (!exists) {
               selectedContainer.appendChild(createSelectedItem(name, input));
            }
         } else {
            selectedContainer.querySelectorAll(".art-filters__selected-item").forEach(item => {
               if (item.textContent.trim() === name) {
                  item.remove();
               }
            });
         }

         updateVisibility();
      });
   });

   resetButton.addEventListener("click", () => {
      selectedContainer.innerHTML = "";
      form.querySelectorAll("input[type=checkbox]").forEach(input => {
         input.checked = false;
      });
      updateVisibility();
   });

   updateVisibility();
});




/*---------------------------------------------------------------------------
Subscribe icons anim
---------------------------------------------------------------------------*/
function initSocialHover() {
   if (window.innerWidth <= 1000) return;

   const socials = document.querySelectorAll('.art-subscribe__social');
   if (!socials.length) return;

   socials.forEach(link => {
      const img = link.querySelector('img');
      if (!img) return;

      link.addEventListener('mousemove', e => {
         const rect = link.getBoundingClientRect();
         const x = e.clientX - rect.left - rect.width / 2;
         const y = e.clientY - rect.top - rect.height / 2;

         img.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
      });

      link.addEventListener('mouseleave', () => {
         img.style.transform = 'translate(0,0)';
      });
   });
}
initSocialHover();

/*---------------------------------------------------------------------------
Symbols counter
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const textarea = document.querySelector(".symbols-counter");
   const counter = document.querySelector(".symbols-value");

   if (textarea && counter) {
      const maxLength = textarea.getAttribute("maxlength");

      textarea.addEventListener("input", () => {
         const remaining = maxLength - textarea.value.length;
         counter.textContent = remaining;
      });
   }
});


/*---------------------------------------------------------------------------
Flip card
---------------------------------------------------------------------------*/
const cards = document.querySelectorAll('.ads-benefits__card');

if (cards.length > 0) {
   cards.forEach(card => {
      const inner = card.querySelector('.ads-benefits__inner');

      if (window.innerWidth >= 1024) {
         card.addEventListener('mouseenter', () => {
            inner.style.transform = 'rotateY(180deg)';
         });
         card.addEventListener('mouseleave', () => {
            inner.style.transform = 'rotateY(0deg)';
         });
      } else {
         let rotation = 0;
         card.addEventListener('click', () => {
            rotation += 180;
            inner.style.transform = `rotateY(${rotation}deg)`;
         });
      }
   });
}



/*---------------------------------------------------------------------------
Tips
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const tips = document.querySelectorAll(".tips");
   const isTouch = window.matchMedia("(hover: none)").matches;

   tips.forEach((tip) => {
      const btn = tip.querySelector(".tips__btn");
      const msg = tip.querySelector(".tips__message");

      // --- только для ПК ---
      if (!isTouch) {
         tip.addEventListener("mouseenter", () => {
            closeAllTips(msg);
            msg.classList.add("show");
         });

         tip.addEventListener("mouseleave", () => {
            msg.classList.remove("show");
         });
      }

      btn.addEventListener("click", (e) => {
         e.stopPropagation();
         const isOpen = msg.classList.contains("show");

         closeAllTips();
         if (!isOpen) msg.classList.add("show");
      });
   });

   // --- закрытие при клике вне подсказок ---
   document.addEventListener("click", () => closeAllTips());

   function closeAllTips(except) {
      document.querySelectorAll(".tips__message.show").forEach((m) => {
         if (m !== except) m.classList.remove("show");
      });
   }
});



/*---------------------------------------------------------------------------
Calculator tabs
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const tabs = document.querySelectorAll(".ads-calculator__tab");
   const blocks = document.querySelectorAll(".ads-calculator__block");

   if (tabs.length && blocks.length) {
      tabs.forEach(tab => {
         tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-calc-tab");

            tabs.forEach(t => t.classList.remove("active"));
            blocks.forEach(b => b.classList.remove("active"));

            tab.classList.add("active");
            const activeBlock = document.querySelector(`.ads-calculator__block[data-calc-block="${target}"]`);
            if (activeBlock) activeBlock.classList.add("active");
         });
      });
   }
});

/*---------------------------------------------------------------------------
Eff slider
---------------------------------------------------------------------------*/
const efficiencySwiper = initSwiper(".ads-efficiency__slider", {
   slidesPerView: "auto",
   watchOverflow: true,
   loop: false,
   navigation: {
      nextEl: ".ads-efficiency__slider-next",
      prevEl: ".ads-efficiency__slider-prev",
   },
});


/*---------------------------------------------------------------------------
Mario
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const slider = document.querySelector(".ads-efficiency__slider");
   const marioPerson = document.querySelector(".mario__person");
   const coins = document.querySelectorAll(".mario__coin");

   if (slider && marioPerson && coins.length) {
      let rect = slider.getBoundingClientRect();
      let marioX = rect.width / 2;
      let targetX = marioX;

      // --- Десктоп: бег за курсором ---
      if (window.innerWidth >= 1000) {
         slider.addEventListener("mousemove", (e) => {
            rect = slider.getBoundingClientRect();
            targetX = e.clientX - rect.left;
         });

         function animate() {
            const speed = 0.04;
            marioX += (targetX - marioX) * speed;
            marioPerson.style.left = marioX + "px";
            marioPerson.style.transform = targetX > marioX ? "scaleX(1)" : "scaleX(-1)";

            // проверка на сбор монет
            coins.forEach((coin) => {
               if (!coin.classList.contains("collected")) {
                  const coinRect = coin.getBoundingClientRect();
                  const sliderRect = slider.getBoundingClientRect();
                  const coinX = coinRect.left - sliderRect.left + coinRect.width / 2;

                  if (Math.abs(marioX - coinX) < 20) {
                     coin.classList.add("collected");
                  }
               }
            });

            requestAnimationFrame(animate);
         }

         animate();
      }

      // --- Мобайл: бег по слайдам ---
      if (window.innerWidth < 1000 && efficiencySwiper) {
         marioPerson.style.transition = "left 0.8s ease, transform 0.2s linear";

         let coinsCollected = false;

         efficiencySwiper.on("slideNextTransitionStart", () => {
            marioPerson.style.transform = "scaleX(1)";
            marioPerson.style.left = "70%";

            if (!coinsCollected) {
               coins.forEach((coin) => coin.classList.add("collected"));
               coinsCollected = true;
            }
         });

         efficiencySwiper.on("slidePrevTransitionStart", () => {
            marioPerson.style.transform = "scaleX(-1)";
            marioPerson.style.left = "30%";

            if (!coinsCollected) {
               coins.forEach((coin) => coin.classList.add("collected"));
               coinsCollected = true;
            }
         });
      }
   }
});


/*---------------------------------------------------------------------------
Move screenshots
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const screenshots = document.querySelector(".ads-preview__screenshots");
   const values = document.querySelectorAll(".ads-preview__value");
   const keys = document.querySelectorAll(".ads-preview__key");

   function moveValues() {
      if (window.innerWidth > 1200 && screenshots) {
         values.forEach(v => screenshots.appendChild(v));
      } else {
         values.forEach(v => {
            const parentBlock = document.querySelector(`.ads-preview__block .ads-preview__key[data-id="${v.dataset.id}"]`)?.parentElement;
            if (parentBlock && !parentBlock.contains(v)) {
               parentBlock.appendChild(v);
            }
         });
      }
   }
   moveValues();
   window.addEventListener("resize", moveValues);

   function setActive(id, multiple) {
      const key = document.querySelector(`.ads-preview__key[data-id="${id}"]`);
      const value = document.querySelector(`.ads-preview__value[data-id="${id}"]`);
      if (!key || !value) return;

      if (multiple) {
         key.classList.toggle("active");
         value.classList.toggle("active");
      } else {
         keys.forEach(k => k.classList.remove("active"));
         values.forEach(v => v.classList.remove("active"));
         key.classList.add("active");
         value.classList.add("active");
      }
   }

   keys.forEach(key => {
      key.addEventListener("click", () => {
         const multiple = window.innerWidth <= 1200;
         setActive(key.dataset.id, multiple);
      });
   });

   if (window.innerWidth > 1200 && keys.length) {
      setActive(keys[0].dataset.id, false);
   }
});

/*---------------------------------------------------------------------------
Team cards
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const cards = document.querySelectorAll(".ads-team__card");

   function toggleCardActive() {
      if (window.innerWidth <= 980) {
         cards.forEach(card => {
            card.addEventListener("click", () => {
               card.classList.toggle("active");
            });
         });
      } else {
         cards.forEach(card => {
            card.classList.remove("active");
            const clone = card.cloneNode(true);
            card.replaceWith(clone);
         });
      }
   }

   toggleCardActive();
   window.addEventListener("resize", toggleCardActive);
});



/*------------------------------
Faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".art-faq__item");

   if (!faqItems || faqItems.length === 0) return;

   faqItems.forEach((item) => {
      if (!item) return;

      const question = item.querySelector(".art-faq__question");
      const answer = item.querySelector(".art-faq__answer");

      if (!question || !answer) return;

      const toggleFaqItem = () => {
         const isActive = item.classList.contains("active");

         faqItems.forEach((el) => {
            const elAnswer = el.querySelector(".art-faq__answer");
            if (elAnswer) {
               el.classList.remove("active");
               elAnswer.style.maxHeight = null;
            }
         });

         if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + 32 + "px";
         }
      };

      question.addEventListener("click", toggleFaqItem);
   });
});



/*---------------------------------------------------------------------------
Move stages values
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const screenshots = document.querySelector(".ya-stages__values");
   const values = document.querySelectorAll(".ya-stages__value");
   const keys = document.querySelectorAll(".ya-stages__key");

   function moveValues() {
      if (window.innerWidth > 1200 && screenshots) {
         values.forEach(v => screenshots.appendChild(v));
      } else {
         values.forEach(v => {
            const parentBlock = document.querySelector(`.ya-stages__block .ya-stages__key[data-id="${v.dataset.id}"]`)?.parentElement;
            if (parentBlock && !parentBlock.contains(v)) {
               parentBlock.appendChild(v);
            }
         });
      }
   }
   moveValues();
   window.addEventListener("resize", moveValues);

   function setActive(id, multiple) {
      const key = document.querySelector(`.ya-stages__key[data-id="${id}"]`);
      const value = document.querySelector(`.ya-stages__value[data-id="${id}"]`);
      if (!key || !value) return;

      if (multiple) {
         key.classList.toggle("active");
         value.classList.toggle("active");
      } else {
         keys.forEach(k => k.classList.remove("active"));
         values.forEach(v => v.classList.remove("active"));
         key.classList.add("active");
         value.classList.add("active");
      }
   }

   keys.forEach(key => {
      key.addEventListener("click", () => {
         const multiple = window.innerWidth <= 1200;
         setActive(key.dataset.id, multiple);
      });
   });

   if (window.innerWidth > 1200 && keys.length) {
      setActive(keys[0].dataset.id, false);
   }
});

/*---------------------------------------------------------------------------
Sliders
---------------------------------------------------------------------------*/
function initSwiper(selector, options, fractionSelector = null) {
   const slider = document.querySelector(selector);
   if (!slider) return null;

   const fraction = fractionSelector ? document.querySelector(fractionSelector) : null;

   return new Swiper(slider, {
      ...options,
      on: {
         init: function () {
            if (fraction) {
               fraction.textContent = `${this.realIndex + 1}/${this.slides.length}`;
            }
         },
         slideChange: function () {
            if (fraction) {
               fraction.textContent = `${this.realIndex + 1}/${this.slides.length}`;
            }
         }
      }
   });
}

/* ---------------- Stages ---------------- */

document.addEventListener("DOMContentLoaded", () => {
   const bgContainer = document.querySelector(".ads-stages__content-bg");
   if (!bgContainer) return;

   const bgImages = bgContainer.querySelectorAll("img");

   const swiper = new Swiper(".ads-stages__slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      watchOverflow: true,
      loop: false,
      autoHeight: true,
      speed: 800,
      parallax: true,
      effect: "creative",
      creativeEffect: {
         prev: { shadow: false, translate: ["-20%", 0, -1] },
         next: { translate: ["100%", 0, 0] },
      },
      navigation: {
         nextEl: ".ads-stages__slider-next",
         prevEl: ".ads-stages__slider-prev",
      },
      on: {
         init(swiper) {
            updateActiveBg(swiper.activeIndex);
         },
         slideChange(swiper) {
            updateActiveBg(swiper.activeIndex);
         },
      },
   });

   function updateActiveBg(index) {
      bgImages.forEach((img, i) => {
         img.classList.toggle("active", i === index);
      });
   }
});


/* ---------------- Testimonials ---------------- */
initSwiper(".art-testimonials__slider", {
   slidesPerView: 1,
   spaceBetween: 24,
   watchOverflow: true,
   loop: false,
   speed: 800,
   parallax: true,
   effect: "creative",
   creativeEffect: {
      prev: { shadow: false, translate: ["-20%", 0, -1] },
      next: { translate: ["100%", 0, 0] },
   },
   navigation: {
      nextEl: ".art-testimonials__slider-next",
      prevEl: ".art-testimonials__slider-prev",
   },
}, ".art-testimonials__fraction");


/* ---------------- Team + Cases + Blog + Articles ---------------- */
initSwiper(".art-team__slider", {
   slidesPerView: "auto",
   loop: false,
   watchOverflow: true,
   pagination: {
      el: ".art-team__slider-pagination",
      clickable: false,
   },
   navigation: {
      nextEl: ".art-team__slider-next",
      prevEl: ".art-team__slider-prev",
   },
});

initSwiper(".art-cases__slider", {
   slidesPerView: "auto",
   loop: false,
   watchOverflow: true,
   pagination: {
      el: ".art-cases__slider-pagination",
      clickable: false,
   },
   navigation: {
      nextEl: ".art-cases__slider-next",
      prevEl: ".art-cases__slider-prev",
   },
});

initSwiper(".art-actuals__slider", {
   slidesPerView: "auto",
   loop: false,
   watchOverflow: true,
   pagination: {
      el: ".art-actuals__pagination",
      clickable: false,
   },
   navigation: {
      nextEl: ".art-actuals__next",
      prevEl: ".art-actuals__prev",
   },
});

initSwiper(".more-articles__slider", {
   slidesPerView: "auto",
   loop: false,
   watchOverflow: true,
   pagination: {
      el: ".more-articles__slider-pagination",
      clickable: false,
   },
   navigation: {
      nextEl: ".more-articles__slider-next",
      prevEl: ".more-articles__slider-prev",
   },
});


/* ---------------- Benefits + Efficiency ---------------- */
initSwiper(".ads-benefits__slider", {
   slidesPerView: "auto",
   loop: false,
   watchOverflow: true,
   navigation: {
      nextEl: ".ads-benefits__slider-next",
      prevEl: ".ads-benefits__slider-prev",
   },
});


/* ---------------- Yandex Benefit ---------------- */
initSwiper(".ya-benefit__slider", {
   slidesPerView: 1,
   spaceBetween: 24,
   watchOverflow: true,
   loop: false,
   navigation: {
      nextEl: ".ya-benefit__slider-next",
      prevEl: ".ya-benefit__slider-prev",
   },
});


/* ---------------- Call center ---------------- */
initSwiper(".em-callcenter__slider", {
   slidesPerView: 1,
   spaceBetween: 24,
   watchOverflow: true,
   loop: false,
   navigation: {
      nextEl: ".em-callcenter__slider-next",
      prevEl: ".em-callcenter__slider-prev",
   },
   pagination: {
      el: ".em-callcenter__slider-pagination",
   },
});

/* ---------------- Clients ---------------- */
initSwiper(".art-clients__slider", {
   slidesPerView: 'auto',
   spaceBetween: 24,
   watchOverflow: true,
   loop: true,
   speed: 2000,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
});

/* ---------------- Art marketing ---------------- */
initSwiper(".art-marketing__slider", {
   slidesPerView: "auto",
   loop: false,
   watchOverflow: true,
   navigation: {
      nextEl: ".art-marketing__slider-next",
      prevEl: ".art-marketing__slider-prev",
   },
});

//click
document.addEventListener("DOMContentLoaded", () => {
   const slides = document.querySelectorAll(".art-marketing__slide");

   slides.forEach(slide => {
      slide.addEventListener("click", () => {
         if (window.innerWidth < 980) {
            if (slide.classList.contains("active")) {
               slide.classList.remove("active");
            } else {
               slides.forEach(s => s.classList.remove("active"));
               slide.classList.add("active");
            }
         }
      });
   });
});



/* ---------------- Galleries ---------------- */
const fancyOptions = {
   Thumbs: { autoStart: false },
   Toolbar: { display: ["close"] },
   dragToClose: true,
};

Fancybox.bind('[data-fancybox]', fancyOptions);

const analysBlocks = document.querySelectorAll(".em-analysis__content");

analysBlocks.forEach(block => {
   const slider = block.querySelector(".em-analysis__slider");
   if (!slider) return;

   const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 24,
      watchOverflow: true,
      loop: false,
      navigation: {
         nextEl: block.querySelector(".em-analysis__slider-next"),
         prevEl: block.querySelector(".em-analysis__slider-prev"),
      },
      pagination: {
         el: block.querySelector(".em-analysis__slider-pagination"),
      },
   });

   const fullscreenBtn = block.querySelector(".em-analysis__slide-fullscreen");

   if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", () => {
         const items = [...block.querySelectorAll("[data-fancybox]")];
         const currentIndex = swiper.realIndex;

         Fancybox.show(
            items.map(el => ({
               src: el.getAttribute("href"),
               thumb: el.querySelector("img")?.src,
               type: "image",
            })),
            {
               ...fancyOptions,
               startIndex: currentIndex,
            }
         );
      });
   }
});


/*---------------------------------------------------------------------------
Analys cards
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const cards = document.querySelectorAll(".em-analysis__card");

   function initCards() {
      if (window.innerWidth <= 1200) {
         cards.forEach(card => {
            card.addEventListener("click", onCardClick);
         });
      } else {
         cards.forEach(card => {
            card.removeEventListener("click", onCardClick);
            card.classList.remove("active");
         });
      }
   }

   function onCardClick(e) {
      const clicked = e.currentTarget;

      if (clicked.classList.contains("active")) {
         clicked.classList.remove("active");
      } else {
         cards.forEach(c => c.classList.remove("active"));
         clicked.classList.add("active");
      }
   }

   initCards();

});


/*---------------------------------------------------------------------------
Long text
---------------------------------------------------------------------------*/
document.querySelectorAll('.em-expenses__card').forEach(card => {
   const btn = card.querySelector('.em-expenses__card-button');
   const more = card.querySelector('.em-expenses__card-more');

   if (btn && more) {
      btn.addEventListener('click', () => {
         if (more.classList.contains('opened')) {
            more.style.maxHeight = '0px';
            more.classList.remove('opened');
            btn.textContent = 'Раскрыть';
         } else {
            more.style.maxHeight = more.scrollHeight + 'px';
            more.classList.add('opened');
            btn.textContent = 'Скрыть';
         }
      });
   }
});


function initServiceCards() {
   document.querySelectorAll('.art-services__card').forEach(card => {
      const desc = card.querySelector('.art-services__wrapper');
      const btn = card.querySelector('.art-services__description-more');

      if (!desc || !btn) return;

      if (desc.scrollHeight > desc.clientHeight) {
         btn.style.display = 'block';
      } else {
         btn.style.display = 'none';
      }

      btn.addEventListener('click', () => {
         desc.classList.toggle('expanded');
         btn.textContent = desc.classList.contains('expanded')
            ? 'Свернуть'
            : 'Развернуть';
      });
   });
}

initServiceCards();


/*---------------------------------------------------------------------------
Hud anim
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const hud = document.querySelector(".hero__graphic.hud");

   if (!hud) return;

   hud.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 980) return;
      if (window.scrollY >= 1080) return;

      const curxposproc = (e.pageX / window.innerWidth) * 100;
      const curyposproc = (e.pageY / window.innerHeight) * 100;

      // --- Круги ---
      const circles = [
         { sel: ".hud__circle-2", coef: 16, rotate: (deg) => deg },
         { sel: ".hud__circle-3", coef: 60, rotate: (deg) => -(deg * 1.3) },
         { sel: ".hud__circle-4", coef: 120, rotate: (deg) => -(deg / 2) },
         { sel: ".hud__circle-5", coef: 150, rotate: (deg) => deg / 4 },
         { sel: ".hud__circle-6", coef: 240, rotate: (deg) => -(deg * 1.3) },
         { sel: ".hud__circle-7", coef: 260, rotate: (deg) => deg },
         { sel: ".hud__circle-8", coef: 260, rotate: (deg) => -deg },
         { sel: ".hud__circle-9", coef: 280, rotate: (deg) => deg },
      ];

      circles.forEach((c) => {
         const el = hud.querySelector(c.sel);
         if (!el) return;

         const x = (c.coef / 100) * curxposproc;
         const y = (c.coef / 100) * curyposproc;
         el.style.marginLeft = x + "px";
         el.style.marginTop = y + "px";

         const degree = (360 / 100) * curxposproc;
         el.style.transform = `rotate(${c.rotate(degree)}deg)`;
      });

      // --- Тексты ---
      const texts = [
         { sel: ".hud__label-1", coef: 280 },
         { sel: ".hud__label-2", coef: 20 },
         { sel: ".hud__label-3", coef: 60 },
         { sel: ".hud__label-4", coef: 40 },
         { sel: ".hud__label-5", coef: 100 },
         { sel: ".hud__label-6", coef: 100 },
      ];

      texts.forEach((t) => {
         const el = hud.querySelector(t.sel);
         if (!el) return;
         const x = (t.coef / 100) * curxposproc;
         const y = (t.coef / 100) * curyposproc;
         el.style.marginLeft = x + "px";
         el.style.marginTop = y + "px";
      });

      // --- Фон ---
      const bg = document.querySelector(".hero__bg");
      if (bg) {
         const x = (20 / 100) * -curxposproc;
         const y = (20 / 100) * -curyposproc;
         bg.style.marginLeft = x + "px";
         bg.style.marginTop = y + "px";
      }
   });
});


/*---------------------------------------------------------------------------
About anim
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth < 980) return;

   const section = document.querySelector(".fv-about");
   const content = document.querySelector(".fv-about__content");
   const logoText = document.querySelector(".fv-about__logo-text");
   const circle = document.querySelector(".fv-about__circle");
   const circleImage = document.querySelector(".fv-about__circle img");
   const pageName = document.querySelector(".fv-about__page-name");
   const logoIcon = document.querySelector(".fv-about__logo-icon");

   if (!section || !logoText || !circle || !circleImage || !pageName || !logoIcon) return;

   const logoEnd = 838;
   const circleEnd = 430;
   const logoStart = logoText.offsetWidth;
   const circleStart = circle.offsetWidth;

   function updateAnimation() {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = 1 - (rect.bottom - windowHeight) / (section.offsetHeight - windowHeight);
      progress = Math.min(Math.max(progress, 0), 1);

      const logoWidth = logoStart + (logoEnd - logoStart) * progress;
      const logoY = 20 * progress;

      logoText.style.width = logoWidth + "px";
      content.style.marginTop = logoY + "vh";

      const circleWidth = circleStart - (circleStart - circleEnd) * progress;
      circle.style.width = circleWidth + "px";

      const circleRotate = 30 * progress;
      circleImage.style.transform = `rotate(${circleRotate}deg)`;

      pageName.style.opacity = progress;
      pageName.style.marginTop = logoY + "vh";
   }
   window.addEventListener("scroll", updateAnimation);
   updateAnimation();
});


/*---------------------------------------------------------------------------
Funnel anim 
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const funnel = document.querySelector(".funnel");
   if (!funnel) return;

   const rainContainer = funnel.querySelector(".funnel__rain");
   const starsContainer = funnel.querySelector(".funnel__stars");
   const paths = funnel.querySelectorAll(".funnel__path");
   const dropSrc = rainContainer?.querySelector("img")?.getAttribute("src");
   const starSrc = starsContainer?.querySelector("img")?.getAttribute("src");

   // --- ДОЖДЬ ---
   if (rainContainer && dropSrc) {
      function createDrop() {
         const drop = document.createElement("img");
         drop.src = dropSrc;

         const size = Math.random() * 5 + 1;
         const left = Math.random() * 100;
         const duration = Math.random() * 3.5 + 1;
         const delay = Math.random() * 0.5;

         drop.style.left = `${left}%`;
         drop.style.width = `${size}px`;
         drop.style.animationDuration = `${duration}s`;
         drop.style.animationDelay = `${delay}s`;

         rainContainer.appendChild(drop);
         drop.addEventListener("animationend", () => drop.remove());
      }

      setInterval(() => {
         const count = Math.floor(Math.random() * 3) + 1;
         for (let i = 0; i < count; i++) createDrop();
      }, 400);
   }

   // --- ЗВЁЗДЫ ---
   if (starsContainer && starSrc) {
      function createStars() {
         const starCount = Math.floor(Math.random() * 2) + 3; // 3–4 звезды
         for (let i = 0; i < starCount; i++) {
            const star = document.createElement("img");
            star.src = starSrc;

            const left = Math.random() * 100;
            const size = Math.random() * 50 + 8;
            const duration = Math.random() * 4 + 3;
            const delay = Math.random() * 0.5;

            star.style.left = `${left}%`;
            star.style.top = `${-Math.random() * 10}%`;
            star.style.width = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;

            starsContainer.appendChild(star);
            star.addEventListener("animationend", () => star.remove());
         }
      }

      setInterval(() => {
         if (Math.random() > 0.6) createStars();
      }, 500);
   }

   // --- ПУТЬ ---
   if (paths.length > 0) {
      let currentIndex = 0;

      function animatePath(index) {
         const path = paths[index];
         const duration = Math.random() * 3 + 3; // 3–6 сек
         const overlap = duration * (Math.random() * 0.2 + 0.5); // через 50–70%

         path.style.animationDuration = `${duration}s`;
         path.style.opacity = "1";
         path.classList.add("falling");

         setTimeout(() => {
            const nextIndex = (index + 1) % paths.length;
            animatePath(nextIndex);
         }, overlap * 1000);

         path.addEventListener(
            "animationend",
            () => {
               path.classList.remove("falling");
               path.style.opacity = "0";
            },
            { once: true }
         );
      }

      animatePath(0);
   }
});

})();

/******/ })()
;