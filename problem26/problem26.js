/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */



function make_avg(props1, props2){
    var totalNumber = props1[0] +  props1[1] +  props1[2] +  props1[3] +  props1[4];
    var avgNumber = totalNumber / props2;
    return avgNumber;
};


var numbers = [10, 20, 30, 40, 50];

var numbers = make_avg(numbers, numbers.length);

console.log(numbers);

