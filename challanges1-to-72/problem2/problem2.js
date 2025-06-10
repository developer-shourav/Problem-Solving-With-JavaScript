

var mathematicsResult = 75.25;
var biologyResult = 65;
var chemistryResult = 80;
var physicsResult = 35.45;
var banglaResult = 99.50;

var totalMarks = mathematicsResult + biologyResult + chemistryResult + physicsResult + banglaResult;


var averageMarks = totalMarks / 5 ;
var averageMarksIn2Deci = averageMarks.toFixed(2);
console.log(parseFloat(averageMarksIn2Deci));

