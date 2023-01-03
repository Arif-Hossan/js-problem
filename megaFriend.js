// find the largest name from an array

function megaFriend(names) {
    let result = "";
    let arrayLength = names.length;
    for (let i = 0; i < arrayLength; i++) {
        let element = names[i].length;
        if (element > result.length) {
            result = names[i];
        }

    }
    return result;
}

let friends = ["Arif", "Joga", "Peter", "John Snow"];
let biggestName = megaFriend(friends);
console.log(biggestName);