

/* You will be given the function input as Fahrenheit. You calculate the temperature and convert it to Celsius and return the output */


function fahrenToCelsius(fahren) {
    const inputFahren = fahren;
    const celsius = (inputFahren -32) * 5 / 9 ;
    const massage = inputFahren + "\xB0F fahrenheit equals to "+ celsius.toFixed(2) + "\xB0C Celsius.";
    return massage;
  }
  
  console.log(fahrenToCelsius(11));