const prompt = require('prompt-sync')();
let number = prompt('Enter the number ');
let harmonic=0;
for(let i = 1; i <= number;i++){
    harmonic = (harmonic + (1/i));
    console.log(harmonic); 
}