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



new Swiper('.top-section__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    whatchOverflow: true,
    // spaceBetween: 16,
    slidesPerGroup: 1,
    slidesPerColumn: 2,


    slidesPerColumnFill: 'row',
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    speed: 800,
    effect: 'slide',
    breakpoints: {
        320: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            loop: false,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true
            }
        },
        550: {
            slidesPerView: 6,
            slidesPerGroup: 1,
            loop: true,
            scrollbar: false,
        },
      
        991: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            scrollbar: false,
        }
    }
  
  
});



let cube = new Swiper('.offers__slider', {
    navigation: {
        nextEl: '.offers__slider .swiper-button-next',
        prevEl: '.offers__slider .swiper-button-prev'
    },
    slidesPerView: 1,
    whatchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    speed: 800,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    breakpoints: {
        320: {
            spaceBetween: 0,
            slidesPerGroup: 1,
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     draggable: true
            // },
        },
        550: {
            spaceBetween: 10,
            slidesPerGroup: 1,
        }
    }

});


new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.reviews__slider .swiper-button-next',
        prevEl: '.reviews__slider .swiper-button-prev'
    },
    // slidesPerView: 3,
    whatchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    // },
    speed: 800,
    effect: 'slide',
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.28,
            spaceBetween: 20,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true
            },
        },
        550: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 18
        },
        // when window width is >= 640px
        1440: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});
// new Swiper('.reviews__slider', {
//     navigation: {
//         nextEl: '.reviews__slider .swiper-button-next',
//         prevEl: '.reviews__slider .swiper-button-prev'
//     },
//     slidesPerView: 3,
//     whatchOverflow: true,
//     spaceBetween: 20,
//     slidesPerGroup: 1,
//     loop: true,
//     // autoplay: {
//     //     delay: 1000,
//     //     disableOnInteraction: false
//     // },
//     speed: 800,
//     effect: 'slide'
// });


// Open Modal GET
function openModalGet() {
    document.querySelector('.modal.get').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.modal.get').classList.add('open');
    }, 1)
};

var modal = document.querySelector('.modal.get');
var closeClickOverlay = document.querySelector('.modal.get .close img');


document.querySelector(".top-section__button-top").addEventListener('click', openModalGet);
document.querySelector('.modal.get').addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeClickOverlay) {
        document.querySelector('.modal.get').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.modal.get').style.display = 'none';
        }, 500)
    }
});


// Open Modal LOGIN
function openModalLogin() {
    document.querySelector('.modal.login').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.modal.login').classList.add('open');
    }, 1)
};

var modalLogin = document.querySelector('.modal.login');
var closeClickOverlayLogin = document.querySelector('.modal.login .close img');


document.querySelector(".header__user-action").addEventListener('click', openModalLogin);
document.querySelector('.modal.login').addEventListener('click', (e) => {
    if (e.target === modalLogin || e.target === closeClickOverlayLogin) {
        document.querySelector('.modal.login').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.modal.login').style.display = 'none';
        }, 500)
    }
});

// Open Modal REG
function openModalReg() {
    document.querySelector('.modal.reg').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.modal.reg').classList.add('open');
    }, 1)
};

var modalReg = document.querySelector('.modal.reg');
var closeClickOverlayReg = document.querySelector('.modal.reg .close img');


document.querySelector(".link-reg").addEventListener('click', openModalReg);
document.querySelector('.modal.reg').addEventListener('click', (e) => {
    if (e.target === modalReg || e.target === closeClickOverlayReg) {
        document.querySelector('.modal.reg').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.modal.reg').style.display = 'none';
        }, 500)
    }
});

// Open Modal REESET
function openModalReset() {
    document.querySelector('.modal.reset').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.modal.reset').classList.add('open');
        document.querySelector('.modal.login').classList.remove('open');
        document.querySelector('.modal.login').style.display = 'none';
    }, 1)
};

var modalReset = document.querySelector('.modal.reset');
var closeClickOverlayReset = document.querySelector('.modal.reset .close img');


document.querySelector(".modal.login .passforget").addEventListener('click', openModalReset);
document.querySelector('.modal.reset').addEventListener('click', (e) => {
    if (e.target === modalLogin || e.target === closeClickOverlayReset) {
        document.querySelector('.modal.reset').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.modal.reset').style.display = 'none';
        }, 500)
    }
});


// REMEMBER PASS
function openModalRemember() {
    document.querySelector('.modal.login').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.modal.reset').classList.remove('open');
        document.querySelector('.modal.login').classList.add('open');
        document.querySelector('.modal.reset').style.display = 'none';
        
    }, 1)
};

