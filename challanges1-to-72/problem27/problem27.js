/* Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
- Has return + Has parameter
- No return + Has parameter */



// Has return+ Has parameter


function odd_even(num){
     if(num % 2 == 0){
        
        return num + " is an even number.";
     }

     else{
        return num + " is an odd number.";
     }
};

var randomNum = odd_even(16);
console.log(randomNum);


// No return + Has parameter

function odd_even(num){
    if( num % 2 == 0){
        console.log(num, " is an Even number.");
    }
    else{
        console.log(num, " is an Odd number.");
    }
}

odd_even(50);

