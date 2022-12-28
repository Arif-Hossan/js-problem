let x = 2.2433;
console.log("x= ", Math.floor(x));
console.log("x= ", Math.ceil(x));
console.log("x= ", Math.round(x));

let y = 2.4339;
console.log("x= ", Math.floor(y));
console.log("x= ", Math.ceil(y));
console.log("x= ", Math.round(y));

let z = 2.5433;
console.log("x= ", Math.floor(z));
console.log("x= ", Math.ceil(z));
console.log("x= ", Math.round(z));

//get 6 random number between 0-6

for (let i = 0; i < 6; i++) {
    let dice = Math.random() * 6;
    let output = Math.round(dice);
    console.log(output);
}

// random numbers without repeat
// Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let numbers = [0, 1, 2, 3, 4, 5, 6];
  let shuffledNumbers = shuffle(numbers).slice(0);
  console.log(shuffledNumbers);
