const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabFeatureImages = document.querySelectorAll('.feature__img');
const tabTitle = document.querySelectorAll('.design__title');
const textBrowserTab = document.querySelector('head title');


// console.log(tabTitle)




function changeContent(array, value) {
	array.forEach((elem) => {
		if (elem.dataset.tabsField === value) {
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}
	});
}


tabButtons.forEach((tabButton) => {
	tabButton.addEventListener('click', (event) => {

		const dataValue = tabButton.dataset.tabsHandler;

		changeContent(tabImages, dataValue)
		changeContent(tabDescriptions, dataValue)
		changeContent(tabFeatureImages, dataValue)
		changeContent(tabTitle, dataValue)


		tabTitle.forEach((title) => {
			if (title.dataset.tabsField === dataValue) {
				textBrowserTab.textContent = title.textContent;
			}
		})

		tabButtons.forEach((btn) => {
			if (btn === event.target) {
				btn.classList.add('design-list__item_active');
			} else {
				btn.classList.remove('design-list__item_active');
			}
		})


	});
});