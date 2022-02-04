class Clock {
    constructor(date) {
        this.seconds = date.getSeconds() * 6
        this.#setRotation("seconds")
        this.minutes = date.getMinutes() * 6
        this.#setRotation("minutes")
        this.hours = date.getHours() * 30
        this.#setRotation("hours")
    }
    #setRotation(hand) {
        const element = document.querySelector(`#${hand}`)
        const deg = this[hand]
        element.style.transform = `rotate(${deg}deg)`
    }
    #tick() {
        this.seconds += 6
        this.#setRotation("seconds")
        if (this.seconds % 360 === 0) {
            this.minutes += 6
            this.#setRotation("minutes")
            if (this.minutes % 360 === 0) {
                this.hours += 30
                this.#setRotation("hours")                
            }
        }
    }
    start() {
        setInterval(() => {
            this.#tick()
        }, 1000);
    }
}

const clock = new Clock(new Date())
clock.start()