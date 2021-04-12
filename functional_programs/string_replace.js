const prompt = require('prompt-sync')();
let getName = prompt('Enter the name..');
let string = 'Hello <<UserName>>, How are you?';
let newString = string.replace('<<UserName>>', getName);
console.log(newString);
