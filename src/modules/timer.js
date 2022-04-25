export const timer = (deadline) => {

    const timerDays = document.querySelectorAll('.card__timer__body>span')[0];
    const timerHours = document.querySelectorAll('.card__timer__body>span')[1];
    const timerMinutes = document.querySelectorAll('.card__timer__body>span')[2];
    const timerSeconds = document.querySelectorAll('.card__timer__body>span')[3];

    const getTimerRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();

        let timeRemaning = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaning % 60);
        let minutes = Math.floor((timeRemaning / 60) % 60);
        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);
        let days = Math.floor(((timeRemaning / 60) / 60) / 24);

        return { timeRemaning, days, hours, minutes, seconds }
    }

    const addZero = (number) => {
        return number < 10 ? `0${number}` : number;
    }

    const updateClock = () => {
        let getTime = getTimerRemaining();

        if (getTime.timeRemaning > 0) {

            timerHours.textContent = addZero(getTime.hours)
            timerMinutes.textContent = addZero(getTime.minutes)
            timerSeconds.textContent = addZero(getTime.seconds)
            timerDays.textContent = addZero(getTime.days)
        }
    }

    if (getTimerRemaining().timeRemaning > 0) {
        updateClock();
        setInterval(updateClock, 1000, deadline)
    } else {
        timerHours.textContent = '00'
        timerMinutes.textContent = '00'
        timerSeconds.textContent = '00'
        timerDays.textContent = '00'
    }

}