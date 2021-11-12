input.onButtonPressed(Button.A, function () {
    time = 0
    row = randint(0, 4)
    time = 0
    col = randint(0, 4)
    led.unplot(col, row)
    led.plot(col, row)
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    time = 0
    led.setBrightness(255)
})
let col = 0
let row = 0
let time = 0
time = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    time += 1
    basic.pause(1000)
})
basic.forever(function () {
    if (time == 20) {
        led.setBrightness(88)
    } else if (time == 30) {
        led.setBrightness(0)
    }
})
