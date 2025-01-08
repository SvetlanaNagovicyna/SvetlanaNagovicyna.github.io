/* Please, don't do shit-code  */
Element.prototype.closest || (Element.prototype.closest = function (t) {
    for (var e = this; e;) {
        if (e.matches(t)) return e;
        e = e.parentElement
    }
    return null
});

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function (e) {
        "use strict";
        if (null == e) throw new TypeError("Cannot convert first argument to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (null != o)
                for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) {
                    var i = a[c],
                        l = Object.getOwnPropertyDescriptor(o, i);
                    void 0 !== l && l.enumerable && (t[i] = o[i])
                }
        }
        return t
    }
});

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) {
    "function" != typeof o ? o = o || document : (t = o, o = document);
    var c = o.querySelectorAll(e);
    return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function (e, o, c) {
        t(e, o, c)
    }), c
}

function addCss(r, s) {
    var a = function (r) {
        Object.assign(r.style, s)
    };
    if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r)
}

function getElementIndex(e) {
    for (var n = 0; e = e.previousElementSibling;) n++;
    return n
}

function h_el(r) {
    return !!(Array.isArray(r) && r.length > 0)
}

function debugging() {
    [].forEach.call($$("*"), function (n) {
        n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
    })
}


$('a[href^="#"]').click((function () {
    console.log(1)
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 60
    }, 0);

    // header.classList.remove('menu-open');
    // body.classList.remove('burger');

    return false;
}));



//FORM SELECT COUNTRY

function openCurrentSelect(selectCurent) {
    const select = selectCurent.closest('.select');
    const options = select.querySelector('.select__options');
    if (!options.classList.contains('vis')) {
        options.classList.add('vis');
        document.removeEventListener('click', closeOption);
        setTimeout(() => {
            document.addEventListener('click', closeOption);
        }, 10)
    } else {
        closeOption();
    }
}

function closeOption(e) {

    // if (e) {
    //     if (e.target.closest('.select__search')) return false;
    // }
    document.removeEventListener('click', closeOption);
    $$('.select__options', el => {
        el.classList.remove('vis');
    })
}

function changeCurrentOption(select, value, text, img) {
    const input = select.querySelector('input[type="hidden"]');
    if (input) {
        input.value = value;
    }
    const imgItem = select.querySelector('.select__current img');
    if (imgItem) {
        imgItem.src = img;
    }
    const textItem = select.querySelector('.select__current span');
    if (textItem) {
        textItem.innerText = text;
    }

    closeOption();
}

$$('.select', el => {
    el.addEventListener('click', function (e) {
        // console.log(e.target)
        if (e.target.closest('.select__current')) {
            openCurrentSelect(e.target.closest('.select__current'));
        } else if (e.target.closest('.option')) {
            const select = e.target.closest('.select');
            const option = e.target.closest('.option');
            const text = option.querySelector('span').dataset.text || option.querySelector('span').innerText;
            changeCurrentOption(select, option.dataset.value, text, option.querySelector('img').src);
        }
    });
    el.addEventListener('input', function (e) {
        if (!e.target.closest('.select__search')) return false;
        const _this = e.target.closest('.select__search');
        const option = $$('.option', _this.closest('.select'));
        const val = _this.value.toLocaleLowerCase();
        // console.log(option)
        for (let index = 0; index < option.length; index++) {
            const element = option[index];
            const text = element.dataset.text || element.innerText;
            if (text.toLocaleLowerCase().indexOf(val) >= 0) {
                element.classList.remove('hide')
            } else {
                element.classList.add('hide')
            }

        }
    })
});























// Accordion

// $('.acc__head').click(function () {

//     $(this).parent().toggleClass('opens');
//     $(this).toggleClass('opens').next('div.acc__body').slideToggle('active');
// })

// $(".acc__head").on("click", function () {

//     console.log( $(this))

//     $(this).toggleClass("opens").next().slideToggle();
//     $(".acc__body").not($(this).next()).slideUp(500);
//     $(this).removeClass("active");
// });


// $('.acc__head').on('click', function () {
//     if ($(this).hasClass('opens')) {
//         $(this).siblings('.acc__body').slideUp();
//         $(this).removeClass('opens');
//         $(this).parent().toggleClass('opens');
//     }
//     else {
//         $('.acc__body').slideUp();
//         $('.acc__head').removeClass('opens');
//         $('.acc__item').removeClass('opens');
//         $(this).siblings('.acc__body').slideToggle();
//         $(this).toggleClass('opens');
//         $(this).parent().toggleClass('opens');
//     }
// });

// var swiper = new Swiper(".swiper", {
//     slidesPerView: "auto",
//     // spaceBetween: 36,
//     550: {
//         slidesPerView: 5
//     }
// });


// function ScaleReCaptcha({
//     recapchaSelector
//   }) {
//     const recaptcha = document.querySelector(recapchaSelector);
//     console.log(recaptcha)

//     if (recaptcha) {
//       const parentWidth = recaptcha.parentNode.clientWidth;
//       const childWidth = recaptcha.firstChild.clientWidth;
//       const scale = (parentWidth) / (childWidth);

