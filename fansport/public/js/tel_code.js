var codes = [

	{
		"mask": "+7-XXX-XXX-XXXX",
		"countryCode": "KZ",
		"countryName": "Kazakhstan"
	}
	
];

function createOptions(select,telInput,img){
	var optionsString = '';
	for(var item in codes){
		var el = codes[item];
		var codeSpace = el.mask.split(' ')[0];
		var codeScobochka = el.mask.split('(')[0];
		var code = codeSpace;
		if(codeScobochka.length < codeSpace.length) code = codeScobochka;
		optionsString += "<option value='"+el.mask+"' data-mask='"+el.mask+"' data-countrycode='"+el.countryCode+"'>"+ el.countryName +" "+el.mask+"</option>";
	}
	select.innerHTML = optionsString;


	select.addEventListener('change',function(){
		setNumberMask(telInput,this.options[this.selectedIndex].value);
		setFlagImg(img,this.options[this.selectedIndex]);
	});

	getCountryCodeByGeo(select,telInput,img)

}

function cloneOptions(select,codesArray){
	var optionsCont = [];
	codesArray.forEach(function(el){
		select.querySelectorAll('option[data-countrycode='+el+']').forEach(function(elIn){
			optionsCont.push(elIn.cloneNode(true));
		})
	});

	var optgroup = document.createElement('optgroup');
	optgroup.label = '';
	optgroup.disabled = true;

	select.insertBefore(optgroup,select.firstChild);


	optionsCont.reverse().forEach(function(elIn){
		select.insertBefore(elIn,select.firstChild);
	})

}

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.split(search).join(replacement);
};

var isLoad = true;
var mask;

function setNumberMask(input,value){

	input.value = '';
	input.dataset.valid = 'false';

	var a = value.split('X')[0];
	var newMask = value.replace(a, '{'+ a +'}').replaceAll('0', '\\0').replaceAll('X', '0');

	var maskOptions = {
		mask: newMask,
		lazy: false,
		placeholderChar: 'X'
	};

	if(isLoad){
		mask = IMask(input, maskOptions);
		isLoad = false;
	} else {
		mask.destroy();
		mask = IMask(input, maskOptions);
	}

	input.placeholder = value;

}


function setFlagImg(img,option,telInput){
	img.src = 'public/img/'+option.dataset.countrycode.toLowerCase()+'.png';
	img.alt = option.dataset.countrycode.toLowerCase();
}

function selectByCode(select,telInput,img,code){
	var nodes = Array.prototype.slice.call( select.children );
	var indexEl = nodes.indexOf(document.querySelector('option[data-countrycode="'+code+'"]') );

	document.querySelector('option[data-countrycode="'+code+'"]').selected = true;
	select.selectedIndex = indexEl;

	setNumberMask(telInput,select.options[indexEl].value);
	setFlagImg(img,select.options[indexEl]);
}

function getCountryCodeByGeo(select,telInput,img){
	selectByCode(select,telInput,img,'KZ');
}

createOptions( document.getElementById('phone_code'), document.getElementById('tel_desk'), document.getElementById('flag_img'));