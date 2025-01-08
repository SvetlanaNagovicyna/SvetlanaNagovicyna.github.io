function ValidateForm(form, cb) {
  this.$form = document.querySelector(form);
  if (this.$form === null) return false;
  this.$btn = this.$form.querySelector("button");

  const _self = this;

  this.$form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (_self.checkForm("[data-valid]")) {
      loadXMLDoc(this.$form, cb);
    }

    const inputs = document.querySelectorAll('[data-valid]')
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
      if (!_self.checkName(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "text") {
      if (!_self.checkName(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "pcode") {
      if (!_self.checkpcode(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "address") {
      // console.log(targetName === "address")
      if (!_self.checkAddress(target)) {
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

      $$('[data-pass]', el => {

        const pass = el.dataset.pass;
        const passCheck = $$(`[data-pass="${pass}"]`).every(element => element.value !== '');

        if (passCheck == true && $$('[data-pass]')[0].value == $$('[data-pass]')[1].value) {
          $$(`[data-pass="${pass}"]`, elin => {
            elin.dataset.valid = 'true'
            _self.removeError(elin);
          });
        } else {
          $$(`[data-pass="${pass}"]`, elin => {

            elin.dataset.valid = 'false'
            _self.addError(elin);
          })

        }
      });
    }

    // if (targetName === "login") {
    //   if (!_self.checkValue(target) || !_self.checkLogin(target.value)) {
    //     _self.addError(target);
    //     _self.validDataFalse(target);
    //   } else {
    //     _self.removeError(target);
    //     _self.validDataTrue(target);
    //   }
    // }

    if (targetName === "telegram") {
      if (!_self.checkValue(target) || !_self.checkTelegram(target.value)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }

    if (targetName === "tel") {
      if (!_self.checkValue(target) || !_self.checkTel(target.value)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "num") {
      target.value = target.value.replace(/[^0-9]/gim, "").substr(0, 9);

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

    if (targetName === "years") {
      if (!_self.checkRadio(target)) {
        _self.addError(target);
        _self.validDataFalse(target);
      } else {
        _self.removeError(target);
        _self.validDataTrue(target);
      }
    }
    if (targetName === "ontario") {
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
      // _self.addInputsValid(target);
      _self.statusNotValid();
    }
  });
}

// ValidateForm.prototype.addInputsValid = function (selector) {
//   return selector.closest('.form__input').querySelectorAll('span')[0].classList.add('filled');
// };

ValidateForm.prototype.checkValue = function (selector) {
  return selector.value !== "";
};

ValidateForm.prototype.checkNum = function (input) {
  return input.value.length === 7 || input.value.length === 9;
};
ValidateForm.prototype.checkPhrase = function (input) {
  // return selector.value !== "";
  return input.value.length < 8 || input.value == "";
};

ValidateForm.prototype.validDataTrue = function (selector) {
  return (selector.dataset.valid = "true");
};

ValidateForm.prototype.validDataFalse = function (selector) {
  return (selector.dataset.valid = "false");
};

ValidateForm.prototype.addError = function (selector) {
  selector.classList.add("item-error");
  selector.parentNode.classList.add("item-error");
};

ValidateForm.prototype.removeError = function (selector) {
  selector.classList.remove("item-error");
  selector.parentNode.classList.remove("item-error");
};

ValidateForm.prototype.checkForm = function (selector) {
  return [].every.call(this.$form.querySelectorAll(selector), function (item) {
    return item.dataset.valid === "true";
  });
};

ValidateForm.prototype.statusYesValid = function () {
  this.$btn.classList.add("active");
  this.$btn.disabled = false;
};

ValidateForm.prototype.statusNotValid = function () {
  this.$btn.classList.remove("active");
  this.$btn.disabled = true;
};

ValidateForm.prototype.checkName = function (nameValue) {
  const name = /^[a-zA-Zа-яА-Я]+$/ui;
  // const name = /^(?!\s*$)[-\/'"в„–., A-ZРђ-РЇРЃ]+$/i;
  let isName = name.test(nameValue.value);
  if (nameValue.value[0] === "-") {
    isName = false;
  }
  return isName;
};

ValidateForm.prototype.checkEmail = function (emailValue) {
  // const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email =
    /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;

  return email.test(emailValue);
};

ValidateForm.prototype.checkPass = function (passValue) {
  // const pass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  // const pass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;
  // const pass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  const pass = /([а-яА-Яa-zA-Z0-9]{8,})$/;
  return pass.test(passValue);
};

// ValidateForm.prototype.checkLogin = function (loginValue) {
//   // const login = /^([a-zA-Z0-9]+)$/;
//   const login = /^([^Р°-СЏРђ-РЇ]+)$/;
//   return login.test(loginValue);
// };

ValidateForm.prototype.checkpcode = function (pcodeValue) {
  const pcode = /^[a-zA-Z0-9]+$/;
  return pcode.test(pcodeValue.value);
};

ValidateForm.prototype.checkAddress = function (AddressValue) {
  const address = /^[a-zA-Z0-9^ ]+$/;
  return address.test(AddressValue.value);

};

ValidateForm.prototype.checkTelegram = function (telegramValue) {
  const telegram = /^([@][a-zA-Z0-9]+)$/;
  return telegram.test(telegramValue);
};

ValidateForm.prototype.checkTel = function (telValue) {
  const tel =
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  return tel.test(telValue);
  // return selector.value.length > 14
};

ValidateForm.prototype.checkCheckbox = function (selector) {
  return selector.checked;
};

ValidateForm.prototype.checkRadio = function (selector) {
  return selector.checked;
};

// const formRegHeader = new ValidateForm("#from",()=>{
//   $('.popup_code').addClass('active');
//   $('body').addClass('overflow');
//   localStorage.setItem('userPhone', $('.header__form [name="phone"]').get(0).value);
// });
const formReg = new ValidateForm("#form");
// const formLog = new ValidateForm("#form-login");

function loadXMLDoc(form, cb) {
  // pmLoader("form", "show");
  // let postData = objectifyForm(form);

  // console.log(postData);

  function errorCheck(data) {

    if (!data || !data.errors) {
      return false
    }
    const errorArr = [
      {
        code: ' ',
        text: ' ',
      },

    ];

    document.querySelector('.form__error_text').innerHTML = '';
    Object.keys(data.errors).forEach(el => {

      errorArr.forEach(elin => {
        if (el == elin.code) {
          document.querySelector('.form__error').classList.add('active')

          let errorText = document.createElement('span');
          errorText.innerHTML = elin.text;
          document.querySelector('.form__error_text').appendChild(errorText);
        }
      });
    });
  }

  function serialize(form) {
    let requestArray = [];
    form.querySelectorAll('[name]').forEach((elem) => {
      if (elem.name === 'phone') {
        requestArray.push(elem.name + '=' + elem.value.replace(/[^+\d]/g, ''));
      } else {
        requestArray.push(elem.name + '=' + elem.value);
      }
    });
    if (requestArray.length > 0)
      return requestArray.join('&');
    else
      return false;
  }
  // console.log(serialize(form));

  $.ajax({
    type: "POST",
    dataType: 'json',
    url: form.action,
    data: serialize(form),
    success: function (response) {
      var event = new CustomEvent('onSuccessRegistration', { "detail": response });
      document.dispatchEvent(event);
      document.querySelector('.success').classList.add('openes');
      document.querySelector('html').classList.add('open_popup');
    },
    error: function (error) {
      var event = new CustomEvent('onErrorRegistration', { "detail": error });
      document.dispatchEvent(event);

      document.querySelector('.fail').classList.add('openes');
      document.querySelector('html').classList.add('open_popup');

      if (error.responseJSON.errCode == 'EMAIL_IS_TAKEN') {
        const emailInput = form.querySelector('input[type="email"]')
        emailInput.closest('.form__input').classList.add('email-exist')
        emailInput.dataset.valid = 'false'
        emailInput.classList.remove('true')
      }
    }
  });

}



Array.from(document.querySelectorAll('[name="phone"]')).forEach(el => {
  el.addEventListener('blur', function () {
    document.querySelectorAll('.hiddenPhone').forEach(elem => {
      elem.value = this.value;
    })
  })
})
