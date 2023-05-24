/**
 * sensor de ultrasonidos
 * 
 * - añadir extensión "Sonar"
 * 
 * - en la tarjeta de ampliación cambiar la posición de los "jumpers" de 3V3 a 5V
 * 
 * conexión:
 * 
 * echo P1
 * 
 * trig P2
 */
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
/**
 * gonzalo martinez centeno s2c
 */
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
})
