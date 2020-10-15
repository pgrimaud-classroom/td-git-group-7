// TD ALGO 7

function sommeFor() {
    var x = 0
    for (y = 0; y <= 100; y++) {
        x += y
    }
    console.log(x);
}

function sommeWhile() {
    var x = 0
    var y = 1
    while (y <= 100) {
        x += y
        y++
    }
    console.log(x);
}

sommeFor()
sommeWhile()
