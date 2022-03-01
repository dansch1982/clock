const face = document.querySelector('.face')
for (let i = 0; i < 60; i++) {
    const article = document.createElement('article')
    const span = document.createElement('span')
    span.textContent = i % 5 === 0 ? "°" : "'"
    article.appendChild(span)
    face.appendChild(article)

}

const numbers = document.querySelector('.numbers')
for (let i = 0; i < 12; i++) {
    const article = document.createElement('article')
    const span = document.createElement('span')
    span.textContent = i === 0 ? 12 : i
    article.appendChild(span)
    numbers.appendChild(article)
}

class Clock {
    constructor(date) {
        this.date = date;
        this.offset = this.date - new Date()
        this.secondsElement = document.querySelector(`.seconds`)
        this.minutesElement = document.querySelector(`.minutes`)
        this.hoursElement = document.querySelector(`.hours`)

        this.seconds = (this.date.getSeconds() * (360 / 60));
        this.minutes = (this.date.getMinutes() * (360 / 60)) + (this.date.getSeconds() / 10);
        this.hours = (this.date.getHours() * (360 / 12)) + (this.date.getMinutes() * (360/12/60));

        this.#updateHands();

    };
    #updateHands() {
        this.secondsElement.style.transform = `rotate(${this.seconds}deg)`
        this.minutesElement.style.transform = `rotate(${this.minutes}deg)`
        this.hoursElement.style.transform = `rotate(${this.hours}deg)`
    }
    #tick() {
        const difference = new Date() - this.date;
        const seconds = Math.floor((difference + this.offset) / 1000) + this.date.getSeconds();
        const minutes = seconds / 60 + this.date.getMinutes()
        this.seconds =  seconds * 6;
        this.minutes =  minutes * 6
        this.hours = (this.date.getHours() * (360 / 12)) + (minutes / 2)
        this.#updateHands();
    };
    start() {
        this.interval = setInterval(() => {
            this.#tick();
        }, 1000);
    };
    stop() {
        clearInterval(this.interval);
    };
}
const date = new Date();
/* date.setSeconds(0) */
date.setMinutes(date.getMinutes() + 30)
date.setHours(date.getHours() - 2)
const clock = new Clock(date)
clock.start();