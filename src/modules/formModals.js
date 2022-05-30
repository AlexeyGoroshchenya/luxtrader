
import { openModal } from './helpers';
import { closeModal } from './helpers';
import { renderBetModal } from './renderBetModal';


export const formModals = () => {


    document.body.addEventListener('click', (e) => {

        if (e.target.closest('.join__button__body')) {
            openModal(document.querySelector('.authorization'), 'authorization-hidden');
        }

        if (e.target.classList.contains('authorization__close') || !e.target.closest('.authorization__body')) {
            if (!document.querySelector('.authorization').classList.contains('authorization-hidden')) {
                closeModal(document.querySelector('.authorization'), 'authorization-hidden');
            }
        }

        if (e.target.closest('.card__button')) {

            renderBetModal(e.target.closest('.popular__card').getAttribute('index'));

            openModal(document.querySelector('.bet'), 'bet-hidden');
        }
        if (e.target.classList.contains('bet__close')) {
            if (!document.querySelector('.bet').classList.contains('bet-hidden')) {
                closeModal(document.querySelector('.bet'), 'bet-hidden');
            }
        }



        if (e.target.matches('.footer__feedback>a')) {
            e.preventDefault()

            openModal(document.querySelector('.feedback'), 'feedback-hidden');
        }

        if (e.target.classList.contains('feedback__close') || !e.target.closest('.feedback__body')) {

            if (document.querySelector('.alert').classList.contains('alert-hidden') && !document.querySelector('.feedback').classList.contains('feedback-hidden')) {

                closeModal(document.querySelector('.feedback'), 'feedback-hidden');
            }
        }

        if (e.target.closest('.alert__button') || !e.target.closest('.alert__body')) {
            if (!document.querySelector('.alert').classList.contains('alert-hidden')) {

                closeModal(document.querySelector('.alert'), 'alert-hidden');
            }
        }

        if (e.target.closest('.attention-open')) {
            e.preventDefault()
            openModal(document.querySelector('.attention'), 'attention-hidden');
        }

        if (e.target.closest('.attention__button') || !e.target.closest('.attention__body')) {
            if (!document.querySelector('.attention').classList.contains('attention-hidden')) {

                closeModal(document.querySelector('.attention'), 'attention-hidden');
            }
        }


    })


}