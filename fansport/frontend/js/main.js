function openSelect() {
    const selectForm = document.querySelectorAll('.form__select');
    selectForm.forEach(function (el) {
        const selectBtn = el.querySelectorAll('.select__current');
        const select =  el.querySelectorAll('.select__options');
        const arrow = el.querySelectorAll('.form__arrow');
        

        selectBtn.forEach(function (el) {
            el.addEventListener('click', () => {
                arrow.forEach(function (e) {
                    e.classList.toggle('down')
                })
                select.forEach(function (e) {
                    e.classList.contains('open') ? e.classList.remove('open') : e.classList.add('open')
                })
            })
        })
        arrow.forEach(function (el) {
            el.addEventListener('click', () => {
                arrow.forEach(function (e) {
                    e.classList.toggle('down')
                })
                select.forEach(function (e) {
                    e.classList.contains('open') ? e.classList.remove('open') : e.classList.add('open')
                })
            })
        })
    })





    // const selectBtn = document.querySelectorAll('.select__current');
    // const select = document.querySelectorAll('.select__options');
    // const arrow = document.querySelectorAll('.form__arrow');


    // selectBtn.forEach(function (el) {
    //     el.addEventListener('click', () => {
    //         arrow.forEach(function (e) {
    //             e.classList.toggle('down')
    //         })
    //         select.forEach(function (e) {
    //             e.classList.contains('open') ? e.classList.remove('open') : e.classList.add('open')
    //         })
    //     })
    // })
    // arrow.forEach(function (el) {
    //     el.addEventListener('click', () => {
    //         arrow.forEach(function (e) {
    //             e.classList.toggle('down')
    //         })
    //         select.forEach(function (e) {
    //             e.classList.contains('open') ? e.classList.remove('open') : e.classList.add('open')
    //         })
    //     })
    // })
}
openSelect()

function setSelectValue() {
   
   
   
    const selectForm = document.querySelectorAll('.form__select');
    selectForm.forEach(function (el) { 

        const currentOption = el.querySelectorAll('.select__current');
        const arrow = el.querySelectorAll('.form__arrow');
        const select = el.querySelectorAll('.select__options');

        select.forEach(function (el) {
            const options = el.querySelectorAll('.option');
            const input = el.closest('.form__select').querySelector('input');
    
            options.forEach(option => {
                option.addEventListener('click', () => {
    
                    input.value = option.dataset.crypto
                    select.forEach(function (e) {
                        e.classList.contains('open') ? e.classList.remove('open') : e.classList.add('open')
                    })
                    arrow.forEach(function (e) {
                        e.classList.remove('down')
                    })
                    currentOption.forEach(function (e) {
                        e.innerHTML = option.innerHTML
                    })
    
                })
            })
    
        })
    })
   
   
   
   
   
   
   
   
   
   
   ////////////////////////////////////////
   
   
   
   
   
   
   
    // const currentOption = document.querySelectorAll('.select__current');
    // const arrow = document.querySelectorAll('.form__arrow');
    // const select = document.querySelectorAll('.select__options');

    // select.forEach(function (el) {
    //     const options = el.querySelectorAll('.option');
    //     const input = el.closest('.form__select').querySelector('input');

    //     options.forEach(option => {
    //         option.addEventListener('click', () => {

    //             input.value = option.dataset.crypto
    //             select.forEach(function (e) {
    //                 e.classList.contains('open') ? e.classList.remove('open') : e.classList.add('open')
    //             })
    //             arrow.forEach(function (e) {
    //                 e.classList.remove('down')
    //             })
    //             currentOption.forEach(function (e) {
    //                 e.innerHTML = option.innerHTML
    //             })

    //         })
    //     })

    // })


}
setSelectValue()
