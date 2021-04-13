const prompt = require('prompt-sync')();
let string1 = prompt('Enter the first string : ');
let string2 = prompt('Enter the second string : ');

function analgram (string1, string2) {
    let n1 = string1.length;
    let n2 = string2.length;

    if(n1 != n2){
        console.log("Length are not equal");
    }

    string1 = sortString(string1);
    string2 = sortString(string2);

    if(string1 === string2)
        console.log("Both strings are Analgram");
    else
        console.log("The strings are not analgram");
}

function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
  }

analgram(string1, string2);