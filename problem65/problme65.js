/*  : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. */

/* Example Input: "hello world" Example Output: "dlrow olleh" */

/* ----------------------------
      Solution One:
------------------------------- */

function textReverser(text){

    let reverseText = '';

    for(let i = text.length - 1; i >= 0; i--){
        const letter = text[i];
        reverseText = reverseText + letter;
    }
    
    return reverseText;
}

console.log(textReverser("hello world"));


/* ----------------------------
      Solution Two:
------------------------------- */

const stringReverser = text => text.split('').reduce((previous, present) => present +  previous, '' );

console.log(stringReverser("hello world"));