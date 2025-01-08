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


// const parallax = $$('.parallax');

// if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
//     for (let index = 0; index < parallax.length; index++) {
//         new Parallax(parallax[index], { limitY: 0});
//     }
// }

// const parallax2 = $$('.parallax_2');

// if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
//     for (let index = 0; index < parallax2.length; index++) {
//         new Parallax(parallax2[index]);
//     }
// }

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

//SWIPER


const advantagesSlider = new Swiper('.advantages__slider', {

  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  speed: 1000,
  navigation: {
    nextEl: ".advantages__slide_next",
    prevEl: ".advantages__slide_prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
})




//OPEN MENU

$$('.header__open')[0].addEventListener('click', ({ currentTarget }) => {
  $$('.header__menu')[0].classList.toggle('active');
  $$('.header')[0].classList.toggle('active');
  $$('.body-wrap')[0].classList.toggle('no-scroll');
  currentTarget.classList.toggle('active');
  // ScrollTrigger.refresh();
})



$$('.header__menu_item a.link', el => {
  el.addEventListener('click', () => {
    $$('.header__menu')[0].classList.remove('active');
    $$('.body-wrap')[0].classList.remove('no-scroll');
  })
})


window.addEventListener('scroll', () => {
  window.scrollY > 0 ? $$('.header')[0].classList.add('scroll') : $$('.header')[0].classList.remove('scroll')
})

window.scrollY > 0 ? $$('.header')[0].classList.add('scroll') : $$('.header')[0].classList.remove('scroll')


//PODPIS

// window.addEventListener('scroll', () => {

//   if ($$('.colleen__podpis')[0].getBoundingClientRect().y < 500) {
//     $$('.anim', el => el.classList.add('run'))
//   }
// })


//POPUP

document.querySelectorAll('.popup-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const popupBlock = document.querySelector('.' + btn.dataset.popup);
    popupBlock.classList.add('open-popup');
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';

  })
});

document.querySelectorAll('.modal-wrap').forEach(wrap => {
  wrap.addEventListener('click', event => {
    const eventTarg = event.target;

    if (eventTarg.closest('.close') || eventTarg.closest('.modal__form_btn') || eventTarg === wrap) {
      wrap.classList.remove('open-popup')
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('html').style.overflow = '';
    }
  })
})


/// ACCORDION

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
acc('.acc__head', '.acc__body', '.acc__item');


//LENIS

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)






const topAnimate = gsap
  .timeline()
  .to(".top__title h1", { y: 0, delay: .5, duration: 1 })
  .to(".top__descr p", { y: 0, delay: 1, duration: 1 }, 0.3)
  .to(".top__btn .btn", { scale: 1, delay: 1, duration: 1 }, 0.5)
  .to(".elem.elem-1", { y: 0, delay: 1, duration: 1 }, 0.5)
// .to(".top__logo_img img", { y: 0, delay: 1, duration: 1 }, 0.7)
// .to(".top__logo_text img", { y: 0, delay: 1, duration: 1 }, 0.9)




$$('.title__gsap', el => {
  gsap.to(el, {
    y: 0 + '%',
    scrollTrigger: {
      trigger: el,

      start: '0 100%',
      end: '0 90%',
      scrub: 2,
    },
  })
})
$$('.title__gsap-wrap svg', el => {
  gsap.to(el, {
    scale: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 30%',
      scrub: 0,
    },
  })
})

// $$('.title__gsap-wrap svg', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,

//       start: '0 100%',
//       end: '0 90%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__gsap--2', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,

//       start: '0 120%',
//       end: '0 110%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__gsap--3', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,

//       start: '0 60%',
//       end: '0 50%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__gsap--4', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,

//       start: '0 80%',
//       end: '0 70%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__gsap--5', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,
//       toggleActions: 'restart pause pause',
//       start: '0 110%',
//       end: '0 100%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__flow img', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,
//       toggleActions: 'restart pause pause',
//       start: '0 100%',
//       end: '0 70%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__title h2', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,
//       toggleActions: 'restart pause pause',
//       start: '0 100%',
//       end: '0 90%',
//       scrub: 2,
//     },
//   })
// })

// $$('.science__text p', el => {
//   gsap.to(el, {
//     y: 0 + '%',
//     scrollTrigger: {
//       trigger: el,
//       toggleActions: 'restart pause pause',
//       start: '0 100%',
//       end: '0 88%',
//       scrub: 2,
//     },
//   })
// })

$$('.clinics__content_title h3', el => {
  gsap.to(el, {
    x: 0 + '%',
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 88%',
      scrub: 2,
    },
  })
})

















$$('.sustainability__testimonials_box', el => {
  gsap.to(el, {
    opacity: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 90%',
      end: '0 80%',
      scrub: 2,
    },
  })
})

$$('.colleen__text p', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 80%',
      scrub: 2,
    },
  })
})

$$('.colleen__title h2', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 80%',
      scrub: 2,
    },
  })
})

$$('.colleen__podpis_text p', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 80%',
      scrub: 2,
    },
  })
})
$$('.sustainability__text p', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 80%',
      end: '0 60%',
      scrub: 2,
    },
  })
})

$$('.sustainability__pic_flow--1', el => {
  gsap.to(el, {
    x: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 120%',
      end: '0 40%',
      scrub: 2,
    },
  })
})

$$('.sustainability__pic_flow--2', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 150%',
      end: '0 60%',
      scrub: 2,
    },
  })
})

$$('.social__box_bg', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 130%',
      end: '0 60%',
      scrub: 2,
    },
  })
})

$$('.social__letter', el => {
  gsap.to(el, {
    scale: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 30%',
      scrub: 0,
    },
  })
})

$$('.sustainability__title', el => {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 60%',
      scrub: 0,
    },
  })
})

$$('.sustainability__pic_img', el => {
  gsap.to(el, {
    scale: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: 'restart pause pause',
      start: '0 100%',
      end: '0 30%',
      scrub: 0,
    },
  })
})


if (window.innerWidth < 1000) {

  const topAnimate = gsap
    .timeline()
    .to(".top__title h1", { y: 0, delay: 1, duration: 1 })
    .to(".top__text p", { y: 0, delay: 1, duration: 1 }, 0.3)
    .to(".top__btn .btn", { scale: 1, delay: 1, duration: 1 }, 0.5)
    .to(".top__logo_img img", { y: 0, delay: 1, duration: 1 }, -1)
    .to(".top__logo_text img", { y: 0, delay: 1, duration: 1 }, -1.5)
}



if (window.innerWidth > 768) {


  $$('.clinics__content_item', el => {
    gsap.to(el, {
      y: 0 + '%',
      scrollTrigger: {
        trigger: el,
        toggleActions: 'restart pause pause',
        start: '0 100%',
        end: '0 88%',
        scrub: 2,
      },
    })
  })
}