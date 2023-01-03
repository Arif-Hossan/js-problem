function budgetCalculator(nWatch,nMobile,nComputer){
    let result;
    if(nWatch<0 || nMobile<0 ||nComputer<0){
        result ="Please enter a positive number";
    }
    else {
        result = (nWatch*50)+(nMobile*100)+(nComputer*500);
    }
    return result;
}

let first=budgetCalculator(10,1,2);
console.log(first);