// Assignment Code
var generateBtn = document.querySelector("#generate");
// Global Variables
var character = "!@#$%^&*()";
var number = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// generate beginning password window, prompt selctions, user responses, random password generated as a result
function generatePassword() {
    var results = "";
    var length = prompt("How many characters would you like the password to be?");
    console.log(length);
    if(length < 8 || length > 128) {
        alert("Password must be more than 8 characters but no more than 128!");
        return generatePassword();
    } else{
        // re-define variables with prompt windows
        var characterCon = confirm("Would you like to include special characters?");
        var numberCon = confirm("Would you like to include numbers?");
        var lowerCon = confirm("Would you like to include lowercase letters?");
        var upperCon = confirm("Would you like to include uppercase letters?");
        
    }

   // Declined options. this will need to loop back to the start of the options if all are declined

    if(
    !characterCon &&
    !numberCon &&
    !lowerCon &&
    !upperCon 
    ) {
    alert("Must include at least one character type to proceed!");
    generatePassword();
    } 