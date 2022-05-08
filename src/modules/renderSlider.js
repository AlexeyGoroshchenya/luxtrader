import { db } from './database';
import { timer } from './timer';

export const renderSlider = () => {
    console.log(db);
    const sliderBody = document.querySelector('.popular__wrapper')
    console.log(document.querySelectorAll('.popular__card'));



    const getDeadline = () => {

    }

    const renderCard = (item, index) => {

        const galeryCard = document.createElement('div');
        galeryCard.classList.add('popular__card', 'card', 'swiper-slide')
        galeryCard.setAttribute('deadline', item.deadline)
        galeryCard.innerHTML = `
        <div class="popular__card card swiper-slide">

								<div class="card__body">
									<a href="#" class="card__image">
										<img src="${item.image}" alt="">
										<div class="card__timer">
											<div class="card__timer__body"> <img src="img/popular/rectangle_16_3283.png"
													alt="">
												<br>
												<div class="card__timer__box"><span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>
												</div>
											</div>
										</div>
									</a>

									<a href="" class="card__title">${item.name}
									</a>
									<div class="card__bid">
										<div class="card__view"><span><img src="img/popular/eye.png" alt=""></span>
											<p> ${item.view}</p>
										</div>
										<div class="card__current">
											<div class="card__current__body">
												<p>Текущая ставка</p>
												<span>${item.current}</span>
												<p>ք</p>
											</div>
										</div>
										<div class="card__betting"><span><img src="img/popular/palm.png" alt=""></span>
											<p>${item.betting}</p>
										</div>
									</div>
									<div class="card__button">
										<div class="card__button__body button"><span>Поднять ставку</span></div>
									</div>
								</div>

							</div>
        `;
        sliderBody.append(galeryCard);
        timer(item.deadline, galeryCard)
    }

    const init = () => {
        sliderBody.innerHTML = '';

        db.forEach((item) => {
            renderCard(item)
        })

    }

    init()

}