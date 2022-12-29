
function animalCount(depth){
    let animal=0;
    if(depth<=10){
        animal=depth*50;
    }
    else if (depth<=20){
        let firstPart=10*50;
        let remaining=(depth-10);
        animal=firstPart+(remaining*100);
    }
    else {
        let firstPart=10*50;
        let secondPart=10*100;
        let remaining=depth-20;
        animal=firstPart+secondPart+(remaining*300)
    }
    return animal;
}
let result=animalCount(7);
console.log(result);
