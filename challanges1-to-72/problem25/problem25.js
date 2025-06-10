/* Write a function called make_avg() which will take an three integers and return the average of those values.
 */


function make_avg(num1, num2, num3){
   var totalNumbers = num1 + num2 + num3 ;
   var avgNumber = totalNumbers / 3 ;
   return avgNumber;
}

var average = make_avg(60, 60, 59);
console.log(parseFloat(average.toFixed(2)));