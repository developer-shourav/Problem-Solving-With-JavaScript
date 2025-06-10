/* You will be given Celsius as input to the function. 
You calculate the temperature and convert it to Fahrenheit and return the output */

function celsiusToFahren(celsius) {
  const inputCel = celsius;
  const fahrenheit = inputCel * 9 / 5 + 32;
  const massage = inputCel + "\xB0C Celsius equals to "+ fahrenheit + "\xB0F fahrenheit.";
  return massage;
}

console.log(celsiusToFahren(11));