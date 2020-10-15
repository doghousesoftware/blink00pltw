basic.forever(function () {
    if (input.compassHeading() >= 260 && input.compassHeading() <= 300) {
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
        images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `).scrollImage(-1, 500)
        basic.clearScreen()
    }
})
