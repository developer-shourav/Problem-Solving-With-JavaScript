/* =================================================
   ------ Programme for Finding Palindrome  --------
   ================================================= */


   const findPalindrome = value => {
    const valueIntoStr = value.toString();
    const valueIntoReverseStr = valueIntoStr.split("").reverse().join("");
  
    if(valueIntoStr === valueIntoReverseStr){
      const message = `Your input text is "${value}" which is a "Palindrome".`;
      console.log(message);
    }
    else{
      const message = `Your input text is "${value}" which is "Not A Palindrome".`;
      console.log(message);
    }
  }
  
  findPalindrome("eye");
  findPalindrome("madam");
  findPalindrome("Shourav");