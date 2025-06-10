/* Calculate the interest. Just how to calculate. 
Will do with that thought. Now there is no need to worry whether interest is good or bad. 
Just try to do it from the angle of how to write it in code if there is a formula. */



function calculateInterest(capital, rate){
    const interest = capital / 100 * rate ;
    const massage = "Your Capital is " + capital + " . And rate of Interest is "+ rate + ". So your total yearly profit / Interest is " + interest.toFixed(2) ;
    return massage;
};




const clintsCapital = 7410;
const rateOfInterest = 3;

const profit = calculateInterest(clintsCapital, rateOfInterest);
console.log(profit);