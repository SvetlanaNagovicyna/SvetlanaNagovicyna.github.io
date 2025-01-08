/* Please, don't do shit-code  */
Element.prototype.closest || (Element.prototype.closest = function (t) { for (var e = this; e;) { if (e.matches(t)) return e; e = e.parentElement } return null });

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function (e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (null != o) for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) { var i = a[c], l = Object.getOwnPropertyDescriptor(o, i); void 0 !== l && l.enumerable && (t[i] = o[i]) } } return t } });

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) { "function" != typeof o ? o = o || document : (t = o, o = document); var c = o.querySelectorAll(e); return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function (e, o, c) { t(e, o, c) }), c }

function addCss(r, s) {
    var a = function (r) { Object.assign(r.style, s) }; if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r)
}

function getElementIndex(e) { for (var n = 0; e = e.previousElementSibling;) n++; return n }

function h_el(r) { return !!(Array.isArray(r) && r.length > 0) }

function debugging() { [].forEach.call($$("*"), function (n) { n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) }) }




let welcomeSlider = new Swiper(".welcomeSlider", {
    direction: "vertical",
    slidesPerView: 4,
    autoHeight: true,
    autoplay: {
        delay: 1000,
    },
    speed: 900,
    centeredSlides: true,
    allowTouchMove: false,

    breakpoints: {
        769: {
            scrollbar: {
                el: document.querySelector(".welcomeSlider .swiper-scrollbar"),
                draggable: false,
            },
        },
    }
})




let swiperTransfersBg = new Swiper(".swiperTransfersBg", {
    slidesPerView: 1,
    speed: 800,
    rewind: true,

    breakpoints: {
        769: {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '">0</span>';
                },
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
            },
            scrollbar: {
                el: document.querySelector('.swiperTransfersBg .swiper-scrollbar'),
            },
        },
    }

});

let swiperLeftTitle = new Swiper(".swiperLeftTitle", {
    slidesPerView: 1,
    speed: 800,
    direction: "vertical",
    rewind: true,
    slidesPerView: 1,
    autoHeight: true,

    breakpoints: {
        769: {
            navigation: {
                nextEl: ".swiper-button-next.transfers-btn",
            },
        },
    }

});

let swiperRightDescr = new Swiper(".swiperRightDescr", {
    slidesPerView: 1,
    rewind: true,
    speed: 800,
    spaceBetween: 100,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        769: {
            direction: "vertical",
            spaceBetween: 0,
            pagination: false,

        },
    }


});
let swiperApproach = new Swiper(".swiperApproach", {
    slidesPerView: 1,
    rewind: true,
    speed: 800,
    spaceBetween: 100,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        769: {
            direction: "vertical",
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next.transfers-btn",
            },
            pagination: {
                el: document.querySelector('.swiperApproach') ? document.querySelector('.swiperApproach').closest('.transfers').querySelector(".transfers__bg .swiper-pagination") : null,
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '">0</span>';
                },
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
            },
            scrollbar: {
                el: document.querySelector('.swiperApproach') ? document.querySelector('.swiperApproach').closest('.transfers').querySelector(".transfers__bg .swiper-scrollbar") : null,
            },
        },
    }

});


swiperTransfersBg.on('slideChange', function () {
    swiperLeftTitle.slideTo(swiperTransfersBg.activeIndex);
    swiperRightDescr.slideTo(swiperTransfersBg.activeIndex);
});

swiperLeftTitle.on('slideChange', function () {
    swiperTransfersBg.slideTo(swiperLeftTitle.activeIndex);
    swiperRightDescr.slideTo(swiperLeftTitle.activeIndex);
});

swiperRightDescr.on('slideChange', function () {
    swiperTransfersBg.slideTo(swiperRightDescr.activeIndex);
    swiperLeftTitle.slideTo(swiperRightDescr.activeIndex);
});


