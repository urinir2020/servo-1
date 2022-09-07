basic.showIcon(IconNames.Happy)
for (let index = 0; index < 4; index++) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    255
    )
    basic.pause(3000)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    -255
    )
    basic.pause(650)
}
SuperBit.MotorStopAll()
