/* 

Write an arrow function where it will do the following:**
1. It will take two array inputs
2. Combine the two arrays and assign them in a new array
3. Find the maximum number from the new array and return the
result

Print the result.


problem getting source : https://drive.google.com/file/d/1Ut8t4Ed8V-U0Axtz4nbIXJhmxvMEMUe9/view

 */

const findTheBiggestNumber = (arr1, arr2) => {
      const combinationOfTowArr = [...arr1, ...arr2];
      const biggestNumberIs = Math.max(...combinationOfTowArr);

      return biggestNumberIs;
};


const numberListOne = [10, 20, 30, 50, 512, 101375];
const numberListTwo = [60, 70, 80, 19, 100, 1375];
const result = findTheBiggestNumber(numberListOne, numberListTwo);
console.log(result);
