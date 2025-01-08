

function ValidateForm(form, cb) {

  this.$form = document.querySelector(form);
  if (this.$form === null) return false;
  this.$btn = this.$form.querySelector("button");

  const _self = this;

  this.$form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (this.checkForm()) {

      loadXMLDoc(this.$form, cb);
    } else {
      this.$form.querySelectorAll('[data-valid=false]').forEach((el) => {
        el.classList.add('item-error');
      });

      if (this.$form.querySelector('#phone').dataset.valid === 'true') {
        this.$form.querySelector('#phone').classList.remove('item-error');
      } else {
        this.$form.querySelector('#phone').classList.add('item-error');
      }
      this.$form.querySelector('.error-text').classList.add('activeErr');
    }
  });


  this.$form.addEventListener("change", function (event) {
    const target = event.target;
    const targetName = target.dataset.name;

    if (targetName === "tel") {

      if (!_self.checkValue(target)) {

        // if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);

      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
  })


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
      // console.log(_self)
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
      // if (!_self.checkValue(target) || !_self.checkTel(target)) {
      if (!_self.checkValue(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "num") {
      target.value = target.value.replace(/[^0-9]/gim, "").substr(0, 2);

      // if (target.value.length < 4) {
      //   $$('[name="bd"]')[0].nextElementSibling.textContent = 'РќРµ РІРµСЂРЅС‹Р№ С„РѕСЂРјР°С‚ РіРѕРґР° СЂРѕР¶РґРµРЅРёСЏ';
      // } else {
      //   $$('[name="bd"]')[0].nextElementSibling.textContent = 'Р’ Р±Р°Р·Рµ РЅР°С…РѕРґСЏС‚СЃСЏ Р°РЅРєРµС‚С‹ Р»СЋРґРµР№ РЅРµ СЃС‚Р°СЂС€Рµ 70 Р»РµС‚';
      // }

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
      document.querySelector('#phone').classList.remove('item-error');
      document.querySelector('.error-text').classList.remove('activeErr');
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
      document.querySelector('#phone').classList.remove('item-error')
      document.querySelector('.error-text').classList.remove('activeErr');
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
  // console.log(selector.value)
  return selector.value;
  // return selector.value.indexOf('_') === -1;
  // $(function () {
  //   //2. Получить элемент, к которому необходимо добавить маску
  //   $("#phone").mask("+380(99)999-9999");
  // });


};

ValidateForm.prototype.checkAdress = function (input) {
  return input.value.length >= 2;
};

ValidateForm.prototype.checkNum = function (input) {
  // return input.value.length === 4 && input.value >= 1952 && input.value <= 2004;
  return input.value.length === 2 && input.value >= 18 && input.value <= 99;
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


const formCandidate = new ValidateForm("#form");




function loadXMLDoc(form) {
  console.log(form)


  let data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data
  })
    .then((response) => {
      // form.reset();
      $$('.success')[0].classList.add('openes');
      $$('html')[0].classList.add('open_popup');
      form.reset();
    })
    .catch((error) => {

      $$('.fail')[0].classList.add('openes');
      $$('html')[0].classList.add('open_popup');
      form.reset();

    });

};

