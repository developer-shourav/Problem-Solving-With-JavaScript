/* 
 Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19 */

/* ----------------------------------
      Solution One using for loop:
------------------------------------- */

function calculatePositiveNumbers(arrayOfNumbers){
   
    let total = 0;
    for( let i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > 0){
            total = total + arrayOfNumbers[i];
        }
    }

    return total;
};

console.log(calculatePositiveNumbers([2, -5, 10, -3, 7]));