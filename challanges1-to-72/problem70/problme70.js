/*  Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */

const randomPasswordGenerator = length =>  {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}~';
  
    const allChars = uppercaseChars + numberChars + lowercaseChars + specialChars;
  
    let password = '';
  
    if(length < 4){
        return 'Error: password length should be 4 characters or above.';

    }

    while (true) {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.ceil(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
      }
  
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?/{}~])/.test(password)) {
        break;
      }
  
      password = '';
    }
  
    return password;
  }
  
  const passwordLength = 10;
  const randomPassword = randomPasswordGenerator(passwordLength);
  console.log(randomPassword);
  