let swiperLoginaway = new Swiper(".swiperLoginaway", {
    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    speed: 1000,
    rewind: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicMainBullets: 1,
    },

    breakpoints: {
        1441: {
            slidesPerView: 5.45,
            pagination: false,
            centeredSlides: false,

        },

        769: {
            slidesPerView: 4.05,
            pagination: false,
            centeredSlides: false,
        },
    }
});


let swiperIntegrations = new Swiper(".swiperIntegrations", {



    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    speed: 1000,
    rewind: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicMainBullets: 1,
    },

    breakpoints: {
        1441: {
            slidesPerView: 4,
            pagination: false,
            rewind: true,
            centeredSlides: false,

        },

        769: {
            slidesPerView: 4,
            pagination: false,
            centeredSlides: false,
        },
    }
})



let swiperBlobLeft = new Swiper(".swiperBlobLeft", {
    direction: "vertical",
    slidesPerView: 1,
    autoHeight: true,
    centeredSlides: true,
    rewind: true,
    speed: 800,


    breakpoints: {
        769: {
            slidesPerView: 5,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '">0</span>';
                },
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
            },
            scrollbar: {
                el: document.querySelector(".swiperBlobLeft .swiper-scrollbar"),
            },
        },
    }

})
let swiperBlobRight = new Swiper(".swiperBlobRight", {
    spaceBetween: 100,
    slidesPerView: 1,
    speed: 800,
    autoHeight: true,
    centeredSlides: true,
    rewind: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        769: {
            pagination: false,
            direction: "vertical",
            navigation: {
                nextEl: ".swiper-button-next.blob-btn",
            },

        }
    }

})

swiperBlobLeft.on('slideChange', function () {
    swiperBlobRight.slideTo(swiperBlobLeft.activeIndex);
});

swiperBlobRight.on('slideChange', function () {
    swiperBlobLeft.slideTo(swiperBlobRight.activeIndex);
});


let swiperInsightsText = new Swiper(".swiperInsightsText", {
    rewind: true,
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


    breakpoints: {
        769: {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '">0</span>';
                },
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
            },
            scrollbar: {
                el: document.querySelector(".swiperInsightsText .swiper-scrollbar"),
            },

        }
    }
})

let swiperInsightsImage = new Swiper(".swiperInsightsImage", {
    rewind: true,
    speed: 800,
})

let swiperInsightsTitle = new Swiper(".swiperInsightsTitle", {
    slidesPerView: 1,
    speed: 800,
    direction: "vertical",
    rewind: true,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next.insights-btn",
    },
})


swiperInsightsText.on('slideChange', function () {
    swiperInsightsImage.slideTo(swiperInsightsText.activeIndex);
    swiperInsightsTitle.slideTo(swiperInsightsText.activeIndex);
});


swiperInsightsImage.on('slideChange', function () {
    swiperInsightsText.slideTo(swiperInsightsImage.activeIndex);
    swiperInsightsTitle.slideTo(swiperInsightsImage.activeIndex);
});


swiperInsightsTitle.on('slideChange', function () {
    swiperInsightsText.slideTo(swiperInsightsTitle.activeIndex);
    swiperInsightsImage.slideTo(swiperInsightsTitle.activeIndex);
});


let swiperCommandList = new Swiper(".swiperCommandList", {
    slidesPerView: 1,
    spaceBetween: 32,
    scrollbar: {
        el: document.querySelector(".swiperCommandList .swiper-scrollbar"),
        dragSize: 79,
    },
    speed: 2000,
    rewind: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            scrollbar: {
                dragSize: 155,
            },
        }
    }
})



//POPUP

document.querySelectorAll('.popup-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const popupBlock = document.querySelector('.' + btn.dataset.popup);
        popupBlock.classList.add('open-popup');
        document.querySelector('body').style.overflow = 'hidden';

    })
});

