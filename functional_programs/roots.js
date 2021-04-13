const prompt = require('prompt-sync')();
let a = prompt('Enter value for a: ');
let b = prompt('Enter value of b: ');
let c = prompt('Enter value of c: ');

function roots(a, b, c){
let delta = b * b - 4 * a * c;
    if (delta > 0){
        root1 = (-b + Math.sqrt(delta)) / (2*a);
        root2 = (-b - Math.sqrt(delta)) / (2*a);
        console.log("Roots are: "+root1+", "+root2);
    } else if (delta == 0){
        root1 = root2 = -b / (2*a);
        console.log("Roots are: "+root1+", "+root2);
    }else
        console.log("Roots are not real");
}

roots(a, b, c);