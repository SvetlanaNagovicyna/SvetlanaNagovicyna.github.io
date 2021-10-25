new Swiper('.top-section__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 6,
    whatchOverflow: true,
    spaceBetween: 22,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    speed: 800,
    effect: 'slide'
});



new Swiper('.offers__slider', {
    navigation: {
        nextEl: '.offers__slider .swiper-button-next',
        prevEl: '.offers__slider .swiper-button-prev'
    },
    slidesPerView: 1,
    whatchOverflow: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 800,
    effect: 'cube',
    grabCursor: true,
        cubeEffect: {
          shadow: false,
          slideShadows: false,
        },
});


new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.reviews__slider .swiper-button-next',
        prevEl: '.reviews__slider .swiper-button-prev'
    },
    slidesPerView: 3,
    whatchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    // },
    speed: 800,
    effect: 'slide'
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




// // Open Modal
// function openModal() {
//     document.querySelector('.modal-wrap.modal-rules').style.display = 'flex';
//     document.querySelector('body').style.overflow = "hidden";
//     setTimeout(() => {
//         document.querySelector('.modal-wrap.modal-rules').classList.add('open');
//     }, 1)
// };

// var modal = document.querySelector('.modal-wrap.modal-rules');
// var closeClickOverlay = document.querySelector('.close img');


// document.querySelector(".rules").addEventListener('click', openModal);
// document.querySelector('.modal-wrap.modal-rules').addEventListener('click', (e) => {
//     if (e.target === modal || e.target === closeClickOverlay) {
//         document.querySelector('.modal-wrap.modal-rules').classList.remove('open');
//         document.querySelector('body').style.overflow = "";
//         setTimeout(() => {
//             document.querySelector('.modal-wrap.modal-rules').style.display = 'none';
//         }, 500)
//     }
// });



/////////////////////////////Select

var select, selElmnt, div, div2, c
/*look for any elements with the class "custom-select":*/
let sel = document.getElementsByClassName("tariffs__select")

    for (var i = 0; i < sel.length; i++) {
    
        selElmnt = sel[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        div = document.createElement("DIV");
        div.setAttribute("class", "select-selected");
        div.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        sel[i].appendChild(div);
    
    
        /*for each element, create a new DIV that will contain the option list:*/
        div2 = document.createElement("DIV");
        div2.setAttribute("class", "select-items select-hide");
        for (let j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                    and the selected item:*/
                var y, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (let i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (let k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            div2.appendChild(c);
        }
        sel[i].appendChild(div2)
    
        div.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    
    }

    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
