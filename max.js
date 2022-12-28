let a= 400;
let b=600;
let c= 700;
let result;
if (a>b && a>c){
     result= "a is bigger";
}
else if (b> c){
     result= "b is bigger";
}
else {
     result= "c is bigger";
}
console.log(result);

//using Math.max()
let maximum=Math.max(a,b,c);
console.log(maximum);


// from array
let arr=[4,6,7,3]
let result2= Math.max(...arr);
console.log(result2);

