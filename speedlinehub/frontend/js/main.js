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

var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;

//POPUP

// POPUPS
function openPopup(popupClass) {
    if (!h_el($$(".popups__popup." + popupClass))) {
        return false;
    }
    $$("body")[0].classList.add("open_popup");
    $$("html")[0].classList.add("open_popup");
    $$(".popups__popup." + popupClass)[0].classList.add("active");
    return true;
}

function closePopup(btn) {
    if (!btn.closest(".popups__popup")) {
        return false;
    }
    $$("body")[0].classList.remove("open_popup");
    $$("html")[0].classList.remove("open_popup");
    btn.closest(".popups__popup").classList.remove("active");
    return true;
}

function closePopupType(popupClass) {
    if (!h_el($$(".popups__popup." + popupClass))) {
        return false;
    }
    $$("body")[0].classList.remove("open_popup");
    $$("html")[0].classList.remove("open_popup");
    $$(".popups__popup." + popupClass)[0].classList.remove("active");
    return true;
}

$$(".open_popup", function (el) {
    el.addEventListener("click", function (e) {
        if (openPopup(this.dataset.popup)) e.preventDefault();
    });
});
$$(".popups__close", function (el) {
    el.addEventListener("click", function (e) {
        if (closePopup(this)) e.preventDefault();
    });
});


//MENU


const $menuNavbar = document.querySelector('.nav__wrap .menu');


$$('.open')[0].addEventListener('click', openBurgerMenu);

$$('.nav .menu__item').forEach(el => el.addEventListener('click', closeBurgerMenu))

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
    $$('.nav')[0].classList.toggle('active');
    $$('.open')[0].classList.toggle('active');
    $$('.logo')[0].classList.toggle('active');
    $$('html')[0].classList.toggle('open_popup');
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
    $$('.nav')[0].classList.remove('active');
    $$('.open')[0].classList.remove('active');
    $$('.logo')[0].classList.remove('active');
    $$('html')[0].classList.remove('open_popup');
}


//PARALLAX

const parallax = $$('.parallax');

if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
    for (let index = 0; index < parallax.length; index++) {
        new Parallax(parallax[index], {
            limitY: 0
        });
    }
}

const parallaxAll = $$('.parallax_all');


if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
    for (let index = 0; index < parallaxAll.length; index++) {
        new Parallax(parallaxAll[index]);

    }
}


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

    $$('.nav .menu__item').forEach(el => el.classList.remove('active'))


    $$('.nav .menu__item')[count - 1].classList.add('active');



    //MENU ADD BG

    if (document.scrollingElement.scrollTop > 0) {
        $$('.nav')[0].classList.add('scroll');
    } else {
        $$('.nav')[0].classList.remove('scroll');
    }
});



//GSAP

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 768px)",
}, (context) => {
    let {
        isDesktop
    } = context.conditions;

    if (isDesktop) {

        const headerScene = gsap.timeline();

        headerScene
            .to('.header__left', {
                duration: .5,
                x: 0,
                ease: Power2.ease,
            })
            .to('.header__right', {
                duration: .1,
                delay: .2,
                x: 0,
                ease: Power2.easeOut,
            })


        $$('.title').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    toggleActions: 'restart pause reverse pause',
                    start: '0 100%',
                    end: '0 100%',
                    scrub: 2,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });
        $$('.candidate__table .item_10 svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('anim'),
                    onLeaveBack: () => el.classList.toggle('anim'),
                },

            })
        });
        $$('.candidate__button svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('anim'),
                    onLeaveBack: () => el.classList.toggle('anim'),
                },

            })
        });
        $$('.company__button svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('anim'),
                    onLeaveBack: () => el.classList.toggle('anim'),
                },

            })
        });
        $$('.form__submit svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('anim'),
                    onLeaveBack: () => el.classList.toggle('anim'),
                },

            })
        });
    }

})