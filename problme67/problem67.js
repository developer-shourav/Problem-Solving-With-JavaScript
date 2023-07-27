/* Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 */

const findMostFrequent = arrayOfNums => {
    const frequency = {};
    arrayOfNums.map(element => frequency[element] = frequency[element] + 1 || 1);
 
    const allNumbers = Object.keys(frequency);
    const NumbersRepetition  = Object.values(frequency);
    const maxFrequentValue = Math.max(...NumbersRepetition);
    const maxFrequentsIndex = NumbersRepetition.findIndex ( x => x === maxFrequentValue);
 
    const mostFrequentElement = allNumbers[maxFrequentsIndex];
    return mostFrequentElement;
 }
 
 
 console.log(findMostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));