/* 
Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
 */


const findSecondSmallest = arr => {
    const sortedNum = arr.sort((a, b) => a - b);
    const secondSmallest = sortedNum[1];
    return secondSmallest;
  }
   
  const result = findSecondSmallest([1, 3, 2, 5, 4]);
  console.log(result);