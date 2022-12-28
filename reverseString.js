function reverseString(str) {
    let reverse = "";
    let strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

let statement1="Hello,What's up!";
let firstResult=reverseString(statement1);
console.log(firstResult);

let secondResult=reverseString("How are you?");
console.log(secondResult);