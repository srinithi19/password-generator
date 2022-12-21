# Password-Generator
## Technology Used
JavaScript -	https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Description
This application randomly generates the password based on the user selection which includes uppercase letters,
lowercase letters, numbers and special characters. The password length should be between 8 and 128 characters and should include atleast one special criteria.

After validating the user's choices, the application generates and displays a password. This application has HTML/CSS as starter code. "generate-password" function has to be implemented in javascript.

## Code snippets
Alphabets/Numbers and special chars are stored in variables to genrate password.

```JS
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

```

Prompt/Comfirm/alert is used for user selection and alert messages
```
lcLetter = confirm("Click OK to include lower case letters in your password");
    ucLetter = confirm("Click OK to include upper case letters in your password");
    number = confirm("Click OK to include numbers in your password");
    specialChar = confirm("Click OK to include special characters in your password");
    if(ucLetter==false && lcLetter==false && number==false && specialChar==false){
      window.alert("Please choose atleast one criteria");
```

random function is used to generate password 

```
let password = [];
  for (let i = 0; i < passwordLength; i++) {
    password.push(passwordList[Math.floor(Math.random() * passwordList.length)]);
  }
  ```

## Outcome
Through this project, i learnt the javascript concept of array/function, alert/prompt/confirm and usage of math functions.

Application: https://srinithi19.github.io/password-generator/
Github Repo: https://github.com/srinithi19/password-generator




