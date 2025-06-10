/*
 ## Practice Problem 47 ( map(), filter(), find() )

1. You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

2. You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.

3. Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.



prblem provider source : https://drive.google.com/file/d/1XcvIBe_rJlr6GY2rTnHlbIluTABXNhp7/view 

*/


/* ===========================
         Task One:
============================== */

const oddNumbers = [ 1, 3, 5, 7, 9 ] ;
const evenNumbersUsingLoop = [];

/* Using for loop */

for( var i = 0; i < oddNumbers.length; i++){
    const number = oddNumbers[i];
    const evenNumber = number + 1 ;
    evenNumbersUsingLoop.push(evenNumber)
};

console.log(evenNumbersUsingLoop);

/* Using map() */

const evenNumbers = oddNumbers.map( number => number + 1);
console.log(evenNumbers);

/* ===========================
         Task Two:
============================== */

const randomNumbers = [33, 50, 79, 78, 90, 101, 30 ] ;

const numbersDividedBy10 = randomNumbers.filter( number => number % 10 === 0);
console.log(numbersDividedBy10);



/* ===========================
         Task Three:
============================== */

const firstNumberDividedBy10 = randomNumbers.find( number => number % 10 === 0);
console.log(firstNumberDividedBy10);

const compareTask2AndTask3 = `
The result of Task 2 is ${numbersDividedBy10}. (using filter method)
And 
The result of Task 3 is ${firstNumberDividedBy10}. (using find method)
`;

console.log(compareTask2AndTask3);
