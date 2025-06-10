/* Write an arrow function where it will do the following:**

1. Square each array element
2. Calculate the sum of the squared elements
3. Return the average of the sum of the squared elements

**Print the result. */



const complexMathOperation = nums => {

   let sumOfAllNumsSqure = 0;

   for(const num of nums){
      
      const squareOfNum = num * num;
      sumOfAllNumsSqure = sumOfAllNumsSqure + squareOfNum ;
   }

const averageOfAllNumsTotal = sumOfAllNumsSqure / nums.length;
return averageOfAllNumsTotal;
}


const numbers = [10, 13, 45, 46];
/* const numbers = [2, 3, 4]; */
const result = complexMathOperation(numbers);
console.log(result.toFixed(2));