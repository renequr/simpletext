enum RadioMessage {
    message1 = 49434
}
/**
 * SYSTEM ESSENTIALS
 */
/**
 * SYSTEM START SEQUENCE
 */
/**
 * SYSTEM DATA RECIEVER
 */
/**
 * SYSTEM FUNTIONS
 */
/**
 * SYSTEM FREQUENCY CHANGER
 */
/**
 * LETTER SELECTOR
 */
/**
 * SYSTEM MESSAGE SENDER
 */
/**
 * DO NOT DISTURB SYSTEM
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (dndSYS == 1) {
        dndSYS = 0
        basic.setLedColors(0x000000, 0x00ff00, 0x000000)
    } else {
        dndSYS = 1
        basic.setLedColors(0x000000, 0xff0000, 0x000000)
    }
})
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    TimeVAR = 1
    SysFRQ += -1
    radio.setGroup(SysFRQ)
    while (TimeVAR == 1) {
        basic.showNumber(SysFRQ)
        basic.pause(498)
        TimeVAR = 0
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    msgSNT = "" + msgSNT + "ABCDEFGHIJKLMNOPQRSTUVWXYX ".charAt(selLET)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString(msgSNT)
    msgSNT = ""
})
radio.onReceivedString(function (receivedString) {
    if (dndSYS == 0) {
        basic.setLedColors(0x0000ff, 0x00ff00, 0x000000)
        basic.showString(receivedString)
        basic.pause(1000)
        basic.setLedColors(0x000000, 0x00ff00, 0x000000)
    } else {
        basic.setLedColors(0x0000ff, 0xff0000, 0x000000)
        basic.pause(2000)
        basic.setLedColors(0x000000, 0xff0000, 0x000000)
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    selLET += -1
    if (selLET < 0) {
        selLET = 0
    }
    TimeVAR = 1
    while (TimeVAR == 1) {
        basic.showString("ABCDEFGHIJKLMNOPQRSTUVWXYX ".charAt(selLET))
        TimeVAR = 0
    }
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    TimeVAR = 1
    SysFRQ += 1
    radio.setGroup(SysFRQ)
    while (TimeVAR == 1) {
        basic.showNumber(SysFRQ)
        basic.pause(498)
        TimeVAR = 0
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    selLET += 1
    if (selLET > 27) {
        selLET = 27
    }
    TimeVAR = 1
    while (TimeVAR == 1) {
        basic.showString("ABCDEFGHIJKLMNOPQRSTUVWXYX".charAt(selLET))
        TimeVAR = 0
    }
})
/**
 */
let selLET = 0
let msgSNT = ""
let SysFRQ = 0
let TimeVAR = 0
let dndSYS = 0
basic.showLeds(`
    # # # # #
    # . . # .
    # # . # .
    . # . # .
    # # . # .
    `)
basic.setLedColors(0x000000, 0x00ff00, 0x000000)
basic.pause(1000)
basic.showLeds(`
    . # # . .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
