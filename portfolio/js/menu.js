const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__link');

burger.addEventListener('click', () => {
	menu.classList.add('menu-active');
})

menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menu.classList.remove('menu-active');
	})
});

document.addEventListener('click', (event) => {
	console.log(event.target);

	if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
		menu.classList.remove('menu-active');
	}

})