function kilometerToMeter(km) {
    let result;
    if (km < 0) {
         result = "Please, enter a positive number";
    }
    else {
         result = km * 1000;
    }
    return result;
}
let first= kilometerToMeter(10);
console.log(first);
let second= kilometerToMeter(-10);
console.log(second);