//       recaptcha.querySelector("iframe").style.transform = 'scale(' + scale + ')';
//       recaptcha.querySelector("iframe").style.transformOrigin = '0 0';

//       recaptcha.style.width = `${recaptcha.dataset.widthh * scale}px`;
//       recaptcha.style.height = `${recaptcha.dataset.height * scale}px`;
//     }
//   }

//   function recaptchaInit({
//     recapchaSelector
//   }) {
//     const recaptcha = document.querySelector(recapchaSelector);

//     const recaptchaInterval = setInterval(() => {

//       if (recaptcha.firstChild !== null) {
//         recaptcha.dataset.width = recaptcha.offsetWidth;
//         recaptcha.dataset.height = recaptcha.offsetHeight;

//         ScaleReCaptcha({
//           recapchaSelector
//         })
//         clearInterval(recaptchaInterval);

//         return;
//       }
//     }, 50);


//     window.onresize = () => {
//       ScaleReCaptcha({
//         recapchaSelector
//       })
//     }
//   }

//   recaptchaInit({
//     recapchaSelector: '.meetings-iframe-container'
//   });



if (document.querySelector(".search")) {
    // search
    const inputBox = document.querySelector(".input-box");
    const searchIcon = document.querySelector(".icon");
    const closeIcon = document.querySelector(".close-icon");

    searchIcon.addEventListener("click", () => inputBox.classList.add("show"));
    closeIcon.addEventListener("click", () => inputBox.classList.remove("show"));

    // select

    const forMenuTitle = document.querySelector(".for-menu .title");
    const forMenu = document.querySelector(".for-menu");

    forMenuTitle.addEventListener("click", () => forMenu.classList.toggle("actives"));

}



//POPUP

// POPUPS
// function openPopup(popupClass) {
//     if (!h_el($$(".popups__popup." + popupClass))) {
//         return false;
//     }
//     $$("body")[0].classList.add("open_popup");
//     $$("html")[0].classList.add("open_popup");
//     $$(".popups__popup." + popupClass)[0].classList.add("active");
//     return true;
// }

// function closePopup(btn) {
//     if (!btn.closest(".popups__popup")) {
//         return false;
//     }
//     $$("body")[0].classList.remove("open_popup");
//     $$("html")[0].classList.remove("open_popup");
//     btn.closest(".popups__popup").classList.remove("active");
//     return true;
// }

// function closePopupType(popupClass) {
//     if (!h_el($$(".popups__popup." + popupClass))) {
//         return false;
//     }
//     $$("body")[0].classList.remove("open_popup");
//     $$("html")[0].classList.remove("open_popup");
//     $$(".popups__popup." + popupClass)[0].classList.remove("active");
//     return true;
// }

// $$(".open_popup", function (el) {
//     el.addEventListener("click", function (e) {
//         if (openPopup(this.dataset.popup)) e.preventDefault();
//     });
// });
// $$(".popups__close", function (el) {
//     el.addEventListener("click", function (e) {
//         if (closePopup(this)) e.preventDefault();
//     });
// });


//MENU


const $menuNavbar = document.querySelector('.nav__wrap .menu');


$$('.open')[0].addEventListener('click', openBurgerMenu);
console.log
$$('.nav .menu__link').forEach(el => el.addEventListener('click', closeBurgerMenu));
function addClassOpen(h) {
    $menuNavbar.style.height = `${h}px`;
}

function openBurgerMenu() {

    if (!$menuNavbar.classList.contains('active')) {
        let cacheHeight = $menuNavbar.offsetHeight;
        $menuNavbar.style.height = 'auto';
        let menuNavbarHeight = $menuNavbar.offsetHeight;
        $menuNavbar.style.height = cacheHeight + 'px';
        setTimeout(addClassOpen, 20, menuNavbarHeight);


    } else {
        setTimeout(addClassOpen, 20, 0);
    }
    $menuNavbar.classList.toggle('active');
    $$('.header')[0].classList.toggle('active');
    // $$('.nav')[0].classList.toggle('active');
    $$('.open')[0].classList.toggle('active');
    $$('html')[0].classList.toggle('open_popup');
    if ($$('.open')[0].classList.contains('active')) {
        $$('.open__title span')[0].innerText = "close";
    } else {
        $$('.open__title span')[0].innerText = "menu";
    }

}
function closeBurgerMenu() {
    if (!$menuNavbar.classList.contains('active')) {
        let cacheHeight = $menuNavbar.offsetHeight;
        $menuNavbar.style.height = 'auto';
        let menuNavbarHeight = $menuNavbar.offsetHeight;
        $menuNavbar.style.height = cacheHeight + 'px';
        setTimeout(addClassOpen, 20, menuNavbarHeight);

    } else {
        setTimeout(addClassOpen, 20, 0);
    }
    $menuNavbar.classList.remove('active');
    $$('.header')[0].classList.remove('active');
    // $$('.nav')[0].classList.toggle('active');
    $$('.open')[0].classList.remove('active');
    $$('html')[0].classList.remove('open_popup');
}


