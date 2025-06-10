/* 

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

1. Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

problem provider : https://drive.google.com/file/d/1XcvIBe_rJlr6GY2rTnHlbIluTABXNhp7/view

 */

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

/* ===================================
      First task (using for loop)
======================================*/
let sumOfAge = 0 ;
for( let i = 0; i < people.length; i++){
    const age = people[i].age;
    sumOfAge = sumOfAge + age ;
};

console.log(sumOfAge);

/* ================================================
             Final task using for reduce()
===================================================*/
const allAges = people.map(x => x.age);
const ageTotal = allAges.reduce((previoustotal, presentValue) => previoustotal + presentValue,0);


console.log(ageTotal);