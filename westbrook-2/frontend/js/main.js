
//меню
$('.header__button').click(function(){
    openMenu();
})
$('.header__nav--overlay').click(function(){
    closeMenu();
});

function openMenu(){
    $('.header__menu').addClass('active');
}
function closeMenu(){
    $('.header__menu').removeClass('active');
}


//--меню

//Отзывы
    $('.clients_say__wrap').slick({
        slidesToShow: 2,
        infinite: false,
        swipeToSlide: true,
        appendArrows: '.clients_say__arrows',
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    })
//--Отзывы

//хз зачем тут картинка блок

$('.technologies__item').each((ind,el)=>{
    el.addEventListener('mouseout',function(){
        const img = $(this).closest('.technologies').find(`img[data-imgid="${$(this).attr('data-imgid')}"]`);
        img.removeClass('hover');

    });
    
    el.addEventListener('mouseover',function(){
        const img = $(this).closest('.technologies').find(`img[data-imgid="${$(this).attr('data-imgid')}"]`);
        img.addClass('hover');
    });

    el.addEventListener('mousemove',function(e){
        const img = $(this).closest('.technologies').find(`img[data-imgid="${$(this).attr('data-imgid')}"]`);
        if(img.length < 1) return false;
        img.css({
            top: e.clientY,
            left: e.clientX
        });
    })
})
//--хз зачем тут картинка блок

//фционал появления блоков
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + ($(window).height() * .8);
    var elemTop = $(elem).offset().top;

    return (docViewBottom > elemTop);
}//чекаем скролл дошел ли до верха элемента

function checkVisible(){
    $('.vis_on_scroll').each((ind,el)=>{
        if (!$(el).hasClass('visible') && isScrolledIntoView(el)) $(el).addClass('visible');
    })
}
checkVisible();
window.addEventListener('scroll', checkVisible);
//--фционал появления блоков

//поочередное появление элементов в контактах
$('.contacts__item').each((ind,el)=>{
    $(el).css('transition-delay', `${ind * 250}ms`)
})
//--поочередное появление элементов в контактах

$("a[href*='#']").click(function(e){
    const href = $(this).attr("href");
    const hash = href.substr(href.indexOf("#"));
    if(href.length > 1 && $(hash).length > 0){
        e.preventDefault();
        closeMenu()
        const body = $("html, body");
        body.stop().animate({scrollTop: $(hash).offset().top}, 500, 'swing', function() { 
        });
    }
    
});//плавный скролл к элементу с ID указанным в href ссылки, если он есть на странице


//попапы


$('.open-popup').click(function (e) {
    if ($('.popups__popup.' + this.dataset.popuptype).length > 0) {
        e.preventDefault();
        openPopup(this.dataset.popuptype);
    }
}); // открытие попапов по клику на элемент с классом .open-popup, после чего идет поиск попапа с классом указанном в data-popuptype

$('.popups__close').click(function (e) {
    const popupParent = $(this).closest('.popups__popup');
    if (popupParent.length > 0){
        e.preventDefault();
        $(this).closest('.popups__popup').removeClass('active');
        $('body').removeClass('modal-open');
    }
}); // закрытие попапа при клику на элемент с классом popups__close

function openPopup(type) {
    $(`.popups__popup.${type}`).addClass('active');
    $('body').addClass('modal-open');
}// открыть конкретный попап

function closePopup(type) {
    $(`.popups__popup.${type}`).removeClass('active');
    $('body').removeClass('modal-open');
}//закрыть конкретный попап
function closeAllPopup() {
    $(`.popups__popup.active`).removeClass('active');
    $('body').removeClass('modal-open');
}// закрыть все попапы

(function checkPopup() {
    if ($('.popups__popup.active').length > 0) $('body').addClass('modal-open');
})()//поверяем есть ли при загрузке страницы активные попапы чтоб отключать скролл на странице


//--попапы

//открыть попап
$('.email_form__submit').click((e)=>{
    e.preventDefault();
    openPopup('order')
})
//--открыть попап

// делаем форму в попапе слайдером с отключеным фционалом переключения для большего удобства
var popupSlider = $('.popups__slider').slick({
    infinite: false,
    accessibility: false,
    adaptiveHeight: true,
    arrows: false,
    draggable: false,
    fade: true,
    swipe: false,
    touchMove: false,
})
//--делаем форму в попапе слайдером с отключеным фционалом переключения для большего удобства


popupSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    // console.log(event, slick, currentSlide, nextSlide);
    console.log(nextSlide / slick.$slides.length);
    // nextSlide
    $('.popups__load_line--inner').css('width', ((nextSlide + 1) / slick.$slides.length)* 100 + '%' )
});//настраиваем ползунок

$('.popups__return').click(function(e){
    e.preventDefault();
    popupSlider.slick('slickGoTo', 0)
})//кнопка сброса 

$('.popups__gonext').click(function(e){
    e.preventDefault();
    popupSlider.slick('slickNext')
})//кнопка переключения на следующий этап 
$('.popups__form--label').click(function(){
    popupSlider.slick('slickNext')
})//клик на радио кнопку




$("form").submit(function (e) {
    e.preventDefault();
    const form = $(this);
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function (data) {
            alert(data);
        }
    });
});