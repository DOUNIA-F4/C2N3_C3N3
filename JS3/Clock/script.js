setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const hourHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currenDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + getMinutes()) / 60
    const hoursRatio = (minutsesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minutedHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}
setClock()