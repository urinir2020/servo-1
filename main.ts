input.onButtonPressed(Button.A, function () {
    SuperBit.Servo(SuperBit.enServo.S1, 90)
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.Servo(SuperBit.enServo.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo(SuperBit.enServo.S1, 45)
})
basic.showIcon(IconNames.Happy)
SuperBit.Servo(SuperBit.enServo.S1, 0)
