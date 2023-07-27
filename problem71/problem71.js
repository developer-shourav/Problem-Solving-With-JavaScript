/* 

Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

 */

function romanToIntNum(romanNum) {
    let numInt = 0;
    const romValues = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};

    for(let i = 0; i < romanNum.length; i++){

        if(romValues[romanNum[i]] < romValues[romanNum[i+1]]){
            numInt -= romValues[romanNum[i]];
        }
        else{
            numInt += romValues[romanNum[i]]
        }
    }
    return numInt;
}

console.log(romanToIntNum("CXM"));
console.log(romanToIntNum("XX"));
console.log(romanToIntNum("VI"));