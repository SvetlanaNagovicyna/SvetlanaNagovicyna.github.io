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




window.onscroll = function () {
    show();
}

show();

function show() {

    $$('.paralax_y', el => {
        const gbcr = el.getBoundingClientRect();
        const coef = (gbcr.top - window.innerHeight / 2 + gbcr.height / 2) / (window.innerHeight - gbcr.height / 2);
        el.style.setProperty('--y', coef * gbcr.height * -.1 + 'px');
    })
}


////------SmoothScroll

SmoothScroll({
    animationTime: 500,
    stepSize: 100,
    accelerationDelta: 30,
    accelerationMax: 2,
    keyboardSupport: true,
    arrowScroll: 50,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: true,
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    // freeMode: true,
    autoHeight: true,
    allowTouchMove: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    allowTouchMove: true,
    autoHeight: true,
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


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

////----- MORE READ

document.addEventListener('DOMContentLoaded', function () {
    // Получаем все кнопки "Читать больше"
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    // Добавляем обработчик события к каждой кнопке
    readMoreButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            openPopup(index);
        });
    });

});

function openPopup(reviewIndex) {
    const reviewText = document.querySelectorAll('.testimonials__list-item')[reviewIndex].innerHTML;
    document.querySelector('.modal__container').innerHTML = reviewText;
    document.getElementById('modalTestimonial').classList.add('open-popup');
    document.querySelector('body').style.overflow = 'hidden';
}


function checkHeightTestimonials () {
    $$('.testimonials__list-item_description').forEach( el => {
       if( el.querySelector('span').scrollHeight < 132 ) {
            el.nextElementSibling.classList.add('disable')
            console.log(el.nextElementSibling)
       }
    })
}

checkHeightTestimonials()


window.addEventListener('scroll', () => {

    // viewportCheck(sections, 4);

    // count = $$('.was-visible').length;
    //
    // $$('.nav .header__menu_item').forEach(el => el.classList.remove('active'))
    //
    //
    // $$('.nav .header__menu_item')[count - 1].classList.add('active');



    //MENU ADD BG

    if (document.scrollingElement.scrollTop > 0) {
        $$('.nav')[0].classList.add('scroll');
    } else {
        $$('.nav')[0].classList.remove('scroll');
    }
});



// MENU
$$('.header .open', el => {
    el.addEventListener('click', () => {
        $$('body', elIn => {
            elIn.classList.toggle('no-scroll')
        });
        $$('.burgermenu', elIn => {
            elIn.classList.toggle('active')
        });
        $$('.open', elIn => {
            elIn.classList.toggle('active')
        });
    })
})

/////-------- CALCULATOR FUNCTION

function handlerCalculator(selectOption) {
    // console.log(selectOption)
    const rigaUpToFive =   document.querySelector('.form__discount_riga-uptofive').innerHTML;
    const rigaFromToFive =   document.querySelector('.form__discount_riga-fromtofive').innerHTML;
    const marupeUpToFive =   document.querySelector('.form__discount_marupe-uptofive').innerHTML;
    const marupeFromToFive =   document.querySelector('.form__discount_marupe-fromtofive').innerHTML;
    const seatFee =   document.querySelector('#seat-fee').innerHTML;

    const price =  document.querySelector('.form__price .sum');
    const  valueAge = document.querySelector('.selected-display.year').getAttribute('value');
    const  valueControl = document.querySelector('.selected-display.control').getAttribute('value');

    if(valueAge && valueControl) {
        console.log(calcYear(valueAge))

        if (calcYear(valueAge) < 5) {
            if (valueControl === '1') {
                price.innerHTML = (parseFloat(seatFee) - parseFloat(rigaUpToFive)).toFixed(2);
            } else if (valueControl === '2') {
                price.innerHTML = (parseFloat(seatFee) - parseFloat(marupeUpToFive)).toFixed(2);
            }
        } else {
            if (valueControl === '1') {
                price.innerHTML = (parseFloat(seatFee) - parseFloat(rigaFromToFive)).toFixed(2);
            } else if (valueControl === '2') {
                price.innerHTML = (parseFloat(seatFee) - parseFloat(marupeFromToFive)).toFixed(2);
            }
        }
    }


     function calcYear (value) {
         const currentYear = new Date().getFullYear();
         return currentYear - value;
    }


}

