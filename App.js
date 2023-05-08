// // Assignment # 26-30

// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

const askNumber = parseInt(prompt("Enter a number"));
console.log(askNumber);
console.log(Math.round(askNumber));
console.log(Math.floor(askNumber));
console.log(Math.ceil(askNumber));

// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

const negNumber = parseInt(prompt("Enter a negative floating number"));
console.log(negNumber);
console.log(Math.round(negNumber));
console.log(Math.floor(negNumber));
console.log(Math.ceil(negNumber));

// // 3. Write a program that displays the absolute value of a
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var absoluteValue = +prompt("Write a number ?");
for (let i = 0; i < absoluteValue.length; i++) {
  if (absoluteValue != "-") {
    console.log(absoluteValue);
  } else {
    console.log("-" + absoluteValue);
  }
}

// // 4. Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.:

var randomNumber = Math.random() * 6 + 1;
console.log(Math.floor(randomNumber));

// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser

var randomCoin = Math.random() * 2 + 1;
console.log(Math.floor(randomCoin));

// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.
var randomNumBetweenOneAndHundred = Math.random() * 100 + 1;
console.log(Math.floor(randomNumBetweenOneAndHundred));

// // 7. Write a program that asks the user about his weight. Parse
// // the user input and display his weight in your browser.
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

const userWeight = +prompt("Enter Your Weight");
console.log(userWeight);

// // 8. Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.

const secretNumber = 5;
const askUser = +prompt("Enter a secret number");

if (secretNumber === askUser) {
  console.log("Congrat! 🎉");
} else {
  console.log("Try Again!");
}

// DATE METHODS
// Assignment # 31-34
// 1. Write a program that displays current date and time in
// your browser.
var date = new Date();
console.log(date);

// 2. Write a program that alerts the current month in words.
// For example December.
var months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var month = date.getMonth();
console.log(months[month]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
let days = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Saturday"];
let todayDay = new Date().getDay();
let dayAbbreviation = days[todayDay].substring(0, 3);
console.log(dayAbbreviation);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
var day = new Date().getDay();
if (day === 6 || day === 0) {
  console.log("FUN DAY!!!");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
var dates = date.getDate();
if (dates > 15) {
  console.log("Last days of the month");
} else {
  console.log("First fifteen days of the month");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// Create a new Date object
var currentDate = new Date();

// Get the number of milliseconds since midnight, Jan. 1, 1970
var milliseconds = currentDate.getTime();
console.log("miilis " + milliseconds);

// Convert milliseconds to minutes
var minutes = milliseconds / (1000 * 60);

// Log the number of minutes since midnight, Jan. 1, 1970
console.log("minutes " + minutes);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let now = new Date();
let hours = now.getHours();
let period;

if (hours < 12) {
  period = "AM";
} else {
  period = "PM";
}

alert("It's " + period);

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var laterDate = new Date(2020, 11, 31);
console.log(laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// Create a date object of the starting date of Ramadan
var ramadanStart = new Date("June 18, 2015");

// Get the current date
var today = new Date();

// Calculate the difference in milliseconds between the two dates
var timeDiff = today.getTime() - ramadanStart.getTime();

// Convert the time difference to days
var daysPast = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// Alert the number of days past since the start of Ramadan
// console.log("Number of days past since the start of Ramadan: " + daysPast);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var beginingDate = new Date("January 1, 2015");
var refDate = new Date("August 19, 2023");
var resultFinal = (refDate - beginingDate) / 1000;
console.log(resultFinal);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// Create a Date object for the current date and time
var currentDate = new Date();

// Extract the hours
var currentHour = currentDate.getHours();

// Reset the date object an hour ahead
currentDate.setHours(currentHour + 1);

// Display the date object in your browser
console.log(currentDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// Create a Date object that is 100 years back
var date100YearsBack = new Date();
date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);

// Show the date in an alert box
alert(date100YearsBack);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
var age = prompt("age ??");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
console.log(birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numOfUnits = parseFloat(prompt("Enter number of units:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

var netAmountPayable = numOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

console.log("Customer Name: " + customerName);
console.log("Current Month: " + currentMonth);
console.log("Number of units: " + numOfUnits.toFixed(2));
console.log("Charges per unit: " + chargesPerUnit.toFixed(2));
console.log(
  "Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2)
);
console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
console.log(
  "Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2)
);

// FUNCTION
// Assignment # 35-38
// 1. Write a function that displays current date & time in your browser.
function dateToday() {
  var today = new Date();
  console.log(today);
}
dateToday();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function greet(firstName, lastName) {
  console.log(`Hi ${firstName} ${lastName}! How are you?`);
}
greet("Hania", "Imran");

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
console.log(add(1, 5));

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator(num1, operator, num2) {
  var num1 = prompt("num1?");
  var operator = prompt("operator?");
  var num2 = prompt("num2?");

  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  }
}
calculator();

// 5. Write a function that squares its argument.
function square(num) {
  var square = num * num;
  console.log(square);
}
square(5);

// // 6. Write a function that computes factorial of a number.
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
var number1 = +prompt("Staring number");
var number2 = +prompt("Ending number");
function counting(number1, number2) {
  for (var i = number1; i <= number2; i++) {
    console.log(i);
  }
}
counting(number1, number2);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function calculateHypotenuse(base, perp) {
  function calculateSquare(num) {
    return num * num;
  }
  var squareSum = calculateSquare(base) + calculateSquare(perp);
  var hypo = Math.sqrt(squareSum);
  return hypo;
}

console.log(calculateHypotenuse(3, 4));

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

function areaOfRectangle(width, height) {
  var area = width * height;
  return area;
}
console.log(areaOfRectangle(7, 9));
function areaOfRectangleByValues(width = "8", height = "9") {
  var area = width * height;
  return area;
}
console.log(areaOfRectangleByValues());

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
var stringCheck = prompt(
  "Enter a palindrome and check whether it is true or not?"
);
function palindrome(stringCheck) {
  let len = stringCheck.length;
  for (let i = 0; i < len / 2; i++) {
    if (stringCheck[i] !== stringCheck[len - 1 - i]) {
      alert("not found!!");
      return;
    }
  }
  alert("found");
}
palindrome(stringCheck);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetter(str) {
  // split the string into an array of words
  var words = str.split(" ");
  console.log(words);

  // loop through each word and capitalize the first letter
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    console.log(words[i].slice(1));
  }

  //   // join the array of words back into a string and return it
  return words.join(" ");
}

// // Example usage:
console.log(capitalizeFirstLetter("the quick brown fox"));
// Output: "The Quick Brown Fox"

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

var exampleString = "Web Development Tutorial";

function longestWord(exampleString) {
  var words = exampleString.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      // console.log(words[i]);
      // console.log(longestWord);
      longestWord = words[i];
      // console.log(longestWord);
      // console.log(longestWord)
    }
  }
  console.log(longestWord);
}

longestWord(exampleString);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
var str = "JSResourceS.com";
var letter = "o";
function countOccurrences(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

var occurrences = countOccurrences(str, letter);

console.log(
  "Number of occurrences of '" + letter + "' in '" + str + "' = " + occurrences
);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}
calcCircumference(5);
calcArea(5);
