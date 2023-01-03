function hotelCost(days) {
    let firs10DaysCost;
    let second10DaysCost;
    let remainingDays;
    let totalCost = 0;
    if (days <= 0) {
        return "Please enter a posive number";
    }
    else if (days < 10) {
        totalCost = days * 100;
    }
    else if (days < 20) {
        firs10DaysCost = 10 * 100;
        remainingDays = (days - 10);
        totalCost = firs10DaysCost + (remainingDays * 80);
    }
    else {
        firs10DaysCost = 10 * 100;
        second10DaysCost = 10 * 80;
        remainingDays = days - 20;
        totalCost =firs10DaysCost+second10DaysCost+(remainingDays*50);
    }
    return totalCost;
}

let result=hotelCost(25);
console.log(result);