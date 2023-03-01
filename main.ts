let choice = 0
input.onButtonPressed(Button.A, function () {
    choice += 1
    if (choice == 1) {
        basic.showString("C")
    } else if (choice == 2) {
        basic.showString("F")
    } else if (choice == 3) {
        basic.showString("K")
    } else {
        choice = 0
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
