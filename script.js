// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add function to generate random password
function generatePassword() {
  //the following stores user choices
  let ucLetter;
  let lcLetter;
  let numeric;
  let special;

  //the following is a list from which the password will be generated
  const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  let passwordLength = window.prompt("How many characters do you want in your password? (Min - 8 , Max - 128)");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == "" || isNaN(passwordLength)){
    passwordLength = window.prompt("Please choose a password length between 8 and 128 characters.");
  }
  

}

