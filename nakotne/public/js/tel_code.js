! function (t) {
	t.closest = t.closest || function (t) {
		for (var e = this; e;) {
			if (e.matches(t)) return e;
			e = e.parentElement
		}
		return null
	}
}(Element.prototype);

var codes = [
	{
		"mask": "+380(XX)XXX-XX-XX",
		"countryCode": "UA",
		"countryName": "Ukraine"
	}
];



// function createOptions(select, telInput, img) {
// 	var optionsString = '';
// 	for (var item in codes) {
// 		var el = codes[item];
// 		var codeSpace = el.mask.split(' ')[0];
// 		var codeScobochka = el.mask.split('(')[0];
// 		var code = codeSpace;
// 		if (codeScobochka.length < codeSpace.length) code = codeScobochka;
// 		optionsString += "<option value='" + el.mask + "' data-mask='" + el.mask + "' data-countrycode='" + el.countryCode + "'>" + el.countryName + " " + el.mask + "</option>";
// 	}
// 	select.innerHTML = optionsString;

// 	cloneOptions(select, ['UA']);

// 	select.addEventListener('change', function () {
// 		setNumberMask(telInput, this.options[this.selectedIndex].value);
// 		setFlagImg(img, this.options[this.selectedIndex]);
// 		telInput.focus();
// 	});

// 	getCountryCodeByGeo(select, telInput, img)

// }

// function cloneOptions(select, codesArray) {
// 	var optionsCont = [];
// 	codesArray.forEach(function (el) {
// 		select.querySelectorAll('option[data-countrycode=' + el + ']').forEach(function (elIn) {
// 			optionsCont.push(elIn.cloneNode(true));
// 		})
// 	});

// 	var optgroup = document.createElement('optgroup');
// 	optgroup.label = '';
// 	optgroup.disabled = true;

// 	select.insertBefore(optgroup, select.firstChild);


// 	optionsCont.reverse().forEach(function (elIn) {
// 		select.insertBefore(elIn, select.firstChild);
// 	})

// }


function setNumberMask(input, value) {

	input.value = '';
	// input.dataset.valid = 'false';
	// input.closest('form').classList.remove('form-active');
	// input.classList.remove('item-error');

	// $(input).unmask();
	$(input).mask(input.placeholder, {
		autoclear: false,
	});

	// input.placeholder = value;

}
setNumberMask(document.getElementById('phone'))

// function setFlagImg(img, option, telInput) {
// 	img.src = 'public/img/flags/' + option.dataset.countrycode.toLowerCase() + '.svg';
// 	img.alt = option.dataset.countrycode.toLowerCase();
// }

// function selectByCode(select, telInput, img, code) {
// 	var nodes = Array.prototype.slice.call(select.children);
// 	var indexEl = nodes.indexOf(document.querySelector('option[data-countrycode="' + code + '"]'));

// 	document.querySelector('option[data-countrycode="' + code + '"]').selected = true;
// 	select.selectedIndex = indexEl;

// 	setNumberMask(telInput, select.options[indexEl].value);
// 	setFlagImg(img, select.options[indexEl]);
// }

// function getCountryCodeByGeo(select, telInput, img) {
// 	// var xhr = new XMLHttpRequest();
// 	// xhr.open('GET', 'get_country.php');
// 	var defCountry = 'UA';
// 	// xhr.onload = function() {
// 	//     if (xhr.status === 200) {
// 	//         // var obj = JSON.parse(xhr.responseText);
// 	//         if(document.querySelector('option[data-countrycode="'+xhr.responseText+'"]')){
// 	//         	selectByCode(select,telInput,img,xhr.responseText);
// 	//         }else{
// 	//     		selectByCode(select,telInput,img,defCountry);
// 	//         }
// 	//     }else{
// 	//     	selectByCode(select,telInput,img,defCountry);
// 	//     }
// 	// };
// 	// xhr.onerror = function() {
// 	//     selectByCode(select,telInput,img,defCountry);
// 	// }

// 	// xhr.send();
// 	selectByCode(select, telInput, img, defCountry);
// }


// createOptions(document.getElementById('phone_code'), document.getElementById('phone'), document.getElementById('flag_img'));