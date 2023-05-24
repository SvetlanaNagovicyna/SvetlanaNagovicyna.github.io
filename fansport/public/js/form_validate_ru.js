

function ValidateForm(form) {
  this.$form = document.querySelector(form);
  this.$btn = this.$form.querySelector('button');

  const _self = this;

  this.$form.addEventListener('submit', function (event) {
    event.preventDefault();

    const findError = Array.from(_self.$form.querySelectorAll('[data-valid]')).find((item) => item.dataset.valid === 'false');
    
    if (!findError && (grecaptcha.getResponse(0) !== '' || grecaptcha.getResponse(1) !== '')) {
      loadXMLDoc(this);
    }
  })

  this.$form.addEventListener('input', function (event) {
    const target = event.target;
    const targetName = target.dataset.name;

    if (targetName === 'email') {
      if (_self.checkValue(target) && !_self.checkEmail(target)) {
       _self.addError(target);
        _self.validDataFalse(target)
      } else {
        _self.removeError(target);
        _self.validDataTrue(target)
      } 
    }

    if (targetName === 'password') {
      if (_self.checkValue(target) && !_self.checkPass(target)) {
        _self.addError(target);
         _self.validDataFalse(target)
       } else {
         _self.removeError(target);
         _self.validDataTrue(target)
       } 
    }


    if (targetName === 'phoneNumber') {
      if (_self.checkValue(target) && !_self.checkPhone(target)) {
        _self.addError(target);
         _self.validDataFalse(target)
       } else {
         _self.removeError(target);
         _self.validDataTrue(target)
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
    
    if (_self.checkForm()) {
      _self.statusYesValid();
    } else {
      _self.statusNotValid();
    }

  });

  this.$btn.addEventListener('click', function () {
    _self.$form.querySelectorAll('[data-valid]').forEach(function (item) {
      if(item.dataset.valid === 'false') {
        _self.addError(item);
      }
    });
  })

}

ValidateForm.prototype.checkValue = function (selector) {
  return selector.value !== '';
};
ValidateForm.prototype.checkNum = function (input) {
  input.value = input.value.replace(/[^-0-9]/gim, '').substr(0, 9);
  const num = /^\d{7,9}$/;
  return num.test(input.value);
};
ValidateForm.prototype.checkEmail = function (input) {
  const email =
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9-_\+]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,10}$/;
    return email.test(input.value);
};

ValidateForm.prototype.checkPass = function (input) {
  // const pass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  // const pass = /^([A-Z0-9]{8,})$/;
  const pass = /^[^'"`\\]{6,25}$/;
  return pass.test(input.value);
};

ValidateForm.prototype.checkPhone = function (input) {
  // const pass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  const pass = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return pass.test(input.value);
};

ValidateForm.prototype.checkCheckbox = function (selector) {
  return selector.checked;
};

ValidateForm.prototype.validDataTrue = function (selector) {
  return selector.dataset.valid = 'true';
};

ValidateForm.prototype.validDataFalse = function (selector) {
  return selector.dataset.valid = 'false';
};

ValidateForm.prototype.addError = function (selector) {
  selector.classList.add('item-error');
  selector.closest('.form__item').classList.add('item-error');
};

ValidateForm.prototype.removeError = function (selector) {
  selector.classList.remove('item-error');
  selector.closest('.form__item').classList.remove('item-error');
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

const formDesktop = new ValidateForm('#formReg');


function loadXMLDoc(form) {
  let data = '';
  const api_domain = (typeof globalParams !== 'undefined') ? globalParams['DOMAIN'] : "https://fairspin.io";
  const api_path = '/api/v2/auth/register/partners';
  const recaptchaToken = grecaptcha.getResponse(0);
  const url = api_domain+api_path+`?captcha-response=${recaptchaToken}`
  let unserInfo = {}

  if (typeof globalParams !== 'undefined') {
    unserInfo = {
      "partnerId": globalParams['PID'],
      "trackId": globalParams['TRACK'],
      "language": globalParams['LANG'] ? globalParams['LANG'] : 'en',
      "param1": globalParams['PARAM1'],
      "param2": globalParams['PARAM2'],
      "param3": globalParams['PARAM3'],
      "param4": globalParams['PARAM4']
    }
  }

  console.log(objectifyForm(form));

  data = JSON.stringify({...objectifyForm(form), ...unserInfo});

  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    const errors = response.errors;
    if (typeof errors === 'undefined') {
      const token = response.playerToken
      const redirectUrl = `${api_domain}/api/v2/auth/partners-player-entry?playerToken=${token}&deeplink=%2F`
  
      window.location = redirectUrl;
    } else {
      errorsHandler(errors);
      grecaptcha.reset();
    }
  })
}


function getErrors() {
  return [
    {
      code: "CAPTCHA_ERROR",
      type: 'captcha',
      text: 'Recaptcha error'
    },

    {
      code: "EMAIL_BLANK",
      type: 'email',
      text: 'Email blank'
    },
    {
      code: "EMAIL_MAX_LENGTH",
      type: 'email',
      text: 'Incorrect email length'
    },
    {
      code: "EMAIL_INCORRECT_FORMAT",
      type: 'email',
      text: 'Incorrect email format'
    },
    {
      code: "EMAIL_ALREADY_TAKEN",
      type: 'email',
      text: 'Email already taken'
    },

    {
      code: "PHONE_NUMBER_BLANK",
      type: 'tel',
      text: 'Phone number blank'
    },
    {
      code: "PHONE_NUMBER_INCORRECT_FORMAT",
      type: 'tel',
      text: 'Incorrect phone format'
    },
    {
      code: "PHONE_NUMBER_FORBIDDEN",
      type: 'tel',
      text: 'Your country is blocked'
    },
    {
      code: "PHONE_NUMBER_TAKEN",
      type: 'tel',
      text: 'Phone number taken'
    },

    {
      code: "PASSWORD_BLANK",
      type: 'password',
      text: 'Password blank'
    },
    {
      code: "PASSWORD_INCORRECT_FORMAT_NO_UPPER_CASE",
      type: 'password',
      text: 'Incorrect password format. Password must contain uppercase characters'
    },
    {
      code: "PASSWORD_INCORRECT_FORMAT_NO_DIGIT",
      type: 'password',
      text: 'Incorrect password format. Password must contain numbers'
    },
    {
      code: "PASSWORD_INCORRECT_FORMAT",
      type: 'password',
      text: 'Incorrect password format'
    },

    {
      code: "LANGUAGE_BLANK",
      type: 'lang',
      text: 'Language blank'
    },
  ]
}

function errorsHandler(errors) {
  const allErrors =  getErrors();
  const currentErrors = allErrors.reduce((accum, error) => errors.find(er => er === error.code) !== undefined ? [...accum, error] : accum, []);
  
  currentErrors.forEach(error => {
    if (error.type === 'tel' || error.type === 'email' || error.type === 'password') {
      const input = document.querySelector(`input[type="${error.type}"]`);
      formDesktop.addError(input);
      input.closest('.form__item').querySelector('.form__error').innerHTML = error.text;
    }
  })
}

function objectifyForm(form) {
  let formData = form.querySelectorAll("input:not([type='checkbox'])");
  let returnArray = Array.from(formData).reduce((acc, v) => {
    if (v["name"] === 'phoneNumber') {
      acc[v["name"]] = v["value"].replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll('-', '');
      return acc;
    }

    acc[v["name"]] = v["value"];
    return acc;
  }, {});

  return returnArray;
}