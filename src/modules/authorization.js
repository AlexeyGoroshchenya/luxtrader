import { blockBody } from './helpers';
import { unblockBody } from './helpers';


export const authorization = () => {

    const authMenu = document.querySelector('.authorization');
    const authBtn = document.querySelector('.join__button');

    authBtn.addEventListener('click', () => {

        if (authMenu) {
            authMenu.style.display = 'flex';
            blockBody();
            setTimeout(() => {
                authMenu.classList.remove('authorization-hidden');
            }, 300)
        }
    })

    authMenu.addEventListener('click', (e) => {

        if (e.target.classList.contains('authorization__close') || !e.target.closest('.authorization__body')) {
            unblockBody();
            authMenu.classList.add('authorization-hidden');
            setTimeout(() => {
                authMenu.style.display = 'none';
            }, 300)
        }
    })


}