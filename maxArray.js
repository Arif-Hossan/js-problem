let marks = [40, 55, 66, 98, 50, 99];
let highestMarks = Math.max(...marks);
console.log(highestMarks);


// using for loop
let max = marks[0];
let marksArrayLength = marks.length;
for (let i = 0; i < marksArrayLength; i++) {
    let element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);

// //find the largest name
let names = ["Joga", "Moga", "Thogas", "Romeooo"];
let nameArrayLength = names.length;
let maxStringNames = "";
for (let j = 0; j < nameArrayLength; j++) {

    let element2 = names[j].length;
    if (element2 > maxStringNames.length) {
        maxStringNames = names[j];
    }
}
console.log(maxStringNames);
