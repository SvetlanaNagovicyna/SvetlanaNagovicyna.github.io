function show() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;


	// if (scrolled > Math.abs((topSection?.offsetHeight || 0) - (headerLogo?.offsetHeight || 0))) {
	// 	$$('body')[0].classList.add('scrolled');
	// } else {
	// 	$$('body')[0].classList.remove('scrolled');
	// }

	var scrolled_n = scrolled + window.innerHeight - (window.innerHeight / 150);  //2.7
	$$('.vis_on_scroll', (el) => {
		if (!el.classList.contains('visible') && (scrolled_n > el.getBoundingClientRect().top + scrolled || el.getBoundingClientRect().top + el.offsetHeight <= window.innerHeight)) {
			el.classList.add('visible');
		}
	});

	$$('.paralax_y', el => {
		const gbcr = el.getBoundingClientRect();
		const coef = (gbcr.top - window.innerHeight / 2 + gbcr.height / 2) / (window.innerHeight - gbcr.height / 2);
		el.style.setProperty('--y', coef * gbcr.height * -.1 + 'px');
	})
}


window.onscroll = function () {
	show();

};

const allNumber = document.querySelectorAll('.num');

allNumber.forEach((el) => {
	const numberTop = el.getBoundingClientRect().top;
	const start = +el.innerHTML;
	const end = +el.dataset.max;
	numAnim(el, numberTop, start, end, 50)

});


// let number1 = document.querySelector('.procent-1'),
// 	number1Top = number1.getBoundingClientRect().top,
// 	start1 = +number1.innerHTML, end1 = +number1.dataset.max;




function numAnim(number, numberTop, start, end, speed) {
	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > numberTop - window.innerHeight * 2) {

			this.removeEventListener('scroll', onScroll);
			var interval = setInterval(function () {
				number.innerHTML = ++start;
				if (start == end) {
					clearInterval(interval);
				}
			}, speed);
		}
	});
}
// numAnim(number1, number1Top, start1, end1, 70)
// numAnim(number1, number1Top, start1, end1, 70)


// var number2 = document.querySelector('.number2'),
// 	number2Top = number2.getBoundingClientRect().top,
// 	start2 = +number2.innerHTML, end2 = +number2.dataset.max;

// window.addEventListener('scroll', function onScroll() {
// 	if (window.pageYOffset > number2Top - window.innerHeight / 2) {
// 		this.removeEventListener('scroll', onScroll);
// 		var interval2 = setInterval(function () {
// 			number2.innerHTML = ++start2;
// 			if (start2 == end2) {
// 				clearInterval(interval2);
// 			}
// 		}, 5);
// 	}
// });

// var number3 = document.querySelector('.number3'),
// 	number3Top = number3.getBoundingClientRect().top,
// 	start3 = +number3.innerHTML, end3 = +number3.dataset.max;

// window.addEventListener('scroll', function onScroll() {
// 	if (window.pageYOffset > number3Top - window.innerHeight / 2) {
// 		this.removeEventListener('scroll', onScroll);
// 		var interval3 = setInterval(function () {
// 			number3.innerHTML = ++start3;
// 			if (start3 == end3) {
// 				clearInterval(interval3);
// 			}
// 		}, 5);
// 	}
// });
