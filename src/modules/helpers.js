export const animate = ({ timing, draw, duration }) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

export const blockBody = () => {
    function calcScroll() {
        let scrollWidth = 0;
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        if (scrollHeight > document.documentElement.clientHeight) {
            let div = document.createElement('div');
            div.style.width = '100px';
            div.style.height = '100px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = (div.offsetWidth - div.clientWidth);
            div.remove();
        }
        return scrollWidth;
    }

    document.body.style.paddingRight = `${calcScroll()}px`;
    document.body.style.overflow = 'hidden'
    console.log(document.body.style.paddingRight);

}

export const unblockBody = () => {
    document.body.style.paddingRight = '0';
    document.body.style.overflow = 'auto';

}

export const openModal = (elem, className) => {
    if (elem) {
        elem.style.display = 'flex';
        blockBody();

        setTimeout(() => {
            elem.classList.remove(className);
        }, 300)
    }
}

export const closeModal = (elem, className) => {
    if (elem) {
        unblockBody();

        elem.classList.add(className);
        setTimeout(() => {
            elem.style.display = 'none';
        }, 300)
    }
}

const emailTest = (input) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}

const nameTest = (input) => {
    return input.value.match(/[^а-яА-яa-zA-Z\s]/) || input.value.length < 1
}

