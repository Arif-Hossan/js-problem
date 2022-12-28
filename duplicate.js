let numbers = [3, 2, 4, 3, 2, 1];
let uniqueNumbers = [];
let length = numbers.length;

for (i = 0; i < length; i++) {
    let element = numbers[i];
    let index = uniqueNumbers.indexOf(element);
    if (index == -1) {
        uniqueNumbers.push(numbers[i]);
    }

}
console.log(uniqueNumbers);


//Find Unique Names from Array
let names = ["Kalam", "Rahim", "Arif", "Kalam", "Rahim"];
let uniqueNames = [];
let namesArrayLength = names.length;

for (let j = 0; j < namesArrayLength; j++) {
    let element = names[j];
    let indexOfName = uniqueNames.indexOf(element);
    if (indexOfName == -1) {
        uniqueNames.push(names[j]);
    }
}
console.log(uniqueNames);