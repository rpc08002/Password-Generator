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

get.addEventListener("click", function() {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//Start Function To Generate Password
function generatePassword() {
  // Asks User Input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // If Statement For User Validation
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validate User Input
    // Start Prompts
    enter = parseInt(prompt("You must chosose between 8 and 128"));
  
  } else {
    // Confirmations After Input Is Validated
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters");
    confirmUppercase = confirm("will this contain Uppercase letters");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else If For Negative Options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }
  // First If Statement That User Input To Determine Choices
  // Else If For Four Positive Choices
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
  }
  // Else If For Three Positive Choices
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, aplha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }

  // Else If For Two Positive Choices
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }

  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  }

  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(aplha2);
  }

  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(numner);
  }

  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  }

  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }

  // Else If For One Positive Option
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }

  // Space Variable For Uppercase Conversion
  else if (confirmUppercase) {
      choices = space.concat(alpha2);
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
