/* =====================================================================
   ------ Programme for calculating Total vowels and consonants --------
   ===================================================================== */

   const countVowelsAndConsonants = textInput => {
    const allLetters = textInput.toLowerCase();
    const vowels = 'aeiou';
    let vowelsCount = 0 ;
    let consonantsCount = 0;

    for ( let i = 0; i < allLetters.length; i++){
        let letter = allLetters[i];

        if(/[a-z]/.test(letter)){
            
            if(vowels.includes(letter)){
                vowelsCount++;
            }
            else{
               consonantsCount++;
            }
        }
        
    };
   return {yourInput: textInput, totalVowels: vowelsCount, totalConsonants: consonantsCount};
};

console.log( countVowelsAndConsonants("developer.shourav1@gmail.com"));