document.querySelector('.input-file input[type=file]').addEventListener('change', function () {
  let file = this.files[0];
  this.closest('.input-file').querySelector('.input-file-text').innerHTML = file.name;
  this.closest('.input-file').querySelector('.input-file-btn').classList.add('active');
});


function ValidateForm(form, cb) {

  this.$form = document.querySelector(form);
  if (this.$form === null) return false;
  this.$btn = this.$form.querySelector("button");

  const _self = this;

  this.$form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (this.checkForm()) {

      loadXMLDoc(this.$form, cb);
    }
  });


  this.$form.addEventListener("input", function (event) {
    const target = event.target;
    const targetName = target.dataset.name;


    if (targetName === "phrase") {
      if (!_self.checkPhrase(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "email") {
      if (!_self.checkValue(target) || !_self.checkEmail(target.value)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "txt") {
      if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "name") {
      console.log(_self)
      if (!_self.checkName(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "password") {
      if (!_self.checkValue(target) || !_self.checkPass(target.value)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "tel") {
      // if (!_self.checkValue(target) || !_self.checkTel(target.value)) {
      if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "num") {
      target.value = target.value.replace(/[^0-9]/gim, "").substr(0, 4);

      if (target.value.length < 4) {
        $$('[name="bd"]')[0].nextElementSibling.textContent = 'РќРµ РІРµСЂРЅС‹Р№ С„РѕСЂРјР°С‚ РіРѕРґР° СЂРѕР¶РґРµРЅРёСЏ';
      } else {
        $$('[name="bd"]')[0].nextElementSibling.textContent = 'Р’ Р±Р°Р·Рµ РЅР°С…РѕРґСЏС‚СЃСЏ Р°РЅРєРµС‚С‹ Р»СЋРґРµР№ РЅРµ СЃС‚Р°СЂС€Рµ 70 Р»РµС‚';
      }

      if (!_self.checkValue(target) || !_self.checkNum(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "code") {
      target.value = target.value.replace(/[^0-9]/gim, "").substr(0, 9);
      console.log(target.value);
      if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    $$('[data-vf]', el => {

      const vf = el.dataset.vf;
      const a = $$(`[data-vf="${vf}"]`).some(element => element.value.length > 2);

      if (a == true) {
        $$(`[data-vf="${vf}"]`, elin => {
          elin.dataset.valid = 'true'
          _self.removeError(elin);
        });
      } else {
        $$(`[data-vf="${vf}"]`, elin => {
          elin.dataset.valid = 'false'
          _self.addError(elin);
        });
      }

    });


    if (_self.checkForm("[data-valid]")) {
      _self.statusYesValid();
    } else {
      _self.statusNotValid();
    }

  });

  this.$form.addEventListener("change", function (event) {
    const target = event.target;
    const targetName = target.dataset.name;



    if (targetName === "date") {
      if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "rule") {
      if (!_self.checkCheckbox(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "login") {
      if (!_self.checkValue(target) || !_self.checkLogin(target.value)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "bd") {
      if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "radio") {
      if (!_self.checkRadio(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "select") {
      _self.removeError(target);
      _self.validDataTrue(target);
      // }
    }

    if (_self.checkForm("[data-valid]")) {
      _self.statusYesValid();
    } else {
      _self.statusNotValid();
    }
  });
}

ValidateForm.prototype.checkCheckbox = function (selector) {
  return selector.checked;
};

ValidateForm.prototype.checkLogin = function (loginValue) {

  const login = /^([^a-zA-Z]+)$/;
  return login.test(loginValue);
};


ValidateForm.prototype.checkValue = function (selector) {
  return selector.value.length >= 2;
};

ValidateForm.prototype.checkTel = function (selector) {
  return selector.value.indexOf('X') === -1;
};

ValidateForm.prototype.checkAdress = function (input) {
  return input.value.length >= 2;
};

ValidateForm.prototype.checkNum = function (input) {
  return input.value.length === 4 && input.value >= 1952 && input.value <= 2004;
};

ValidateForm.prototype.validDataTrue = function (selector) {
  return selector.dataset.valid = 'true';
};

ValidateForm.prototype.validDataFalse = function (selector) {
  return selector.dataset.valid = 'false';
};

ValidateForm.prototype.addError = function (selector) {
  selector.classList.add('item-error');
  selector.parentNode.classList.add('item-error');
};

ValidateForm.prototype.removeError = function (selector) {
  selector.classList.remove('item-error');
  selector.parentNode.classList.remove('item-error');
};

ValidateForm.prototype.checkForm = function () {
  return [].every.call(this.$form.querySelectorAll('[data-valid]'), function (item) {
    return item.dataset.valid === 'true';
  });
};

ValidateForm.prototype.statusYesValid = function () {
  this.$btn.classList.add('active');
  this.$btn.disabled = false;
};

ValidateForm.prototype.statusNotValid = function () {
  this.$btn.classList.remove('active');
  this.$btn.disabled = true;
};

ValidateForm.prototype.checkName = function (nameValue) {
  const name = /^[A-ZА-ЯЁЇІЄ\- ]+$/i;
  let isName = name.test(nameValue.value);
  if (nameValue.value[0] === '-' || nameValue.value[0] === ' ') {
    isName = false;
  }
  return isName;
};
ValidateForm.prototype.checkEmail = function (emailValue) {
  // const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
  return email.test(emailValue);
};

//   $('.popup_error__close').on('click', function(){
//       $('.popup_error').removeClass('active');
//   });


const formCandidate = new ValidateForm("#formCandidate");
const formCompanies = new ValidateForm("#formCompanies");




function loadXMLDoc(form) {
  console.log(form)
  const input = form.querySelector('input[type="file"]')

  let data = new FormData(form);

  fetch(form.action, {
      method: 'POST',
      body: data
    })
    .then((response) => {
      // form.reset();
      $$('.success')[0].classList.add('active');
      $$('html')[0].classList.add('open_popup');
      form.reset();
    })
    .catch((error) => {

      $$('.fail')[0].classList.add('active');
      $$('html')[0].classList.add('open_popup');
      form.reset();

    });
  //   .then(function (response) {
  //   console.log(response);

  //   if (response.status >= 200 && response.status < 300) {
  //     form.reset();
  //     $$('.success')[0].classList.add('active');
  //     $$('html')[0].classList.add('open_popup');
  //   }
  // })
};

// const companies = document.querySelector("#formCompanies")

// function loadXMLDoc(companies) {

//   var data = new FormData();

//   data.append('name', companies.querySelector('input[name="name"]').value)
//   data.append('about', companies.querySelector('input[name="about"]').value)
//   data.append('tel', companies.querySelector('input[name="tel"]').value)
//   data.append('email', companies.querySelector('input[name="email"]').value)

//   fetch('/tr', {
//     method: 'POST',
//     body: data
//   }).then(function (response) {
//     console.log(response);
//   })
// };

//   const response = fetch(formCandidate.action, {
//     method: "POST",
//     body: formData(postData),
//     redirect: 'follow',
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(function (response) {

//     console.log(formData)

//     console.log(response);

//     // if (response.status >= 200 && response.status < 300) {
//     //   form.reset();
//     //   $$('.success')[0].classList.add('active');
//     //   $$('html')[0].classList.add('open_popup');

//     //   // const button = document.getElementById('my-default-button');
//     //   //   if (button) {
//     //   //     button.addEventListener('click', () => atcb_action(config, button));
//     //   //     button.click();
//     //   //   }

//     // } else {
//     //   console.log('a');
//     //   $$('.fail')[0].classList.add('active');
//     //   $$('html')[0].classList.add('open_popup');
//     // }
//   });
// }


// function objectifyForm(form) {
//   let formData = form.querySelectorAll("input:not([type=checkbox])");

//   let returnArray = Array.from(formData).reduce((acc, v) => {
//     console.dir(v)
//     if (v.value !== '') {
//       acc[v.name] = v.value;
//     }

//     return acc;
//   }, {});


//   return returnArray;

// }