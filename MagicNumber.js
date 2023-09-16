// JavaScript comments with name and date
// Created by Nelson Kan 
// Date: Sep 14, 2023

// Prompt the user to enter a number
var userNumber = parseInt(prompt("Choose any whole number:"));

// Perform the magic number trick
var step1 = userNumber + 9;
var step2 = step1 * 2;
var step3 = step2 - 4;
var step4 = step3 / 2;
var finalNumber = step4 - userNumber;

// Display the output using document.write
document.write("<p>You chose the number: " + userNumber + "</p>");
document.write("<ul>");
document.write("<li>I added 9: " + step1 + "</li>");
document.write("<li>I multiplied by 2: " + step2 + "</li>");
document.write("<li>I subtracted by 4: " + step3 + "</li>");
document.write("<li>I divided by 2: " + step4 + "</li>");
document.write("<li>I subtracted by the original number: " + finalNumber + "</li>");
document.write("</ul>");

// Display the final result using an alert
alert("Your final number is: " + finalNumber);
