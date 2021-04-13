const prompt = require('prompt-sync')();
let number = prompt('Enter the number of times to flip');

for( let i = 1; i <= number ; i++) {
    let random = Math.random();
    if(random < 0.5){
        console.log("Flip number "+i+" Tail");
    }else{
        console.log("Flip number "+i+" Head");
    }
}