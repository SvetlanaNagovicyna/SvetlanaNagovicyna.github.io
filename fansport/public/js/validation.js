function ValidateForm(form) {
  this.$form = document.querySelector(form);
  this.$btn = this.$form.querySelector('button');

  const _self = this;

  this.$form.addEventListener('submit', function (event) {
    event.preventDefault();

    const findError = Array.from(_self.$form.querySelectorAll('[data-valid]')).find((item) => item.dataset.valid === 'false');
    
    if (!findError) {
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

const formDesktop = new ValidateForm('#form');
// // const formReg2 = new ValidateForm('#form_reg2');
// // const formPop2 = new ValidateForm('#form_sign_in');


// function loadXMLDoc(form) {
//   let data = objectifyForm(form);
//   console.log(data);

//   fetch(form.action, {
//     method: 'POST',
//     body: data,
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(response => {
//     console.log(response);
//     // const errors = response.errors;
//     // if (typeof errors === 'undefined') {
//     //   const token = response.playerToken
//     //   const redirectUrl = `${api_domain}/api/v2/auth/partners-player-entry?playerToken=${token}&deeplink=%2F`
  
//     //   window.location = redirectUrl;
//     // } else {
//     //   errorsHandler(errors);
//     //   grecaptcha.reset();
//     // }
//   })
// }

// function objectifyForm(form) {
//   let formData = form.querySelectorAll("input:not([type='checkbox'])");
//   let returnArray = Array.from(formData).reduce((acc, v) => {
//     acc[v["name"]] = v["value"];
//     return acc;
//   }, {});
//   return JSON.stringify(returnArray);
//   // return returnArray;
// }



// // example


// // let params = Object.fromEntries(new URLSearchParams(window.location.search));

// // let data = {
// //     "email": requestObject.email,
// //     "language": requestObject.language,
// //     "password": requestObject.password,
// //     "phoneNumber": requestObject.phoneNumber,
// //     "partnerId": params.pid ?? params.publisher_id ?? null,
// //     "trackId": params.track_id ?? null,
// //     "param1": params.param1 ?? null,
// //     "param2": params.param2 ?? null,
// //     "param3": params.param3 ?? null,
// //     "param4": params.param4 ?? null
// // };

// // let deeplink = params.deeplink ?? params.sl ?? '/';
// // deeplink = encodeURIComponent('/' + deeplink.replace(/^\/+/,''));


// // $.ajax({url: "https://preprod.fairspin.io/api/v2/auth/register/partners?captcha-response=" + captcha, type: 'POST', data: JSON.stringify(data),
// //     contentType: 'application/json',
// //     dataType: 'json',
// //     success: function(response) {
// //         if (response.hasOwnProperty('playerToken')) {
// //             let token = response.playerToken;

// //             window.location.href = `https://preprod.fairspin.io/api/v2/auth/partners-player-entry?playerToken=${token}&deeplink=${deeplink}`;
// //         }
// //     },
// //     error: errorCallback
// // });


var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({

// "id": [id],
// "sign": "[подпись]",
// "phone": "[phone]",
// "email": "[email]",
"country": document.querySelector('input[name="country"]').value,
// "registration_name": "[имя]",
// "registration_surname": "[фамилия]",
// "currency": "[код_валюты]",
// "registration_address": "[адрес]",
// "birthday": "[дата_рождения]",
// "send_reg_data": [send_reg_data],
// "tag": [tag],
// "pg": [pg],
// "click_id": [click_id],
// "bonus_choice": [bonus_choice],
// "need_parse_phone": [need_parse_phone],
// "is_remember_user": [is_remember_user]
});

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch("https://site.com/api/partners/v2/registration", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
