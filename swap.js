//Using temporary variable
let a = 5;
let b = 7;
let temp = a;//temp=7
a = b;//a=7
b = temp;//b-5;
console.log("a = ", a);
console.log("b = ", b);

// Another Way
let x = 10;
let y = 8;
x=x+y;//x=18
y=x-y;//y=18-8=10
x=x-y;//18-10
console.log("x = ", x);
console.log("y = ", y);

//Destructuring Assignment
let p =6;
let q= 3;

[p,q]=[q,p];

console.log(`p= ${p}`);
console.log(`q= ${q}`);


