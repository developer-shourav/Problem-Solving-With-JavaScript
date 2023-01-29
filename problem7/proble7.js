/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.



[View problem source 📤](https://drive.google.com/file/d/1bfxye7A1p-BBJCQCXaiUetl_qyS2Vc1E/view) */

var fruits = ['Apple', 'Banana', 'Orange'];


// Part (a) 1.index of ‘Banana’
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

// Part (a) 2. replace ‘Banana’ with ‘Mango’.

fruits[1]='Mango';
console.log(fruits);

// Part (b) 1. Removing ‘Orange’

fruits.pop()
console.log( fruits);

// Part (b) 2. Adding ‘Watermelon’

fruits.push("Watermelon");
console.log(fruits);