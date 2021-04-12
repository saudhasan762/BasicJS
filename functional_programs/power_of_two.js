const prompt = require('prompt-sync')();
let number = prompt('Enter the number ');
for(let i = 1; i <=number; i++){
    let power = Math.pow(2, i);
    console.log(power);
}