////-------------- SELECT

const selectedAll = document.querySelectorAll(".wrapper-dropdown");

selectedAll.forEach((selected) => {
    const optionsList = selected.querySelectorAll(".wrapper-dropdown .item");

    selected.addEventListener("click", () => {

        if (selected.classList.contains("active")) {
            handleDropdown(selected, false);
        } else {
            let currentActive = document.querySelector(".wrapper-dropdown.active");

            if (currentActive) {
                handleDropdown(currentActive, false);
            }

            handleDropdown(selected, true);
        }
    });

    // update the display of the dropdown
    for (let o of optionsList) {
        o.addEventListener("click", () => {
            const selectedDisplay  = selected.querySelector(".selected-display");

            if(selectedDisplay.closest('.menu__item')) {
                let selectedDisplay  = selected.querySelector(".selected-display");
                selectedDisplay.removeAttribute('value')
            } else {

                selectedDisplay.innerHTML = o.innerHTML;
                selectedDisplay.setAttribute('value', o.getAttribute('data-value'));
                // selectedDisplay.setAttribute('discount1', o.getAttribute('data-discount1'));
                // selectedDisplay.setAttribute('discount2', o.getAttribute('data-discount2'));
                selected.classList.add('selected')
                handlerCalculator(selectedDisplay)
            }
        });
    }
});

// check if anything else other than the dropdown is clicked
window.addEventListener("click", function (e) {
    if (e.target.closest(".wrapper-dropdown") === null) {
        closeAllDropdowns();
    }
});

// close all the dropdowns
function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".wrapper-dropdown");
    selectedAll.forEach((selected) => {
        handleDropdown(selected, false);
    });
}

// open all the dropdowns
function handleDropdown(dropdown, open) {
    if (open) {
        dropdown.classList.add("active");
    } else {
        dropdown.classList.remove("active");
    }
}


///--------- accordion MainPage


$('.acc__head').on('click', function() {
    if ($(this).hasClass('opens')) {
        $(this).siblings('.acc__body').slideUp();
        $(this).removeClass('opens');
        $(this).parent().toggleClass('opens');
    }
    else {
        $('.acc__body').slideUp();
        $('.acc__head').removeClass('opens');
        $('.acc__item').removeClass('opens');
        $(this).siblings('.acc__body').slideToggle();
        $(this).toggleClass('opens');
        $(this).parent().toggleClass('opens');
    }
});


$('.input-file input[type=file]').on('change', function(){
    let file = this.files[0];
    $(this).next().html(file.name);

    var reader = new FileReader();
    reader.onload = function (e) {
        $('#file_upload')
            .attr('src', e.target.result);
        $('#plus').addClass('close');
    };
    reader.readAsDataURL(this.files[0]);
});
const originalFileLabelText = $('.input-file span').text();
const originalImagePreviewSrc = $('#file_upload').attr('src');

$('#plus').on("click", function(e){

    const fileInput = $('.input-file input[type=file]');
    const imagePreview = $('#file_upload');
    const fileLabel = $('.input-file span');

    $(this).removeClass("close");
    fileInput.val('');

    fileLabel.text(originalFileLabelText);
    imagePreview.attr('src', originalImagePreviewSrc);
});

document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});



$$('form input',el=>{
    el.addEventListener('input',  (e)=>{
        const parent = el.closest('.form__item');
        if(!parent) return;
        parent.classList.toggle('focus',el.value != '')
    })
})
$$('form textarea',el=>{
    el.addEventListener('input',  (e)=>{
        const parent = el.closest('.form__item');
        if(!parent) return;
        parent.classList.toggle('focus',el.value != '')
    })
})








// WP Request


document.addEventListener('wpcf7mailsent', function (event) {
    // Получение ID формы
    var formId = event.detail.contactFormId;
    console.log(formId)

    // Проверка ID формы
    if (formId === 7 || formId === 55) {

        $$('.modal-request')[0].classList.remove('open-popup');
        $$('.modal-success')[0].classList.add('open-popup');


        $$('.form__item',el=>{
            el.classList.remove('focus');
        })

    }
}, false);



