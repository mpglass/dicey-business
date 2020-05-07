let diceArray = []



class Dice {
    constructor() {
        this.value = Math.floor((Math.random() * 6) + 1)
        this.div = $(`<div class="dice">${this.value}</div>`)
        $('.container').append(this.div)
        diceArray.push(this)
        
        
        this.div.click(() => {
            this.value = Math.floor((Math.random() * 6) + 1);
            this.div.text(this.value);
        })
        this.div.dblclick(() => {
            this.div.remove();
               let i = diceArray.indexOf(this);
                diceArray.splice(i, 1);
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
   
    let sum = 0
    diceArray.forEach((die) => {
         sum += die.value;
        })
console.log(sum);
    })




