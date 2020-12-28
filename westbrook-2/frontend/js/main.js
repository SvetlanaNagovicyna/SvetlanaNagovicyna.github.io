
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
}

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
    // console.log($(href));
    const hash = href.substr(href.indexOf("#"));
    if(href.length > 1 && $(hash).length > 0){
        e.preventDefault();
        closeMenu()
        const body = $("html, body");
        body.stop().animate({scrollTop: $(hash).offset().top}, 500, 'swing', function() { 
        });
    }
})