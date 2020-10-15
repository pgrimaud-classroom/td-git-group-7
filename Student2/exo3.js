// TD ALGO 3

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function condition() {
    var x = getRandomInt(5)
    if (x === 1)
        console.log('hello');

    else if (x === 2)
        console.log('Salut');
    else
        console.log('yo');
}

condition()
condition()
condition()

