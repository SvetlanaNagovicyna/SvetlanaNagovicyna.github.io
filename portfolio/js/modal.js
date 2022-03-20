const modalButton = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const cloxeButton = modal.querySelector('.modal__close');


modalButton.forEach((btn) => {
	btn.addEventListener('click', () => {
		modal.classList.remove('hidden');
	})
})


overlay.addEventListener('click', () => {
	modal.classList.add('hidden');
})
cloxeButton.addEventListener('click', () => {
	modal.classList.add('hidden');
})