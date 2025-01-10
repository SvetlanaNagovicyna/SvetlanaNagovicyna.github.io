

function ValidateForm(form) {
  this.$form = document.querySelector(form);

  if (this.$form === null) return false;
  this.$btn = this.$form.querySelector("button");

  const _self = this;

  this.$form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (_self.checkForm("[data-valid]")) {

      if ((grecaptcha.getResponse(0) !== '' || grecaptcha.getResponse(1) !== '')) {
        loadXMLDoc(this.$form);
      }

    }

    const inputs = this.$form.querySelectorAll('[data-valid]')
    inputs.forEach(input => {

      if (input.dataset.valid == 'false') {
        _self.addError(input);

      } else {
        _self.removeError(input);

      }
    })

  });


  this.$form.addEventListener("input", function (event) {
    const target = event.target;
    const targetName = target.dataset.name;



    if (targetName === "name") {

      if (!_self.checkName(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }



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

    if (targetName === "country") {
      if (!_self.checkValue(target) || !_self.checkCountry(target)) {
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
ValidateForm.prototype.checkCountry = function (selector) {
  const datalist = selector.closest('.form__item').querySelector('datalist');
  const inputValue = selector.value.toLowerCase();
  const optionsList = Array.from(datalist.querySelectorAll("option")).map(option => {
    return option.value.toLowerCase();
  });

  // return selector.value.length >= 2;
  // if (option != null) {
  return optionsList.indexOf(inputValue) >= 0;
  // }
  // return false;
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
  // this.$btn.disabled = false;
};

ValidateForm.prototype.statusNotValid = function () {
  this.$btn.classList.remove('active');
  // this.$btn.disabled = true;
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

const formItem2 = new ValidateForm("#formContacts");
const formItem1 = new ValidateForm("#formApply");


// const formCompanies = new ValidateForm("#formCompanies");




function loadXMLDoc(form) {



  let data = new FormData(form);



  fetch(form.action, {
    method: 'POST',
    body: data
  })
    .then((response) => {

      $$('.success')[0].classList.add('open');
      $$('html')[0].classList.add('open_popup');
      form.reset();
      grecaptcha.reset();
    })
    .catch((error) => {

      $$('.fail')[0].classList.add('open');
      $$('html')[0].classList.add('open_popup');
      form.reset();
      grecaptcha.reset();

    });

};

