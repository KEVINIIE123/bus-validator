input.onButtonPressed(Button.A, function () {
    if (zone == 1) {
        zone = 1
    } else {
        zone += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (zone == 5) {
        zone = 5
    } else {
        zone += 1
    }
})
let zone = 0
makerbit.connectLcd(39)
zone = 1
makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
    . # . . #
    . . . . .
    . # # # .
    . . . . #
    . # # # #
    # . . . #
    . # # # #
    . . . . .
    `))
led.enable(false)
pins.digitalWritePin(DigitalPin.P3, 1)
pins.digitalWritePin(DigitalPin.P4, 1)
pins.digitalWritePin(DigitalPin.P6, 1)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P4, 908)
    if (zone == 1) {
        makerbit.showStringOnLcd1602("1. tsoon", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("N", makerbit.position1602(LcdPosition1602.Pos18), 1, TextOption.AlignCenter)
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos19))
        makerbit.showStringOnLcd1602("ita kaarti!", makerbit.position1602(LcdPosition1602.Pos20), 13, TextOption.AlignLeft)
    } else if (zone == 2) {
        makerbit.showStringOnLcd1602("2. tsoon", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("N", makerbit.position1602(LcdPosition1602.Pos18), 1, TextOption.AlignCenter)
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos19))
        makerbit.showStringOnLcd1602("ita kaarti!", makerbit.position1602(LcdPosition1602.Pos20), 13, TextOption.AlignLeft)
    } else if (zone == 3) {
        makerbit.showStringOnLcd1602("3. tsoon", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("N", makerbit.position1602(LcdPosition1602.Pos18), 1, TextOption.AlignCenter)
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos19))
        makerbit.showStringOnLcd1602("ita kaarti!", makerbit.position1602(LcdPosition1602.Pos20), 13, TextOption.AlignLeft)
    } else if (zone == 4) {
        makerbit.showStringOnLcd1602("4A. tsoon", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("N", makerbit.position1602(LcdPosition1602.Pos18), 1, TextOption.AlignCenter)
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos19))
        makerbit.showStringOnLcd1602("ita kaarti!", makerbit.position1602(LcdPosition1602.Pos20), 13, TextOption.AlignLeft)
    } else if (zone == 5) {
        makerbit.showStringOnLcd1602("4B. tsoon", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("N", makerbit.position1602(LcdPosition1602.Pos18), 1, TextOption.AlignCenter)
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos19))
        makerbit.showStringOnLcd1602("ita kaarti!", makerbit.position1602(LcdPosition1602.Pos20), 13, TextOption.AlignLeft)
    } else {
        makerbit.showStringOnLcd1602("?. tsoon", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("N", makerbit.position1602(LcdPosition1602.Pos18), 1, TextOption.AlignCenter)
        makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos19))
        makerbit.showStringOnLcd1602("ita kaarti!", makerbit.position1602(LcdPosition1602.Pos20), 13, TextOption.AlignLeft)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P4, 0)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        makerbit.clearLcd1602()
        basic.pause(100)
        makerbit.showStringOnLcd1602("Kaart", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("Valideeritud!", makerbit.position1602(LcdPosition1602.Pos17), 16, TextOption.AlignCenter)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P4, 1)
        pins.digitalWritePin(DigitalPin.P6, 0)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
        makerbit.clearLcd1602()
        basic.pause(100)
        makerbit.showStringOnLcd1602("Valideerimine", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignCenter)
        makerbit.showStringOnLcd1602("Ebaonnestus!", makerbit.position1602(LcdPosition1602.Pos17), 16, TextOption.AlignCenter)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P6, 1)
    }
})
