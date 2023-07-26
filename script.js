// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var isNumbers = prompt("Include Numbers | TRUE/FALSE", "TRUE")
  var isSpecial = prompt("Include Special Charachters | TRUE/FALSE", "TRUE")
  var islowercase = prompt("Include Lowwer Case | TRUE/FALSE", "TRUE")
  var isuppercase = prompt("Include Upper Case | TRUE/FALSE", "TRUE")

  const passwordCriteria = []

  if(isNumbers=="TRUE"){
    passwordCriteria.push(true)
  }
  else if(isNumbers=="FALSE"){
    passwordCriteria.push(false)
  } else{
    alert("Not valid input : including numbers in password by default")
    passwordCriteria.push(true)
  }

    
  if(isSpecial=="TRUE"){
    passwordCriteria.push(true)
  }
  else if(isSpecial=="FALSE"){
    passwordCriteria.push(false)
  } else{
    alert("Not valid input : including special charachters in password by default")
    passwordCriteria.push(true)
  }

  if(islowercase=="TRUE"){
    passwordCriteria.push(true)
  }
  else if(islowercase=="FALSE"){
    passwordCriteria.push(false)
  } else{
    alert("Not valid input : including Lower Case in password by default")
    passwordCriteria.push(true)
    
  }

  if(isuppercase=="TRUE"){
    passwordCriteria.push(true)
  }
  else if(isuppercase=="FALSE"){
    passwordCriteria.push(false)
  } else{
    alert("Not valid input : including Upper Case in password by default")
    passwordCriteria.push(true)

  }
  let length = prompt("password length", "8-128")
  try {
    length = parseInt(length)
  } catch (error) {
    console.log(error)
  }
  
  if(length < 8 || length  > 128){
    alert("setting length to 128 by default — invalid input")
    length = 128
  }
  var password = generatePassword(length,passwordCriteria);

  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(passwordLenght,passwordCriteria, ){
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = [0,1,2,3,4,5,6,7,8,9,10]

  //Remove numbers
  if(passwordCriteria[0]){
    for (var i = 0; i < number.length; i++){
      chars = chars.replace(number[i], "") 
    }
  }

  //Remove special

  const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  if(passwordCriteria[1]){
    for (var i = 0; i < special.length; i++){
      chars  = chars.replace(special[i], "") 
     } 
  }

  //Remover lowercase
  const lowercase =    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (passwordCriteria[2]){
    for (var i = 0; i < lowercase.length; i++){
      chars = chars.replace(lowercase[i], "") 
    }
  }
  //Remover uppercase
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  if (passwordCriteria[3]){
    for (var i = 0; i < uppercase.length; i++){
      chars  = chars.replace(uppercase[i], "") 
     } 
  }

  var password = ""
  for (var i = 0; i < passwordLenght; i++) {
  const randomnumber = Math.floor(Math.random()*chars.length)
  password += chars.charAt(randomnumber)
}
console.log(password)
return password;
}

