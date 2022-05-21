import { blockBody } from './helpers';
import { unblockBody } from './helpers';
import { openModal } from './helpers';
import { closeModal } from './helpers';
import { renderBetModal } from './renderBetModal';


export const formModals = () => {


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

        if (e.target.closest('.card__button')) {

            renderBetModal(e.target.closest('.popular__card').getAttribute('index'));


            modal = document.querySelector('.bet');
            openModal(modal, 'bet-hidden');
        }
        if (e.target.classList.contains('bet__close')) {
            if (!document.querySelector('.bet').classList.contains('bet-hidden')) {
                modal = document.querySelector('.bet');
                closeModal(modal, 'bet-hidden');
            }
        }



        if (e.target.matches('.footer__feedback>a')) {
            e.preventDefault()
            modal = document.querySelector('.feedback');
            openModal(modal, 'feedback-hidden');
        }

        if (e.target.classList.contains('feedback__close') || !e.target.closest('.feedback__body')) {

            if (document.querySelector('.alert').classList.contains('alert-hidden') && !document.querySelector('.feedback').classList.contains('feedback-hidden')) {
                console.log('1');
                modal = document.querySelector('.feedback');
                closeModal(modal, 'feedback-hidden');
            }
        }

        if (e.target.closest('.alert__button') || !e.target.closest('.alert__body')) {
            if (!document.querySelector('.alert').classList.contains('alert-hidden')) {
                modal = document.querySelector('.alert');
                closeModal(modal, 'alert-hidden');
            }
        }

    })


}