makerbit.clearLcd2004()
makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `))
basic.forever(function () {
    makerbit.showStringOnLcd2004("HELLO WORLD", makerbit.position2004(LcdPosition2004.Pos1), 20)
})
