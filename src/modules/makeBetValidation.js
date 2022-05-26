

export const makeBetValidation = () => {


    const betForm = document.querySelector('.bet__body')

    betForm.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/\D+/, "");
    })




}