/* 

You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using `for loop` &
`array.reduce()` method.

problem provider : https://drive.google.com/file/d/1XcvIBe_rJlr6GY2rTnHlbIluTABXNhp7/view

*/

/* ============================
         Using for loop
=============================== */

const numbers = [ 1, 9, 17, 22 ];
let total = 0 ;

/* -------Using Normal for loop---------*/

for(var i = 0; i < numbers.length; i++){
    const number = numbers[i];
    total = total + number;
}

console.log(total);

/* -------Using  for of loop---------*/

let total2 = 0 ;
for( const number of numbers){
    total2 = total2 + number;
}

console.log(total2);