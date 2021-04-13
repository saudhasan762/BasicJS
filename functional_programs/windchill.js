const prompt = require('prompt-sync')();
let t = prompt('Enter value for t');
let v = prompt('Enter value for v');

function windChill(t, v){
    if(t < 50 && v>3 && v<120 ){
    let w = 35.75 + 0.6215*t + (0.4275*t - 25.75)*Math.pow(v, 0.16);
    console.log("Value of wind chill : "+w);
    } else
        console.log("The formula is not valid");
}
windChill(t, v);
