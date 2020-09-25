// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordArray;
}

// Add event listener to generate button. 
  //generateBtn means doing something to the button that's in the html file
generateBtn.addEventListener("click", writePassword);

//collect all answers in an object and return
var password = '';

//character string arrays represented as list of vars
var Symbols = '~!@#$%&-+=_';
var SymbolsLength = 11;
var Numbers = '0123456789';
var NumbersLength = 10
var UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var UpperCaseLength = 26;
var LowerCase = 'abcdefghijklmnopqrstuvwxyz';
var LowerCaseLength = 26;
var passwordArray = '';

//variable declarations
var confirmLength;
var confirmSymbols;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

//create generate password function
  //if special characters, push random characters to a new array
  //if numeric push from numeric array to new array

  //make sure user picks at least 1 of the conditions they want to include...
  //...in their new password (e.g. symbols, #s, uppercase, lowercase).

function generatePassword() {
  //set password length/complexity
  var Length = parseInt(prompt("Enter password length (8 to 128 characters)"));
  if(Length=null){
    window.alert("Please enter your desired password length.");
  }
  if(Length > 128 || Length < 8) {
    Length = parseInt(prompt ("Please enter a password length (min 8, max 128)"));
  }
  var confirmSymbols = confirm("Include special characters?");
  var confirmNumbers = confirm("Include numbers?");
  var confirmUpperCase = confirm("Include upper case letters?");
  var confirmLowerCase = confirm("Include lower case letters?");
  if(confirmSymbols===false&&confirmNumbers===false&&confirmUpperCase===false&&confirmLowerCase===false){
    window.alert("Please select at least one category.");
  }

  while (passwordArray.length < Length) {
    if(confirmSymbols) {
      passwordArray = passwordArray.concat(Symbols.charAt(Math.floor(Math.random() * SymbolsLength)))
      if(passwordArray.length===Length){
        break;
      }
    }
    if (confirmNumbers) {
      passwordArray = passwordArray.concat(Numbers.charAt(Math.floor(Math.random() * NumbersLength)))
      if(passwordArray.length===Length){
        break;
      }
    }
    if (confirmUpperCase) {
      passwordArray = passwordArray.concat(UpperCase.charAt(Math.floor(Math.random() * UpperCaseLength)))
      if(passwordArray.length===Length){
        break;
      }
    }
    if(confirmLowerCase) {
      passwordArray = passwordArray.concat(LowerCase.charAt(Math.floor(Math.random() * LowerCaseLength)))
      if(passwordArray.length===Length){
        break;
      }
    }
  }

var tempPass1 = '';
var tempPass2 = '';
var first = 0;
var second = 0;
var character = '';
//repeats process 100 times
for (var i = 0; i < 100; i++){
    Character = '';
    tempPass1 = '';
    tempPass2 = '';
    //first picks a random letter within string
    first = Math.floor(Math.random() * Length)
    //second is the new location for letter above
    second = Math.floor(Math.random() * Length)
    //character saves the first letter
    character = passwordArray.charAt(first)
    //this creates a new string w/o first letter
    tempPass1 = tempPass1.concat(passwordArray.substring(0, first))
    tempPass1 = tempPass1.concat(passwordArray.substring(first + 1, Length))
    //this creates a new string w/ first letter in a random position
    tempPass2 = tempPass2.concat(tempPass1.substring(0, second))
    tempPass2 = tempPass2.concat(character)
    tempPass2 = tempPass2.concat(tempPass1.substring(second, Length))
    //this saves randomized password to passwordArray
    passwordArray = tempPass2
    console.log(tempPass2)
}


  return passwordArray;
} 



//for loop that will push through all possible characters according to length selected
  //push final result of password into another array and then print


  // Var password = '';
  // Var length;
  // Length = (user input shit);
  // [For loop which runs x times]{
  // Var rand = random variable;
  // Var type = rand modulo Y (y is the number of lists, like symbols, letters, uppercase)
  // If type = (1,2,3...)
  //     Then 
  //            Add a character of type 1,2,3...
  // )
  // 
  // Then the adding the character thing would be however you add a character to the blank string you made in the beginning
  // 
  // Using the charAt function we discussed

