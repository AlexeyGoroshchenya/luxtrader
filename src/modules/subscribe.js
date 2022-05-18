import { openModal } from './helpers';
import { closeModal } from './helpers';

export const subscribe = () => {

    const subscribeForm = document.querySelector('.subscribe__body')
    //const subscribeInput = document.querySelector('.subscribe__input')
    const statusBlockBody = document.querySelector('.alert__text');


    const statusBlock = document.createElement('div');


    const errorText = 'Что-то пошло не так...';
    const loadText = 'Заявка отправляется...';
    const successText = 'С вами свяжется наш менеджер';
    const notValidText = 'Пожалуйста проверьте введенные данные'

    const showSubmitStatus = (str) => {

        statusBlockBody.prepend(statusBlock)
        statusBlock.textContent = str
        openModal(document.querySelector('.alert'), 'alert-hidden')

    }

    const showUncorrectInput = (input) => {
        input.style.color = 'red'

        setTimeout(() => {
            input.style.color = ''
        }, 5000)
    }


    const validate = (list) => {

        let nameInput = true
        let phoneInput = true
        let emailInput = true

        list.forEach(input => {

            if (input.matches('input[name=email]')) {
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)) {
                    showUncorrectInput(input)
                    showSubmitStatus(notValidText)
                    emailInput = false
                }
            }

            if (input.matches('input[name=fio]')) {
                if (input.value.match(/[^а-яА-яa-zA-Z\s]/) || input.value.length < 1) {
                    showUncorrectInput(input)
                    showSubmitStatus(notValidText)
                    nameInput = false
                }
            }
            if (input.matches('input[name = phone]')) {
                if (input.value.length < 1 || input.value.match(/[^0-9\+]/)) {
                    showUncorrectInput(input)
                    showSubmitStatus(notValidText)
                    phoneInput = false
                }
            }
        })
        let success = nameInput && phoneInput && emailInput

        return success

    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(res => res.json())
    }

    const submitData = () => {
        const formElements = subscribeForm.querySelectorAll('input[type = text]')
        const formData = new FormData(subscribeForm)
        const formBody = {}

        showSubmitStatus(loadText)

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    showSubmitStatus(successText)

                    setTimeout(() => {

                        closeModal(document.querySelector('.alert'), 'alert-hidden')
                    }, 5000)
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    console.log(error);
                    successText(errorText)
                })
        } else {
            console.log('данные не валидны');
        }
    }

    try {
        if (!subscribeForm) {
            throw new Error('верните форму')
        }

        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitData()
        })
    } catch (error) {
        console.log(error.message);
    }






}