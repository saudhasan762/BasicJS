const prompt = require('prompt-sync')();
const x = prompt('Enter the x co-ordinate: ');
const y = prompt('Enter the y co-ordinate: ');
function calcDistance (x, y) {
    let distance = Math.sqrt(x*x + y*y );
    console.log("Distance is : "+distance);
}

calcDistance(x,y);