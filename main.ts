basic.showIcon(IconNames.Happy)
let Servo = 0
SuperBit.Servo(SuperBit.enServo.S1, Servo)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Servo += 1
        SuperBit.Servo(SuperBit.enServo.S1, Servo)
    } else if (input.buttonIsPressed(Button.B)) {
        Servo += -1
        SuperBit.Servo(SuperBit.enServo.S1, Servo)
    } else if (input.buttonIsPressed(Button.AB)) {
        Servo = 0
        SuperBit.Servo(SuperBit.enServo.S1, Servo)
    }
})
