class Clock {
    constructor(date) {
        this.seconds = date.getSeconds() * 6
        this.#setRotation("seconds")
        this.minutes = date.getMinutes() * 6 + date.getSeconds() / 10
        this.#setRotation("minutes")
        this.hours = date.getHours() * 30 + date.getMinutes() / 2
        this.#setRotation("hours")
    }
    #setRotation(hand) {
        const element = document.querySelector(`#${hand}`)
        const deg = this[hand]
        element.style.transform = `rotate(${deg}deg)`
    }
    #tick() { // fix ticking so everything tick every time
        this.seconds += 6
        this.#setRotation("seconds")
        this.minutes += 6/60
        this.#setRotation("minutes")
        this.hours += 30/3600
        this.#setRotation("hours")
    }
    start() {
        setInterval(() => {
            this.#tick()
        }, 1000);
    }
}

const clock = new Clock(new Date())
clock.start()