document.querySelectorAll('.modal-wrap').forEach(wrap => {
    wrap.addEventListener('click', event => {
        const eventTarg = event.target;

        if (eventTarg.closest('.close') || eventTarg.closest('.modal__form_btn') || eventTarg === wrap) {
            wrap.classList.remove('open-popup')
            document.querySelector('body').style.overflow = 'auto';

            function clearSelectCalc() {
                wrap.querySelectorAll('.wrapper-dropdown').forEach(selected => {
                    let selectedDisplay = selected.querySelector('.selected-display');
                    let label = selected.querySelector('.label');
                    selectedDisplay.removeAttribute('value');
                    selectedDisplay.innerHTML = label.innerHTML;
                    selected.classList.remove('selected');
                })
            }
            setTimeout(clearSelectCalc, 400);
        }
    })
})



window.addEventListener('scroll', () => {

    //MENU ADD BG

    if (document.scrollingElement.scrollTop > 0) {
        $$('.header')[0].classList.add('scroll');
    } else {
        $$('.header')[0].classList.remove('scroll');
    }
});

const opens = document.querySelectorAll('.header .open');
const menu = document.querySelectorAll('.menu');
const header = document.querySelectorAll('.header');
const bodyEl = document.querySelectorAll('body');


opens.forEach(el => {
    el.addEventListener('click', () => {
        bodyEl.forEach(elIn => {
            elIn.classList.toggle('no-scroll')
        })
        menu.forEach(elIn => {
            elIn.classList.toggle('active')
        })
        opens.forEach(elIn => {
            elIn.classList.toggle('active')
        })
        header.forEach(elIn => {
            elIn.classList.toggle('active')
        })
    })
})

// MENU
// $$('.header .open', el => {
//     el.addEventListener('click', () => {
//         $$('body', elIn => {
//             elIn.classList.toggle('no-scroll')
//         });
//         $$('.menu', elIn => {
//             elIn.classList.toggle('active')
//         });
//         $$('.open', elIn => {
//             elIn.classList.toggle('active')
//         });
//     })
// })

///function accordion

function acc(head, body, item) {
    const accHeads = document.querySelectorAll(head);

    accHeads.forEach(accHead => {
        accHead.addEventListener('click', function () {
            const accBody = this.nextElementSibling;

            if (this.classList.contains('opens')) {
                accBody.style.maxHeight = '0';
                this.classList.remove('opens');
                this.parentElement.classList.toggle('opens');
            } else {
                document.querySelectorAll(body).forEach(accBody => {
                    accBody.style.maxHeight = '0';
                });
                document.querySelectorAll(head).forEach(accHead => {
                    accHead.classList.remove('opens');
                });
                document.querySelectorAll(item).forEach(accItem => {
                    accItem.classList.remove('opens');
                });
                accBody.style.maxHeight = accBody.scrollHeight + 'px';
                this.classList.toggle('opens');
                this.parentElement.classList.toggle('opens');
            }
        })
    })

}

///--------- accordion MainPage

if (window.matchMedia("(max-width: 768px)").matches) {
    acc('.mapsite .item__head', '.mapsite .item__body', '.mapsite .item');
    acc('.menu .menu__item a', '.menu .menu__sublist', '.menu .menu__item');
}

acc('.acc__head', '.acc__body', '.acc__item');

// code for table PricingPage

(function () {

    const iconInform = document.querySelector('.information');
    const windowCloseIcon = document.querySelector('.window .close');

    if (!iconInform) {
        return;
    }

    iconInform.addEventListener('click', el => {
        document.querySelector('.window').classList.add('show-info');
    })
    windowCloseIcon.addEventListener('click', el => {
        document.querySelector('.window').classList.remove('show-info');
    })


})();


//// focus input

$$('form input', el => {
    el.addEventListener('input', (e) => {
        const parent = el.closest('.form__item');
        if (!parent) return;
        parent.classList.toggle('focus', el.value != '')
    })
})
$$('form textarea', el => {
    el.addEventListener('input', (e) => {
        const parent = el.closest('.form__item');
        if (!parent) return;
        parent.classList.toggle('focus', el.value != '')
    })
});



