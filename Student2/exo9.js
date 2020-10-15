// TD ALGO 9

function Arbre(number) {

    for (var y = 1; y <= 2 * number; y++) {
        var x = 'a'
        var s = ''
        for (var i = 1; i <= y; i++) {
            s += x
        }
        console.log(s)

    }
}


Arbre(5)

