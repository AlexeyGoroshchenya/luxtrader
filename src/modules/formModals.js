import { blockBody } from './helpers';
import { unblockBody } from './helpers';


export const formModals = () => {

    const openModal = (elem, className) => {
        if (elem) {
            elem.style.display = 'flex';
            blockBody();

            setTimeout(() => {
                elem.classList.remove(className);
            }, 300)
        }
    }

    const closeModal = (elem, className) => {
        if (elem) {
            unblockBody();

            elem.classList.add(className);
            setTimeout(() => {
                elem.style.display = 'none';
            }, 300)
        }
    }


    document.body.addEventListener('click', (e) => {
        let modal = '';

        if (e.target.closest('.join__button__body')) {
            modal = document.querySelector('.authorization');
            openModal(modal, 'authorization-hidden');
        }

        if (e.target.classList.contains('authorization__close') || !e.target.closest('.authorization__body')) {
            if (!document.querySelector('.authorization').classList.contains('authorization-hidden')) {
                modal = document.querySelector('.authorization');
                closeModal(modal, 'authorization-hidden');
            }
        }

        if (e.target.matches('.footer__feedback>a')) {
            e.preventDefault()
            modal = document.querySelector('.feedback');
            openModal(modal, 'feedback-hidden');
        }

        if (e.target.classList.contains('feedback__close') || !e.target.closest('.feedback__body')) {
            if (!document.querySelector('.feedback').classList.contains('feedback-hidden')) {
                modal = document.querySelector('.feedback');
                closeModal(modal, 'feedback-hidden');
            }
        }


    })


}