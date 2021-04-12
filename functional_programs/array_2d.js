let arrayInt = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arrayDouble = [[0.112, 0.452, 0.553], [0.24, 0.85, 0.60]];
let arrayString = [['Mark', 'taylor', '123654'], ['Michael','John','789654']];
function arrayOfInt(){
    for (let index = 0; index < arrayInt.length; index++) {
        const element = arrayInt[index];
        for (let j = 0; j < element.length; j++) {
            const ele = element[j];
            console.log("Value of index "+index+j+" is "+ele);
        }
    }
}
function arrayOfDouble(){
    for (let index = 0; index < arrayDouble.length; index++) {
        const element = arrayDouble[index];
        for (let j = 0; j < element.length; j++) {
            const ele = element[j];
            console.log("Value of index "+index+j+" is "+ele);
        }
    }
}
function arrayOfString(){
    for (let index = 0; index < arrayString.length; index++) {
        const element = arrayString[index];
        for (let j = 0; j < element.length; j++) {
            const ele = element[j];
            console.log("Value of index "+index+j+" is "+ele);
        }
    }
}
arrayOfInt();
arrayOfDouble();
arrayOfString();
