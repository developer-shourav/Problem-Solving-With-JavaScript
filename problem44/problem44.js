/* ## Practice Problem 44

1. Write an arrow function that will take **3** parameters, will multiply
the parameters and will return the result.

2. Write the following sentence in **three lines** and print the result:
**I am a web developer. I love to code. I love to eat biryani.**

3. Write an arrow function that will take **2** parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.



problem source: https://drive.google.com/file/d/1Ut8t4Ed8V-U0Axtz4nbIXJhmxvMEMUe9/view?usp=sharing */




/* Task One: */

const multiplier = ( num1, num2, num3) => num1 * num2 * num3 ;


const resultOfThreeParamsMultiply = multiplier(10, 20, 30);
console.log(resultOfThreeParamsMultiply);



/* Task Two: */

const aboutDeveloper = `I am a web developer. 
I love to code. 
I love to eat biryani.`;

console.log(aboutDeveloper);


/* Task Three: */

const sum = (a, b = 375) => a + b ;

const totalOf = sum(1000);
console.log(totalOf);

