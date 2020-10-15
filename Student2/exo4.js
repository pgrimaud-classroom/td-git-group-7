// TD ALGO 4

var note = getRandomInt(20)

function conditionMulti() {

    if (note <= 10)
        console.log('Bof');
    else if (note > 10 && note <= 12)
        console.log('Passable');
    else if (note === 2)
        console.log('Assez-bien');
    else if (note === 2)
        console.log('Bien');
    else
        console.log('Trés-bien');
}
conditionMulti()
