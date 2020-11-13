// User variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password variable values
// Special Characters
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "'", ",", "-", ".", "/", "[", "]", "`", "~", "{", "}", ";", ":", "|", "?", "<", ">"];
// Numeric Characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical Characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space for uppercase conversion
space = [];
// Choices declared outside the if statement so they can be connected after condition
var choices;
var toUpper = function (x) {
  return x.toUpper();
};
// creates a variable for uppercase
aplha2 = alpha.map(toUpper);
//Assignment Code
var get = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
