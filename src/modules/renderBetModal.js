import { db } from './database';
import { timer } from './timer';


export const renderBetModal = (index) => {


	const item = db[index];
	const betModal = document.querySelector('.bet__card');

	betModal.innerHTML = `
    <div class="bet__galery">
						<a href="#" class="bet__image">
							<img src="${item.image}" alt="">
						</a>
						<div class="bet__timer timer-box">
							До окончания: <span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>
						</div>
						<div class="bet__statistic">
							<div class="bet__views">Просмотров: <span> ${item.view}</span></div>
							<div class="bet__numbers">Ставок: <span>${item.betting}</span></div>
						</div>
						<div class="bet__current">
							Текущая ставка: <span> ${item.current}</span> ք
						</div>

					</div>

					<div class="bet__description">
					<div class="bet__name">${item.name}</div>
						<div class="bet__text">${item.description}</div>


						<div class="bet__row">
							<label for="formBet">Ваша ставка:</label>
							<input id="formBet" type="text" name="bet" class="bet__input form-item">
						</div>

						<button type="submit" class="bet__button button"> <span> Сделать ставку </span></button>
					</div>

    `
	timer(item.deadline, betModal)
	betModal.setAttribute('index', index)




}