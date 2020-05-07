let diceArray = []
let numArray = []


class Dice {
    constructor() {
        this.value = Math.floor((Math.random() * 6) + 1)
        this.div = $(`<div class="dice">${this.value}</div>`)
        $('.container').append(this.div)
        diceArray.push(this)
        numArray.push(this.value)
        console.log(numArray)
        this.div.click(() => {
            this.value = Math.floor((Math.random() * 6) + 1);
            this.div.text(this.value);
        })
        this.div.dblclick(() => {
            console.log('TWICE!')
        })
        
    }
    reRoll() {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.value);
    };

};

function sum(a, b) {
    return a + b;
}

$('#diceBtn').click(function () {
    new Dice();
})


$('#rollBtn').click(function () {
    diceArray.forEach((die) => {
        die.reRoll();
    })
})

$('#sumBtn').click(function () {
    console.log(numArray.reduce(sum));
})




