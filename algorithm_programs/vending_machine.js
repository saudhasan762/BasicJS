let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
let counter = [0,0,0,0,0,0,0,0,0];
function vendingMachine(amount) {
    for( let i = 0; i <= notes.length ;i++){
        if (amount >= notes[i]){
            counter[i] = parseInt(amount/notes[i]);
            amount = amount - counter[i] * notes[i];
        }
    }
    console.log('Notes count: ');
    for (let i = 0; i < notes.length;i++) {
        if(counter[i] != 0)
            console.log(notes[i]+" : "+counter[i]);
        
    }
}

const prompt = require('prompt-sync')();
let amount = prompt('Enter the amount: ');
vendingMachine(amount);