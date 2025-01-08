// //
// //
// // gsap.registerPlugin(ScrollTrigger);
// //
// //
// //
// // // Using Locomotive Scroll
// //
// //
// //
// //
// // const locoScroll = new LocomotiveScroll({
// //     el: document.querySelector(".smooth-scroll"),
// //     smooth: true
// // });
// // // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// // locoScroll.on("scroll", ScrollTrigger.update);
// //
// // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// // ScrollTrigger.scrollerProxy(".smooth-scroll", {
// //     scrollTop(value) {
// //         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// //     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
// //     getBoundingClientRect() {
// //         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// //     }
// // });
//
// // const scrollContainer = document.querySelector(".body-wrap");
// //
// // const scroll = new LocomotiveScroll({
// //     el: scrollContainer,
// //     smooth: true
// // });
//
// // scroll.on("scroll", (e) => {
// //     scrollContainer.style.backgroundColor =
// //         "hsl(" + 100 + e.scroll.y / 5 + ",40%,30%)";
// // });
//
//
// gsap.registerPlugin(ScrollTrigger);
//
//
// // Using Locomotive Scroll
//
// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".body-wrap"),
//     smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);
//
// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     }
// });
//
//
//
//
//
//
// // GSAP PARALLAX - INDIVIDUAL ELEMENTS (while sharing class)
//
// // get sections
// var parallaxElements = Array.prototype.slice.call(document.querySelectorAll("section"));
// var self = this;
//
// // get box or parallax element inside each section
// parallaxElements.forEach(function(self) {
//
//     var boxTop = self.querySelectorAll(".parallaxTop");
//     var box = self.querySelectorAll(".parallax");
//
//     // animate boxes at top of page (section already in viewport)
//     gsap.to(boxTop, {
//         scrollTrigger: {
//             scroller: ".smooth-scroll",
//             scrub: true,
//             trigger: self,
//             start: "top 0%",
//             end: "bottom 0%",
//         },
//         y: (i, target) => -innerHeight * target.dataset.speed,
//         ease: "none"
//     });
//
//     // animate boxes when the relevant section comes into viewport
//     gsap.to(box, {
//         scrollTrigger: {
//             scroller: ".smooth-scroll",
//             scrub: true,
//             trigger: self,
//             start: "top 100%",
//             end: "bottom 0%",
//         },
//         y: (i, target) => -innerHeight * target.dataset.speed,
//         ease: "none"
//     });
//
//
// });
//
//
//
// ////////////////////////////////////
//
// // get pinned boxes and box width
// var pinBoxes = $('.pin-box');
// var pinBoxWidth = pinBoxes.width();
//
// // screen width 100vw equivalent
// var windowWidth = $(window).innerWidth();
//
// // get pin box wrpper and calc width based on window width X number of boxes
// var pinWrap = $('.pin-wrap');
// var pinWrapWidth = windowWidth * pinBoxes.length;
//
// var horizontalScrollLength = (pinBoxes.length - 1) * windowWidth;
//
// // give pin wrap a set width
// $('.pin-wrap').width(pinWrapWidth);
//
//
//
// console.log('pin box width', pinBoxWidth);
// console.log('pin wrap total width', pinWrapWidth);
// console.log('horizontal scroll', horizontalScrollLength);
//
//
// // Pinning and horizontal scrolling
//
// gsap.to(".pin-wrap", {
//     scrollTrigger: {
//         scroller: ".smooth-scroll",
//         scrub: true,
//         trigger: "#sectionPin",
//         pin: "#sectionPin",
//         // anticipatePin: 1,
//         start: "top top",
//         end: pinWrapWidth
//     },
//     x: -horizontalScrollLength,
//     ease: "none"
// });
//
//
//
//
//
// ////////////////////////////////////
//
//
// //other animations
// gsap.to("#box5", {
//     scrollTrigger: {
//         scroller: ".smooth-scroll",
//         scrub: true,
//         trigger: "#box5",
//         start: "top bottom",
//         end: "bottom top"
//     },
//     x: 500,
//     ease: "none"
// });
//
//
// //timeline test
// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#section3",
//         scroller: ".smooth-scroll",
//         // scrub: true,
//         start: "top 50%",
//         // end: "+=100%",
//         // markers: true,
//         // id: "text panel"
//     }
// });
//
// tl.from("#box7", {scale: 0.3, x: "-100%", autoAlpha: 0})
//     .from("#box8", {autoAlpha: 0, ease: "power2"})
// // .to("#box7", {scale: 1.2, ease: "bounce"})
//
//
// //toggle test
// gsap.from("#box9", {
//     scrollTrigger: {
//         trigger: "#section4",
//         scroller: ".smooth-scroll",
//         toggleActions: "restart none none none",
//         start: "top top",
//         id: "bottom panel"
//         // end: "top top"
//     },
//     rotation: 360,
//     ease: "none"
// });
//
//
//
//
//
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//
// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
