// TD ALGO 6


function Ternaire2(impot) {
    return (impot < 1000 ? console.log('tu payes 10%: ', impot * 0.1) : console.log('tu payes 25%: ', impot * 0.25))
}
Ternaire2(10000)
Ternaire2(100)

