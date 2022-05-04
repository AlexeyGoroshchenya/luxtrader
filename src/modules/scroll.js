import { animate } from "./helpers";

export const scroll = () => {

    const btnScrollUp = document.querySelector('.arrow')

    const goTo = (target, direction) => {

        const linkTargetName = target.getAttribute('href').replace('#', '')

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {

                let count = 0;
                if (direction === 'top') {
                    count = target.offsetTop - (target.offsetTop * progress)
                } else { count = document.getElementById(linkTargetName).offsetTop * progress }


                window.scrollTo({
                    top: count,
                })
            }
        });



    }

    document.body.addEventListener('click', (e) => {


        if (e.target.closest('.arrow')) {
            e.preventDefault()
            goTo(btnScrollUp, 'top')
        }

    })
}