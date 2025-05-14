input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        1770,
        851,
        255,
        0,
        2047,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        basic.showString("Paper!")
        basic.pause(50)
        basic.clearScreen()
        basic.pause(1)
        hand = 0
    } else {
        if (hand == 2) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            music.playSoundEffect(music.createSoundEffect(
            WaveShape.Sine,
            1770,
            851,
            255,
            0,
            2047,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), SoundExpressionPlayMode.UntilDone)
            basic.pause(100)
            basic.showString("Scissors!")
            basic.pause(20)
            basic.clearScreen()
            hand = 0
        } else {
            if (hand == 3) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . # # # .
                    `)
                music.playSoundEffect(music.createSoundEffect(
                WaveShape.Sine,
                1770,
                851,
                255,
                0,
                2047,
                SoundExpressionEffect.None,
                InterpolationCurve.Linear
                ), SoundExpressionPlayMode.UntilDone)
                basic.pause(100)
                basic.showString("Rock!")
                basic.pause(20)
                basic.clearScreen()
                basic.pause(1)
                hand = 0
            }
        }
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    PlayerChosePaper += 1
})
input.onButtonPressed(Button.B, function () {
    PlayerChoseRock += 1
})
input.onGesture(Gesture.Shake, function () {
    PlayerChoseScissors += 1
})
let hand = 0
let PlayerChosePaper = 0
let PlayerChoseRock = 0
let PlayerChoseScissors = 0
basic.forever(function () {
    if (PlayerChosePaper == 1 && hand == 1) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Tie!")
        basic.clearScreen()
        basic.pause(1)
        PlayerChosePaper = 0
    } else {
        if (PlayerChosePaper == 1 && hand == 2) {
            basic.pause(1000)
            basic.pause(100)
            basic.showString("Iwin!")
            basic.pause(100)
            basic.clearScreen()
            basic.pause(1)
            PlayerChosePaper = 0
        }
    }
    if (PlayerChosePaper == 1 && hand == 3) {
        basic.pause(1000)
        basic.pause(100)
        basic.showString("Youwon!")
        basic.pause(1)
        PlayerChosePaper = 0
        basic.pause(1)
        basic.clearScreen()
    }
    if (PlayerChoseRock == 1 && hand == 1) {
        basic.pause(1000)
        basic.pause(100)
        basic.showString("Iwin!")
        basic.pause(50)
        basic.clearScreen()
        basic.pause(1)
        PlayerChoseRock = 0
    }
    if (PlayerChoseRock == 1 && hand == 2) {
        basic.pause(1000)
        basic.pause(100)
        basic.showString("Youwon!")
        basic.clearScreen()
        basic.pause(1)
        PlayerChoseRock = 0
    }
    if (PlayerChoseRock == 1 && hand == 3) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Tie!")
        basic.pause(50)
        basic.clearScreen()
        basic.pause(1)
        PlayerChoseRock = 0
    }
    if (PlayerChoseScissors == 1 && hand == 1) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Youwon!")
        basic.pause(50)
        basic.clearScreen()
        basic.pause(1)
        PlayerChoseScissors = 0
    }
    if (PlayerChoseScissors == 1 && hand == 2) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Tie!")
        basic.pause(50)
        basic.clearScreen()
        basic.pause(1)
        PlayerChoseScissors = 0
    }
    if (PlayerChoseScissors == 1 && hand == 3) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(100)
        basic.showString("Iwin!")
        basic.pause(50)
        basic.clearScreen()
        basic.pause(1)
        PlayerChoseScissors = 0
    }
})
