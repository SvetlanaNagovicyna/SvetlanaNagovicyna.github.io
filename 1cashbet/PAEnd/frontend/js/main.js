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





///swipers

new Swiper('.top-section__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
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
    speed: 1200,
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
//notification


const menuBtn = $('.header-pa__notice img'),
      menu= $('.notification');

menuBtn.on('click', function() {
    if ( $(this).hasClass('is-active') ) {
        $(this).removeClass('is-active');
        menu.fadeOut();
    } else {
        $(this).addClass('is-active');
        menu.fadeIn();
    }
});

$(document).click(function (e) {
    if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.fadeOut();
        menuBtn.removeClass('is-active');
    };
});

///menu

$('.menu-mob').click(function(){
    // actual-pricing
    const state = $(this).closest('.menu').hasClass('active');
    $(this).closest('.body-wrap').find('.menu').removeClass('active');
    if (!state) $(this).closest('.menu').addClass('active');
    // $(this).closest('.actual-pricing__pricing_menu').toggleClass('active');
})



// // Open Modal logout
function openModal2() {
    document.querySelector('.popup.logout').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.popup.logout').classList.add('open');
    }, 1)
};

var popup2 = document.querySelector('.popup.logout');
var close2 = document.querySelector('.popup.logout .close img');


document.querySelector('.logout').addEventListener('click', openModal2);

document.querySelector('.popup.logout').addEventListener('click', (e) => {
    if (e.target === popup2 || e.target === close2) {
        document.querySelector('.popup.logout').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.popup.logout').style.display = 'none';
        }, 500)
    }
});





//************ Select*/

function page_plans_open_list(e) {
    $(e).parent().next().addClass("active");
    $(document).mouseup(function (e) {
        var container = $(".list.active");
        if (container.has(e.target).length === 0){
            container.removeClass("active");
        }
    });
}

function page_plans_list_choose(e) {
    var plan_id = $(e).data("plan_id"),
        plan_days = $(e).data("plan_days"),
        plan_days_text = $(e).data("plan_days_text"),
        plan_sale = $(e).data("plan_sale"),
        plan_economy = $(e).data("plan_economy"),
        plan_price = $(e).data("plan_price"),
        plan_discont = $(e).data("plan_discont"),

        plan_text = $(e).data("plan_text"),
        btn = $(e).parent().parent().next();

    $(e).parent().parent().parent().parent().find(".tariffs__price span.price").html(plan_price);
    $(e).parent().parent().parent().parent().find(".tariffs__label-subtitle span").html(plan_economy);
    $(e).parent().parent().parent().parent().find(".tariffs__price span.discont-count").html(plan_discont);

    $(e).parent().prev().find(".days span.day").html(plan_days);
    $(e).parent().prev().find(".days span.text").html(plan_days_text);
    $(e).parent().prev().find(".sale span").html(plan_sale);

    
    $(e).parent().prev().find(".text span").html(plan_text);

    $(btn).data("plan_id", plan_id);


    $(e).parent().removeClass("active");

}




////////input




let inputSum = document.querySelector('#sum2');
let inputCashback = document.querySelector('#cashback');
let footerCashback = document.querySelector('.offers__footer-cashback span');



function inputValue(inputVal) {
    let inputSumVal = inputSum.value === '' ? 0 : parseInt(inputSum.value);
    return inputSumVal;
}



function calc() {

    let sliderCashbackVal = parseInt(sliderCashback.textContent);
    // console.log(sliderCashbackVal);
    // console.log(typeof (sliderCashbackVal));

    let inputSumVal = inputSum.value === '' ? 0 : parseInt(inputSum.value);
    // console.log(inputSumVal);


    let procent = (inputSumVal / 100) * sliderCashbackVal;
    // console.log(procent);

    inputCashback.value = procent + ' ₽';
    footerCashback.innerHTML = procent;


};

///security block get code on number
function security() {
document.querySelector('#btnCode').addEventListener('click', (e) => {
    document.querySelector('#phoneSettings').style.display = 'none';
    document.querySelector('#btnCode').style.display = 'none';
    document.querySelector('#phoneCode').style.display = 'flex';
    document.querySelector('#sms').style.display = 'flex';
    document.querySelector('#telNumber').style.display = 'none';
});
}
security()


// // Open Modal
function openModal() {
    document.querySelector('.popup.subscription').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.popup.subscription').classList.add('open');
    }, 1)
};

var popup = document.querySelector('.popup.subscription');
var close = document.querySelector('.popup.subscription .close img');


document.querySelector('.cancel').addEventListener('click', openModal);

document.querySelector('.popup.subscription').addEventListener('click', (e) => {
    if (e.target === popup || e.target === close) {
        document.querySelector('.popup.subscription').classList.remove('open');
        setTimeout(() => {
            document.querySelector('.popup.subscription').style.display = 'none';
        }, 500)
    }
});



////second

// function inputBlur3() {
//     // $$('#sum2')[0].value !== '' ?  $$('#sum2')[0].value + " ₽" : 0 + " ₽";
//     $$('#sum2')[0].value = inputValue($$('#sum2')[0].value) + " ₽";
//     // inputSum.value === '' ? 0 + "1" : parseInt(inputSum.value);
// }

// inputBlur3();


// $$('#sum2', el => {
//     el.addEventListener('input', function () {
//         this.value = this.value.replace(/[^0-9]/gim, '', /\d/);
//     });

//     el.addEventListener('focus', function () {
//         this.value = this.value.replace(/[^0-9]/gim, '', /\d/);
//     });

//     el.addEventListener('blur', function () {
//         inputBlur3();
//     });

// })
// ////////////////

// function inputBlur4() {
//     // $$('#sum2')[0].value !== '' ?  $$('#sum2')[0].value + " ₽" : 0 + " ₽";
//     $$('#sum2')[0].value = inputValue($$('#sum2')[0].value) + " ₽";
//     // inputSum.value === '' ? 0 + "1" : parseInt(inputSum.value);
// }

// inputBlur4();
// calc();


// $$('#sum2', el => {
//     el.addEventListener('input', function () {
//         this.value = this.value.replace(/[^0-9]/gim, '', /\d/);
//         calc();
//     });

//     el.addEventListener('focus', function () {
//         this.value = this.value.replace(/[^0-9]/gim, '', /\d/);
//         radio2();
//     });

//     el.addEventListener('blur', function () {
//         inputBlur4();
//     });

// })

// /************************************** */

