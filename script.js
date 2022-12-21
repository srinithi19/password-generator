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
  let ucLetter = false;
  let lcLetter = false;
  let number = false;
  let specialChar = false;

  //the following is a list from which the password will be generated
  const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  let passwordLength = window.prompt("How many characters do you want in your password? (Min - 8 , Max - 128)");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == "" || isNaN(passwordLength)){
    passwordLength = window.prompt("Please choose a password length between 8 and 128 characters.");
  }

  while (!ucLetter && !lcLetter && !numeric && !special) {
    ucLetter = confirm("Click OK to include lower case letters in your password");
    lcLetter = confirm("Click OK to include upper case letters in your password");
    number = confirm("Click OK to include numbers in your password");
    specialChar = confirm("Click OK to include special characters in your password");
    if(!ucLetter && !lcLetter && !numeric && !special){
      window.alert("Please choose atleast one criteria");
    }
  }

  // make a all character array depending on user selection
  let passwordList = [];

  if (lcLetter) {
    passwordList.concat(lowerCaseLetters);
  }
  if (ucLetter) {
    passwordList.concat(upperCaseLetters);
  }
  if (specialChar) {
    passwordList.concat(specialChars);
  }
  if (number) {
    passwordList.concat(nums);
  }

// generate random password and return it
  let password = [];
  for (let i = 0; i < passwordLength; i++) {
    password.push(passwordList[Math.floor(Math.random() * passwordList.length)]);
  }
  //Join the array and make it a string
  return password.join("");
}

