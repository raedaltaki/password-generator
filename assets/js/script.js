// Function for password length
var passLengthFun = function()
{
  var length = window.prompt("Choose Password Length:\nLength should be a number that at least 8 characters and no more than 128 characters");
  length = parseInt(length); // make it integer nad NaN if not number

  if(!length || length < 8 || length > 128) //check for not correct input if NaN or less than 8 or more than 128 characters
  {
    window.alert("Length should be a number that at least 8 characters and no more than 128 characters");
    return passLengthFun();  //recursive
  }

  return length;
};

//Function for valid characters of password
var passCharsFun = function ()
{
  var validChars = ""; //variable for valid character pool
  var lowercase = window.confirm("Do you want the password to include lowercase ?");
  var uppercase = window.confirm("Do you want the password to include uppercase ?");
  var numeric = window.confirm("Do you want the password to include numeric ?");
  var specialChar = window.confirm("Do you want the password to include special characters ?");
  
  if(!(lowercase || uppercase || numeric || specialChar)) //check if all values are false
  {
    window.alert("At least one character type should be selected for the password");
    return passCharsFun(); //recursive
  }

  if (lowercase) //if true add lowercase characters to valid characters pool 
  {
    validChars +="abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) //if true add uppercase characters to valid characters pool
  {
    validChars +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) //if true add numeric characters to valid characters pool
  {
    validChars +="0123456789";
  }

  if(specialChar) //if true add special characters to valid characters pool
  {
    validChars += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  return validChars; //return valid characters
};

//function to generate password based on length and valid characters
var generatePassword = function ()
{
  var passLength = passLengthFun(); //password length
  var passCharsPool = passCharsFun(); // password valid characters pool
  var finalPassword = ""; //Result

  for(var i = 0; i< passLength; i++)
  {
    //select one charater randomly from the character pool and add it to final password 
    finalPassword += passCharsPool[Math.floor( Math.random()* passCharsPool.length)];
  }

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