const selectedAll = document.querySelectorAll(".selector-wrapper");

selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;

    const optionsList = optionsContainer.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        let arrow = selected.parentNode.querySelector(".arrow");

        if (optionsContainer.classList.contains("active")) {
            optionsContainer.classList.remove("active");

            arrow.classList.add("rotated");
        } else {
            let currentActive = document.querySelector(".options-container.active");

            if (currentActive) {
                currentActive.classList.remove("active");
                let anotherArrow = currentActive.parentNode.querySelector(".arrow");

                anotherArrow.classList.add("rotated");
            }

            arrow.classList.remove("rotated");
            optionsContainer.classList.add("active");
        }
    });

    optionsList.forEach((o) => {
        o.addEventListener("click", () => {
            selected.querySelector(".selected").innerHTML = o.querySelector(
                "label"
            ).innerHTML;
            optionsContainer.classList.remove("active");

            let arrow = selected.parentNode.querySelector(".arrow");
            arrow.classList.add("rotated");
        });
    });
});

window.addEventListener("click", function (e) {
    if (e.target.closest(".select-box") === null) {
        closeDropdown();
    }
});

function closeDropdown() {
    const selectedAll = document.querySelectorAll(".selector-wrapper");

    selectedAll.forEach((selected) => {
        const optionsContainer = selected.previousElementSibling;
        let arrow = selected.parentNode.querySelector(".arrow");

        optionsContainer.classList.remove("active");
        arrow.classList.add("rotated");
    });
}

// open modal

document.querySelectorAll('.popup-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const popupBlock = document.querySelector('.' + btn.dataset.popup);
        popupBlock.classList.add('open');
        document.querySelector('body').style.overflow = 'hidden';
    })
});

document.querySelectorAll('.modal-wrap').forEach(wrap => {
    wrap.addEventListener('click', event => {
        const eventTarg = event.target;

        if (eventTarg.closest('.close') || eventTarg === wrap) {
            wrap.classList.remove('open')
            document.querySelector('body').style.overflow = 'auto';
        }

    })
});



// accept coocies button
$$("#cookies .button.button-blue", (el) => {
    el.addEventListener("click", function (e) {
        $$(".cookies_popup", (elIn) => {
            elIn.classList.remove("show-cookies");
            acceptCoockies();
        });
        loadRecaptcha();
    });
});

$$("#cookies .button.button-transparent-blue", (el) => {
    el.addEventListener("click", function (e) {
        $$(".cookies_popup", (elIn) => {
            elIn.classList.remove("show-cookies");
        });
        localStorage.setItem("cookiesDenied", Date.now());
    });
});

if (localStorage.getItem("cookiesAccepted") === null) {
    $$(".cookies_popup", (elIn) => {
        setTimeout(() => {
            elIn.classList.add("show-cookies");
        }, 1000)

    });
} else {
    $$(".cookies_popup", (elIn) => {
        loadRecaptcha();
        elIn.classList.remove("show-cookies");
    });
}

function acceptCoockies() {
    localStorage.setItem("cookiesAccepted", Date.now());
}

function loadRecaptcha() {
    if (localStorage.getItem("cookiesAccepted") !== null) {
        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
}

//-- accept coocies button

const allCountries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Dem. Rep. of Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hong Kong", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "North Korea", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

const excludedCountries = [
    "Cuba", "Iran", "North Korea", "Russia", "Syria",
    "Afghanistan", "Belarus", "Myanmar (Burma)", "Central African Republic", "Congo", "Dem. Rep. of Ethiopia", "Hong Kong",
    "Iraq", "Lebanon", "Libya", "Mali", "Nicaragua", "Somalia", "South Sudan", "Sudan", "Venezuela", "Yemen"
];

const filteredCountries = allCountries.filter(country => !excludedCountries.includes(country));

const countryList = $$('#countryList')[0];

filteredCountries.forEach(county => {
    const option = document.createElement('option');
    option.value = county;
    countryList.appendChild(option)
})
