basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.pause(5000)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
