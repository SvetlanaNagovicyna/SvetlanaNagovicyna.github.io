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

// var x = new Date();
// var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;

//POPUP

document.querySelectorAll('.popup-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const popupBlock = document.querySelector('.' + btn.dataset.popup);
        popupBlock.classList.add('openes');
    })
});

document.querySelectorAll('.modal-wrap').forEach(wrap => {
    wrap.addEventListener('click', event => {
        const eventTarg = event.target;

        if (eventTarg.closest('.close') || eventTarg === wrap) {
            wrap.classList.remove('openes')
        }
    })
})


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
    $$('html')[0].classList.toggle('open_popup');
    $$('.nav')[0].classList.toggle('active');
    $$('.open')[0].classList.toggle('active');
    $$('.logo')[0].classList.toggle('active');
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
    $$('html')[0].classList.remove('open_popup');
    $$('.nav')[0].classList.remove('active');
    $$('.open')[0].classList.remove('active');
    $$('.logo')[0].classList.remove('active');
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




// SWIPER PARTNERS

window.addEventListener('load', () => {
    const partnersSlider = new Swiper('.partners__slider', {
        slidesPerView: 2.2,
        loop: true,
        speed: 5000,
        allowTouchMove: false,

        autoplay: {
            enabled: true,
            delay: 0,
        },
        breakpoints: {
            769: {
                slidesPerView: 5,
            }
        },
    })
    const benefitsSlider = new Swiper('.benefits__slider', {
        initialSlide: 0,
        slidesPerView: 1.44,
        spaceBetween: 40,
        centeredSlides: true,
        centeredSlidesBounds: true,

        loopedSlides: 1,

        navigation: {
            nextEl: ".arrow_next",
            prevEl: ".arrow_prev",
        },

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        scrollbar: {
            el: ".swiper-scrollbar"
        },
        breakpoints: {
            769: {
                slidesPerView: 2.6,
                spaceBetween: 138,
            }
        },


    })
    const uniteSlider = new Swiper('.unite__slider', {
        slidesPerView: 2.1,
        autoplay: true,
        speed: 1000,


        navigation: {
            nextEl: ".arrow_next",
            prevEl: ".arrow_prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 3.2,
            }
        },
    })
    const uniteSlider2 = new Swiper('.unite__slider2', {
        slidesPerView: 1.47,
        spaceBetween: 40,

        scrollbar: {
            el: ".swiper-scrollbar"
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 310,
            }
        },
    })
})

//GSAP

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 0)",
}, (context) => {
    let {
        isDesktop
    } = context.conditions;

    if (isDesktop) {

        const headerScene = gsap.timeline();

        headerScene

            .to('.images__item.images__item-1', {
                duration: .1,
                delay: .02,
                scale: 1,
                ease: Power2.easeOut,
            })
            .to('.images__item.images__item-2', {
                duration: .1,
                delay: .05,
                scale: 1,
                ease: Power2.easeOut,
            })
            .to('.images__item.images__item-3', {
                duration: .2,
                delay: .06,
                scale: 1,
                ease: Power2.easeOut,
            })
            .to('.images__item.images__item-4', {
                duration: .2,
                delay: .07,
                scale: 1,
                ease: Power2.easeOut,
            })
            .to('.images__item.images__item-5', {
                duration: .2,
                delay: .08,
                scale: 1,
                ease: Power2.easeOut,
            })
            .to('.images__item.images__item-6', {
                duration: .2,
                delay: .09,
                scale: 1,
                ease: Power2.easeOut,
            })
            .to('.home__left_text', {
                duration: .5,
                x: 0,
                ease: Power2.ease,
            })
            .to('.home__left_explore', {
                duration: .5,
                delay: .05,
                x: 0,
                ease: Power2.easeOut,
            })
            .to('.home__btn', {
                duration: .5,
                delay: .05,
                x: 0,
                ease: Power2.easeOut,
            })
            .to('.home__left .btn', {
                duration: .5,
                delay: .1,
                x: 0,
                ease: Power2.easeOut,
            })
        const aboutScene = gsap.timeline();

        aboutScene
            .to('.about__left_text', {
                duration: .5,
                x: 0,
                ease: Power2.easeOut,
            })
            .to('.about__left_label', {
                duration: .5,
                delay: .02,
                x: 0,
                ease: Power2.easeOut,
            })
            .to('.about__left .home__btn', {
                duration: .5,
                delay: .05,
                x: 0,
                ease: Power2.easeOut,
            })


        $$('.title').forEach(el => {

            gsap.fromTo(
                el,
                {
                    x: -50 + '%',
                },
                {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause reverse pause',
                        start: 'top bottom',
                        end: 'top 85%',
                        scrub: 3,
                    },
                    x: 0,
                }
            )
        });
        $$('.howitworks__left').forEach(el => {

            gsap.fromTo(
                el,
                {
                    x: -50 + '%',
                },
                {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause reverse pause',
                        start: 'top bottom',
                        end: 'top 85%',
                        scrub: 3,
                    },
                    x: 0,
                }
            )
        });
        $$('.howitworks__right').forEach(el => {

            gsap.fromTo(
                el,
                {
                    x: 50 + '%',
                },
                {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause reverse pause',
                        start: 'top bottom',
                        end: 'top 85%',
                        scrub: 3,
                    },
                    x: 0,
                }
            )
        });
        $$('.going__block_item').forEach(el => {

            gsap.fromTo(
                el,
                {
                    x: -50 + '%',
                },
                {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause reverse pause',
                        start: 'top bottom',
                        end: 'top 85%',
                        scrub: 3,
                    },
                    x: 0,
                }
            )
        });
        $$('.values__left').forEach(el => {

            gsap.fromTo(
                el,
                {
                    x: -50 + '%',
                },
                {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause reverse pause',
                        start: 'top bottom',
                        end: 'top 100%',
                        scrub: 3,
                    },
                    x: 0,
                }
            )
        });
        $$('.values__right').forEach(el => {

            gsap.fromTo(
                el,
                {
                    x: 50 + '%',
                },
                {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause reverse pause',
                        start: 'top bottom',
                        end: 'top 100%',
                        scrub: 3,
                    },
                    x: 0,
                }
            )
        });
        $$('.benefits .bg svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });
        $$('.howitworks .bg svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });
        $$('.future .bg svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });
        $$('.going .bg svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });
        $$('.going .bg2 svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });
        $$('.next .bg svg').forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    onEnter: () => el.classList.toggle('line'),
                    onLeaveBack: () => el.classList.toggle('line'),
                },

            })
        });

    }

})