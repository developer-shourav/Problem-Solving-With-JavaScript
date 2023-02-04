/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */



function findOddSum(numbers){

    let sum = 0;
    for(let i = 0; i < numbers.length; i++){

        const index = i;
        const number = numbers[i];

        if(number % 2 === 1){
            sum = sum + number;
        }

    }
    return sum;
}


const givenNumbers = [5, 7, 8, 10, 45, 30] ;

const sumOfAllOdds = findOddSum(givenNumbers);
console.log("Total of all Odd number is",sumOfAllOdds);