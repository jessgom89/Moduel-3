// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let length = prompt("password length" + "8-128")
  try {
    length = parseInt(length)
  } catch (error) {
    console.log(error)
  }
  if (length < 8 || length > 128) {
    alert("setting length to 128 by default — invalid input")
    return ""
  }

  var isNumbers = confirm("Include Numbers | TRUE/FALSE", "TRUE")
  var isSpecial = confirm("Include Special Charachters | TRUE/FALSE", "TRUE")
  var islowercase = confirm("Include Lowwer Case | TRUE/FALSE", "TRUE")
  var isuppercase = confirm("Include Upper Case | TRUE/FALSE", "TRUE")

  const passwordCriteria = []

  if (isNumbers == true) {
    passwordCriteria.push(true)
  }
  else if (isNumbers == false) {
    passwordCriteria.push(false)
  } else {
    alert("Not valid input : including numbers in password by default")
    passwordCriteria.push(true)
  }


  if (isSpecial == true) {
    passwordCriteria.push(true)
  }
  else if (isSpecial == false) {
    passwordCriteria.push(false)
  } else {
    alert("Not valid input : including special charachters in password by default")
    passwordCriteria.push(true)
  }

  if (islowercase == true) {
    passwordCriteria.push(true)
  }
  else if (islowercase == false) {
    passwordCriteria.push(false)
  } else {
    alert("Not valid input : including Lower Case in password by default")
    passwordCriteria.push(true)

  }

  if (isuppercase == true) {
    passwordCriteria.push(true)
  }
  else if (isuppercase == false) {
    passwordCriteria.push(false)
  } else {
    alert("Not valid input : including Upper Case in password by default")
    passwordCriteria.push(true)

  }



  var password = generatePassword(length, passwordCriteria);

  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(passwordLength, passwordCriteria,) {
  var chars = "";
  var numbers = "0123456789"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var specialcharacters = "!@#$%^&*()"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  //Remove numbers
  if (passwordCriteria[0]) {
    for (var i = 0; i < numbers.length; i++) {
      chars = chars.concat(numbers[i])
    }
  }

  //Remove special

  const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  if(passwordCriteria[1]){
    for (var i = 0; i <specialcharacters.length ; i++){
      chars  = chars.concat(specialcharacters[i])
     } 
  }

  // //Remover lowercase
  // const lowercase =    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (passwordCriteria[2]){
    for (var i = 0; i < lowercase.length; i++){
      chars = chars.concat(lowercase[i]) 
    }
  }
  // //Remover uppercase
  // const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  if (passwordCriteria[3]){
    for (var i = 0; i < uppercase.length; i++){
      chars  = chars.concat(uppercase[i]) 
     } 
  }

  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    const randomnumber = Math.floor(Math.random() * chars.length)
    password += chars.charAt(randomnumber)
  }
  console.log(password)
  return password;
}