// SLIDER LUXURY
const swiperLuxury = new Swiper(".luxury-slider", {
    slidesPerView: 1.46,
    centeredSlides: false,
    arrow: true,
    speed: 2000,
    autoplay: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    breakpoints: {
        550: {
            slidesPerView: 2.625,
            centeredSlides: false
        }
    }
});
// SLIDER CHOOSE
const swiperChoose = new Swiper(".choose-slider", {
    activeIndex: 1,
    slidesPerView: 1.46,
    arrow: true,
    speed: 2000,
    autoplay: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    breakpoints: {
        550: {
            slidesPerView: 2.625,
            centeredSlides: false
        }
    }
});
// SLIDER Clients
const swiperClients = new Swiper(".clients-slider", {
    activeIndex: 1,
    slidesPerView: 2,
    spaceBetween: 30,
    arrow: true,
    speed: 2000,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    breakpoints: {
        550: {
            slidesPerView: 4,
            spaceBetween: 71,
        }
    }
});







//PARALLAX

// const parallax = $$('.parallax');

// if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
//     for (let index = 0; index < parallax.length; index++) {
//         new Parallax(parallax[index], {
//             limitY: 0
//         });
//     }
// }

// const parallaxAll = $$('.parallax_all');


// if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
//     for (let index = 0; index < parallaxAll.length; index++) {
//         new Parallax(parallaxAll[index]);

//     }
// }

// //SLIDER NFT

// const swiperNft = new Swiper(".nft__slider", {
//     slidesPerView: 1,
//     loop: true,
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".nft__slider_next",
//       prevEl: ".nft__slider_prev",
//     },
//   });

// //SLIDER NFT MOB

// const swiperNftMob = new Swiper(".nft__slider_mob", {
//     slidesPerView: 1.5,
//     loop: true,
//     spaceBetween: 15,
//     navigation: {
//       nextEl: ".nft__slider_mob_next",
//       prevEl: ".nft__slider_mob_prev",
//     },
//   });

// //SLIDER EVENT

// const swiperEvent = new Swiper(".event__slider", {
//     slidesPerView: 1,
//     loop: true,
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".event__slider_next",
//       prevEl: ".event__slider_prev",
//     },
//   });

// //SLIDER EVENT MOB

// const swiperEventMob = new Swiper(".event__slider_mob", {
//     slidesPerView: 1.5,
//     loop: true,
//     spaceBetween: 15,
//     navigation: {
//       nextEl: ".event__slider_mob_next",
//       prevEl: ".event__slider_mob_prev",
//     },
//   });

//ANCHORS




let sections = $$('section');

function viewportCheck(elements, distance) {
    for (let i = 0; i < elements.length; ++i) {
        let elemTop = elements[i].offsetTop;
        let viewportTop = document.scrollingElement.scrollTop;
        let elemBottom = elemTop + elements[i].offsetHeight;



        if ((viewportTop + distance) > elemTop) {
            elements[i].classList.add('was-visible');
        } else {
            elements[i].classList.remove('was-visible');
        }

        if ((viewportTop + distance) > elemTop && elemBottom > (viewportTop + distance)) {
            elements[i].classList.add('is-visible');
            // $(nav[i]).addClass('active');
        } else {
            // $(nav[i]).removeClass('active');
            elements[i].classList.remove('is-visible');
        }
    }

}




let count = 0;
window.addEventListener('scroll', () => {

    viewportCheck(sections, 5);



    count = $$('.was-visible').length;

    // $$('.nav .menu__item').forEach(el => el.classList.remove('active'))


    // $$('.nav .menu__item')[count - 1].classList.add('active');

    // MENU ADD BG

    if (document.scrollingElement.scrollTop > 0) {
        $$('.header')[0].classList.add('scroll');
    } else {
        $$('.header')[0].classList.remove('scroll');
    }



});




// document.addEventListener('resize', startRunningLine);

// function startRunningLine() {

//     const runningLine = document.querySelector('.running-line__item');

//     if (runningLine) return;

//     const clones = Math.ceil(window.innerWidth / runningLine.offsetWidth);
//     runningLine.querySelectorAll('.running-line__item--clone').forEach(element => {
//         runningLine.removeChild(element);
//     });
//     for (let index = 0; index < clones; index++) {
//         const element = runningLine.cloneNode(true);
//         element.classList.add('running-line__item--clone')
//         runningLine.appendChild(element);
//     }

// };
// startRunningLine()

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     multiplier: 5,
// });

document.querySelectorAll('.popup-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const popupBlock = document.querySelector('.' + btn.dataset.popup);
        popupBlock.classList.add('openes');
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.callback__main').style.display = 'none';
        popupBlock.querySelector('video').play();
    })
});

document.querySelectorAll('.modal-wrap').forEach(wrap => {
    wrap.addEventListener('click', event => {
        const eventTarg = event.target;
        if (eventTarg.closest('.close') || eventTarg === wrap) {
            wrap.classList.remove('openes')
            document.querySelector('body').style.overflow = 'auto';
            // document.querySelector('.callback').classList.remove('popup');
            document.querySelector('.callback__main').style.display = 'flex';
            wrap.querySelector('video').pause();
        }
    })
})