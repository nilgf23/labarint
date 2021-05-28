basic.forever(function () {
    basic.showString("NIL")
})
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 1.6 && cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 7) {
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.3)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 1.6 && cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 8) {
            cuteBot.moveTime(cuteBot.Direction.right, 50, 0.6)
        }
    } else {
        cuteBot.motors(78, 80)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    }
})