var modalRemember = document.querySelector('.modal.login');
var closeClickOverlayRemember = document.querySelector('.modal.login .close img');


document.querySelector(".modal.reset .passforget").addEventListener('click', openModalRemember);
document.querySelector('.modal.login').addEventListener('click', (e) => {
    if (e.target === modalRemember || e.target === closeClickOverlayRemember) {
        document.querySelector('.modal.login').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.modal.login').style.display = 'none';
        }, 500)
    }
});






///////Tabs

const tab = function () {
    let tabNav = document.querySelectorAll('.swich__link'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', saveTabNav)
    });

    function saveTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('swich__active');
        });
        this.classList.add('swich__active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('contentActive') : item.classList.remove('contentActive');
        })
    }
};
tab();

/***********Video */
$(document).ready(function () {
    $(".youtube-preview-cover").on("click", function () {
        $(this).hide().after('<div style="width:101%; height:31.6em" class="embed-responsive embed-responsive-16by9">\n' +
            '<iframe width="642" height="510" class="iframe-video" src="' + $(this).data('uri') + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
            '</div>');
    });
});

//************ Select*/

function page_plans_open_list(e) {
    $(e).parent().next().addClass("active");
}

function page_plans_list_choose(e) {
    var plan_id = $(e).data("plan_id"),
        plan_days = $(e).data("plan_days"),
        plan_days_text = $(e).data("plan_days_text"),
        plan_sale = $(e).data("plan_sale"),
        plan_economy = $(e).data("plan_economy"),
        plan_price = $(e).data("plan_price"),
        plan_discont = $(e).data("plan_discont"),
        btn = $(e).parent().parent().next();

    $(e).parent().parent().parent().parent().find(".tariffs__price span.price").html(plan_price);
    $(e).parent().parent().parent().parent().find(".tariffs__label-subtitle span").html(plan_economy);
    $(e).parent().parent().parent().parent().find(".tariffs__price span.discont-count").html(plan_discont);

    $(e).parent().prev().find(".days span.day").html(plan_days);
    $(e).parent().prev().find(".days span.text").html(plan_days_text);
    $(e).parent().prev().find(".sale span").html(plan_sale);

    $(btn).data("plan_id", plan_id);

    $(e).parent().removeClass("active");
}


///// radio on calculator
function radio() {
    const sum = data => document.querySelector('#sum').value = data;

    let $selectors = document.querySelectorAll('.block-calc__options .block-calc__options-item input[type="radio"]');
    $selectors.forEach($radio => {
        $radio.addEventListener('change', function () {
            sum(this.getAttribute('data-price') + " ₽");
            calc();
        });
    });
}
radio();

function radio2() {

    let $selectors2 = document.querySelectorAll('.block-calc__options .block-calc__options-item input[type="radio"]');
    $selectors2.forEach($radio2 => {
        $radio2.checked = false;
    });
}
/////// calculator function





let inputSum = document.querySelector('#sum');
let inputCashback = document.querySelector('#cashback');
let footerCashback = document.querySelector('.offers__footer-cashback span');
let sliderCashback = document.querySelector('.slider-offers__item.swiper-slide-active span.proc');

// console.log(sliderCashback);

cube.on('slideChangeTransitionStart', function () {
    sliderCashback = document.querySelector('.slider-offers__item.swiper-slide-active span.proc');
    // console.log(sliderCashback);
    calc();
})

console.log(sliderCashback);


function inputValue(inputVal) {
    let inputSumVal = inputSum.value === '' ? 0 : parseInt(inputSum.value);
    return inputSumVal;
}



function calc() {

    let sliderCashbackVal = parseInt(sliderCashback.textContent);
    console.log(sliderCashbackVal);
    console.log(typeof (sliderCashbackVal));

    let inputSumVal = inputSum.value === '' ? 0 : parseInt(inputSum.value);
    console.log(inputSumVal);


    let procent = (inputSumVal / 100) * sliderCashbackVal;
    console.log(procent);

    inputCashback.value = procent + ' ₽';
    footerCashback.innerHTML = procent;


};

function inputBlur() {
    // $$('#sum')[0].value !== '' ?  $$('#sum')[0].value + " ₽" : 0 + " ₽";
    $$('#sum')[0].value = inputValue($$('#sum')[0].value) + " ₽";
    // inputSum.value === '' ? 0 + "1" : parseInt(inputSum.value);
}

inputBlur();
calc();


$$('#sum', el => {
    el.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/gim, '', /\d/);
        calc();
    });

    el.addEventListener('focus', function () {
        this.value = this.value.replace(/[^0-9]/gim, '', /\d/);
        radio2();
    });

    el.addEventListener('blur', function () {
        inputBlur();
    });

})
// calc();