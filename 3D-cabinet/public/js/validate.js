function ValidateForm(form,cb) {
  this.$form = document.querySelector(form);
  if (this.$form === null) return false;
  this.$btn = this.$form.querySelector("button");


  const _self = this;
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
      console.log(target.value);
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
    if (targetName === "select") {
      // if (!_self.checkSelect(target)) {
      //   _self.addError(target);
      //   _self.validDataFalse(target);
      // } else {
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
  const name = /^[A-ZА-ЯЁ\-]+$/i;
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
  const pass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  return pass.test(passValue);
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


const form = new ValidateForm("#form")


document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(this);

  fetch(this.getAttribute('action'), {
      method: 'POST',
      body: formData
  })
  .then(function(response) {
      return response.text();
  })
  .then(function(data) {

      // document.getElementById('result').innerHTML = data; // Отображаем сообщение об успешной отправке
  })
  .catch(function(error) {
      console.error('Ошибка:', error);
  })
  .finally(function() {
    document.getElementById('form').reset(); 
});
});
 
// function loadXMLDoc(form,cb) {

//   function objectToFormData(obj, formData = new FormData(), parentKey = '') {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const value = obj[key];
//             const currentKey = parentKey ? `${parentKey}[${key}]` : key;

//             if (value instanceof File) {
//                 // Если значение является файлом, добавляем его в FormData
//                 formData.append(currentKey, value);
//             } else if (value instanceof Object && !(value instanceof Date)) {
//                 // Если значение является объектом (и не является датой), рекурсивно вызываем функцию для вложенных свойств
//                 objectToFormData(value, formData, currentKey);
//             } else {
//                 // В противном случае добавляем обычное значение в FormData
//                 formData.append(currentKey, value);
//             }
//         }
//     }

//     return formData;
// }

//   let postData = objectifyForm(form);

//   let formData = objectToFormData(postData)


//   const scriptURL = 'https://script.google.com/macros/s/AKfycby90XA9GjmrKw1vlp4j7NMVLrAc9ShE4CUKLwDrnZrODIhFFPUa_AWQ4B2QPZbQi6YB/exec'

 
//   fetch(scriptURL, { method: 'POST', body: formData})
//   .then(response => { 
//       $$('.form__status .empty')[0].classList.remove('active')
//       $$('.form__status .error')[0].classList.remove('active')
//       $$('.form__status .success')[0].classList.add('active')
//       } 
//     )
//   .catch(error => {
//     $$('.form__status .empty')[0].classList.remove('active')
//     $$('.form__status .success')[0].classList.remove('active')
//     $$('.form__status .error')[0].classList.add('active')
//   }).finally( 
  
//     form.reset()
//    )
  

//   function objectifyForm(form) {
//     let formData = form.querySelectorAll("input, textarea");
  
//     let returnArray = Array.from(formData).reduce((acc, v) => {
//       if(v.value !== ''){
//         acc[v.name] = v.value;
//       } 
//       return acc;
//     }, {});
  
//     return returnArray;
    
//   }
// }
  

