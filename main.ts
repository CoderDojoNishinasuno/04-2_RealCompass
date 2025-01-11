let 方がく = 0
basic.forever(function () {
    方がく = input.compassHeading()
    if (方がく < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (方がく < 68) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (方がく < 113) {
        basic.showArrow(ArrowNames.West)
    } else if (方がく < 158) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (方がく < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (方がく < 248) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (方がく < 293) {
        basic.showArrow(ArrowNames.East)
    } else if (方がく < 338) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
