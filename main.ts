basic.forever(function () {
    if (input.compassHeading() >= 270 && input.compassHeading() <= 360) {
        basic.showString("Bus")
        basic.showLeds(`
            . . . . .
            # # # # .
            # . . . #
            # # # # #
            . # . # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            # # # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            . . . . #
            . # # # #
            . . . . #
            . . . # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # # #
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
