let comment= "Give me a glass   of water, please."
let count=0;
let lengthOfComment=comment.length;

for ( let i= 0; i<lengthOfComment;i++){
    let element= comment[i];
    if( element==" " & comment[i-1]!=" "){
        count++;
    }
}
count++;
console.log(count);