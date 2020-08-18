
// CHAPTER 1

// QUESTION 1

// alert("Hi! Welcome to my Website");

// QUESTION 2

// alert("Error! Please enter a valid password.");

// QUESTION 3

// alert("Welcome to JS land... \nHappy Coding!");

// QUESTION 4

// alert("Welcome to JS land...");
// alert("Happy Coding!");

// QUESTION 5

// console.log('Hello...I can run JS through my web browsers console');

// QUESTION 6

// alert("Hi! Welcome to my Website!");

// QUESTION 7

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>JS Assignment 05</title>
//     <script>
//       alert("JS in HEAD");
//     </script>
//   </head>
//   <script>
//     alert("Body (before your page’s HTML) ");
//   </script>
//   <body>
//     <script>
//       alert("Body (inside your page’s HTML)");
//     </script>
//   </body>
//   <script>
//     alert("Body (after your page’s HTML)");
//   </script>
// </html>


// CHAPTER 2

// QUESTION 1

// var username;

// QUESTION 2

// var myName = "Muhammad Moid Khan";

// QUESTION 3

// var message;

// message = "Hello  World";

// alert(message);

// QUESTION 4

// var studentName = "Jhone Doe";
// var studentAge = 15;
// var studentCourse = "Certified Mobile Application Development";

// alert(studentName);
// alert(studentAge + " years old");
// alert(studentCourse);


// QUESTION 5

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";

// alert(pizza);

// QUESTION 6

// var email = "example@example.com";

// alert("My email address is " + email);

// QUESTION 7

// var book = "A smarter way to learn JavaScript";

// alert("I am trying to learn from the book " + book);

// QUESTION 8

// document.write("<h1>Yah! I can write HTML content through JavaScript</h1>");

// QUESTION 9

// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// alert(pattern);


// CHAPTER 3


// QUESTION 1

// var age = 19;

// alert("I am " + age + " years old");

// QUESTION 2

// var visitCount = 14;

// alert("You have visited this site " + visitCount + " times");


// QUESTION 3

// var birthYear = 2000;

// document.write(
//   "My birth year is " +
//     birthYear +
//     "<br>Data type of my declared variable is " +
//     typeof birthYear
// );


// QUESTION 4

// var visitorName = "John Doe";
// var productTitle = "T-Shirts(s)";
// var quantity = 5;
// var storeName = "XYZ Clothing store";

// document.write(
//   "<h1>" +
//     visitorName +
//     " ordered " +
//     quantity +
//     " " +
//     productTitle +
//     " on " +
//     storeName +
//     "</h1>"
// );

// CHAPTER 4


// QUESTION 1

// var firstOne, secondOne, thirdOne;

// QUESTION 2

// var legalVariable;

// var _legalVariable;

// var $leagalVariable;

// var legalVariable_;

// var legalVariable5;

// QUESTION 3


// document.write("<h1>Rules for naming JS variables</h1><br>");

// var legalOne = "numbers";
// var legalTwo = "$";
// var legalThree = "_";
// var legalFour = "$my_1stVariable";

// document.write(
//   "Variable names can only contain , " +
//     legalOne +
//     " , " +
//     legalTwo +
//     " and " +
//     legalThree +
//     " . For example: " +
//     legalFour +
//     "<br>"
// );

// document.write(
//   "Variables must begin with a " +
//     legalTwo +
//     " or " +
//     legalThree +
//     " . For example: $name, _name or name<br>"
// );

// document.write("Variable names are case sensitive<br>");

// document.write("Variable names should not be JS keywords");


// CHAPTER 5


// QUESTION 1

// var valOne = +prompt("Enter first value: ");
// var valTwo = +prompt("Enter second value: ");

// var sum = valOne + valTwo;

// document.write(
//   "<h1>Sum of " + valOne + " and " + valTwo + " is " + sum + "</h1>"
// );

// QUESTION 2


// var valOne = +prompt("Enter first value: ");
// var valTwo = +prompt("Enter second value: ");

// var sub = valOne - valTwo;
// var mul = valOne * valTwo;
// var div = valOne / valTwo;
// var mod = valOne % valTwo;

// document.write(
//   "<h1>Subtraction of " + valOne + " and " + valTwo + " is " + sub + "</h1><br>"
// );

// document.write(
//   "<h1>Multiplication of " +
//     valOne +
//     " and " +
//     valTwo +
//     " is " +
//     mul +
//     "</h1><br>"
// );

// document.write(
//   "<h1>Division of " + valOne + " and " + valTwo + " is " + div + "</h1><br>"
// );

// document.write(
//   "<h1>Modulus of " + valOne + " and " + valTwo + " is " + mod + "</h1><br>"
// );


// QUESTION 3


// var num;

// document.write("<h1>Value after variable declaration is: " + num + "<br></h1>");

// num = 5;

// document.write("<h1>Initial value: " + num + "<br></h1>");

// num++;

// document.write("<h1>Value after increment is: " + num + "<br></h1>");

// num = num + 7;

// document.write("<h1>Value after addition is: " + num + "<br></h1>");

// num--;

// document.write("<h1>Value after decrement is: " + num + "<br></h1>");

// num = num % 3;

// document.write("<h1>The remainder is: " + num + "<br></h1>");


// QUESTION 4

// var ticketPrice = 600;

// var totalTickets = 5;

// var totalPrice = ticketPrice * totalTickets;

// document.write(
//   "<h1>Total cost to buy " +
//     totalTickets +
//     " tickets to a movie is " +
//     totalPrice +
//     "PKR</h1>"
// );


// QUESTION 5

// var num = +prompt("Enter any number for table: ");
// var count = 0;

// document.write("<h2>Table of " + num + "</h2><br>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");
// document.write("<h2>" + num + " x " + ++count + " = " + num * count + "</h2>");

// QUESTION 6

// var tempInCelsius = 25;
// var tempInFahrenheit = 70;

// var celsiusToFahrenheit = (tempInCelsius * 9) / 5 + 32;
// var fahrenheitToCelsius = ((tempInFahrenheit - 32) * 5) / 9;

// document.write(
//   "<h1>" +
//     tempInCelsius +
//     "<sup>o</sup>C is " +
//     celsiusToFahrenheit +
//     "<sup>o</sup>F<br></h1>"
// );

// document.write(
//   "<h1>" +
//     tempInFahrenheit +
//     "<sup>o</sup>F is " +
//     fahrenheitToCelsius +
//     "<sup>o</sup>C</h1>"
// );

// QUESTION 7


// var itemOnePrice = 650;
// var itemTwoPrice = 100;

// var itemOneQuantity = 3;
// var itemTwoQuantity = 7;

// var shippingCharges = 100;

// var totalCost =
//   itemOnePrice * itemOneQuantity +
//   itemTwoPrice * itemTwoQuantity +
//   shippingCharges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + itemOnePrice + "<br>");
// document.write("Quantity of item 1 is " + itemOneQuantity + "<br>");
// document.write("Price of item 2 is " + itemTwoPrice + "<br>");
// document.write("Quantity of item 2 is " + itemTwoQuantity + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + totalCost);


// QUESTION 8

// var totalMarks = 980;
// var obtainedMarks = 804;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");

// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");

// document.write("Percentage: " + percentage + "%");


// QUESTION 9

// var usDollars = 10;
// var saudiRiyal = 25;

// var dollarToPkr = 104.8;
// var riyalToPkr = 28;

// var exchangedAmmount = usDollars * dollarToPkr + saudiRiyal * riyalToPkr;

// document.write("<h1>Currency in PKR</h1>");

// document.write("Total Currency in PKR: " + exchangedAmmount);

// QUESTION 10

// var num = 2;

// var calculation = ((num + 5) * 10) / 2;

// document.write("<h1>Initialize Value: " + num + "</h1>");

// document.write("<h1>Result: " + calculation + "</h1>");


// QUESTION 11

// var currentYear = 2020;
// var birthYear = 1992;

// var age = currentYear - birthYear;

// document.write("<h1>Age Calculator</h1>");

// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age: " + age);

// QUESTION 12

// var radius = 20;
// var pi = 3.142;

// var circumference = 2 * pi * radius;

// var area = pi * radius ** 2;

// document.write("<h1>The Geometrizer</h1>");

// document.write("Radius of a circle is: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// QUESTION 13


// var favSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var snacksPerDay = 3;

// var lifetimeSupply = (maxAge - currentAge) * snacksPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");

// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
// document.write(
//   "You will need " +
//     lifetimeSupply +
//     " " +
//     favSnack +
//     " to last you until the ripe old age of " +
//     maxAge
// );


// CHAPTER 6 - 9

// QUESTION 1

// var a = 10;

// document.write("Result:<br>The value of a is: " + a + "<br>");
// document.write(".................................<br><br>");

// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("The value of a is: " + a + "<br>");


// QUESTION 2

// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result);


// QUESTION 3

// var name = prompt("Enter your name: ");

// document.write("<h1>Hi! " + name + " welcome to my website</h1>");

// QUESTION 4

// No Question

// QUESTION 5

// var num = +prompt("Enter a number for table: ");

// if (!isNaN(num)) {
//   for (var i = 1; i <= 10; i++) {
//     document.write("<h2>" + num + " x " + i + " = " + num * i + "</h2>");
//   }
// } else {
//   num = 5;
//   for (var i = 1; i <= 10; i++) {
//     document.write("<h2>" + num + " x " + i + " = " + num * i + "</h2>");
//   }
// }

// QUESTION 6


// var firstSubject = prompt("Enter First subject name: ");
// var secondSubject = prompt("Enter Second subject name: ");
// var thirdSubject = prompt("Enter Third subject name: ");

// var totalMarksForEach = 100;

// var firstObtained = +prompt(
//   "Enter First subject obtained Marks (total marks for each subject is 100):"
// );

// var secondObtained = +prompt(
//   "Enter Second subject obtained Marks (total marks for each subject is 100):"
// );

// var thirdObtained = +prompt(
//   "Enter Third subject obtained Marks (total marks for each subject is 100):"
// );

// var percentage =
//   ((firstObtained + secondObtained + thirdObtained) / (totalMarksForEach * 3)) *
//   100;

// document.write(
//   "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
// );
// document.write(
//   "<tr><td>" +
//     firstSubject +
//     "</td><td>" +
//     totalMarksForEach +
//     "</td><td>" +
//     firstObtained +
//     "</td><td>" +
//     firstObtained +
//     "%</td></tr>"
// );

// document.write(
//   "<tr><td>" +
//     secondSubject +
//     "</td><td>" +
//     totalMarksForEach +
//     "</td><td>" +
//     secondObtained +
//     "</td><td>" +
//     secondObtained +
//     "%</td></tr>"
// );

// document.write(
//   "<tr><td>" +
//     thirdSubject +
//     "</td><td>" +
//     totalMarksForEach +
//     "</td><td>" +
//     thirdObtained +
//     "</td><td>" +
//     thirdObtained +
//     "%</td></tr>"
// );

// document.write(
//   "<tr><td></td><td>" +
//     totalMarksForEach * 3 +
//     "</td><td>" +
//     (firstObtained + secondObtained + thirdObtained) +
//     "</td><td>" +
//     percentage +
//     "</td></tr>"
// );

// document.write("</table>");

// CHAPTER 9 - 11

// QUESTION 1

// var city = prompt("Enter your city name: ");

// if (city === "Karachi" || city === "karachi" || city === "KARACHI") {
//   document.write("Welcome to city of lights");
// }


// QUESTION 2

// var gender = prompt("Enter your Gender (Male/Female):");

// if (gender === "male" || gender === "Male" || gender === "MALE") {
//   document.write("<h1>Good Morning Sir</h1>");
// } else if (gender === "female" || gender === "Female" || gender === "FEMALE") {
//   document.write("<h1>Good Morning Ma'am</h1>");
// } else {
//   document.write("Error! wrong input");
// }


// QUESTION 3

// var signalColor = prompt("Enter Road Traffic Signal Color: ");

// if (signalColor === "Red") {
//   document.write("Must Stop");
// } else if (signalColor === "Yellow") {
//   document.write("Ready to move");
// } else if (signalColor === "Green") {
//   document.write("Move Now");
// } else {
//   document.write("Error! Wrong Input");
// }


// QUESTION 4

// var fuel = +prompt("Enter remaining fuel in your car(in litres):");

// if (fuel < 0.25) {
//   document.write("Please refill the fuel in your car");
// }


// QUESTION 5

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// QUESTION 6

// var obtainedMarks = +prompt("Enter the marks obtained in three subjects:");
// var totalMarks = +prompt("Enter total marks:");

// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "You need to  improve";
// } else if (percentage >= 60) {
//   grade = "fail";
//   remarks = "sorry";
// }

// document.write("<h1>Marks Sheet</h1>");

// document.write("<h2>Total Marks " + totalMarks + "</h2>");
// document.write("<h2>Marks obtained " + obtainedMarks + "</h2>");
// document.write("<h2>Percentage " + percentage + "</h2>");



// QUESTION 7

// var secretNumber = 6;

// var guessedNumber = +prompt("Guess the number from 1 to 10");

// if (guessedNumber === secretNumber) {
//   document.write("<h1>Bingo! Correct answer</h1>");
// } else if (guessedNumber === ++secretNumber) {
//   document.write("<h1>Close enough to the correct answer</h1>");
// } else {
//   document.write("<h1>Number not match</h1>");
// }

// QUESTION 8

// var num = +prompt(
//     "Enter a number to check whether the number is divisible by 3 or not:"
//   );
  
//   if (num % 3 === 0) {
//     document.write("The number " + num + " is divisible by 3");
//   } else {
//     document.write("The number " + num + " is not divisible by 3");
//   }
  

// QUESTION 9

// var num = +prompt("Enter a number to check wether the number is Even or Odd:");

// if (num % 2 === 0) {
//   document.write("The number " + num + " is an even number");
// } else if (num % 2 === 1) {
//   document.write("The number " + num + " is an odd number");
// } else {
//   document.write("The number " + num + " is not even or odd number");
// }

// QUESTION 10

// var temp = +prompt("Enter temperature:");

// if (temp > 40) {
//   document.write("It is too hot outside.");
// } else if (temp > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temp > 20) {
//   document.write("Today’s Weather is cool.");
// } else if (temp > 10) {
//   document.write("OMG! Today’s weather is so Cool.");
// } else {
//   document.write("Toooo Cooool");
// }


// QUESTION 11

// var firstNum = +prompt("Enter first number:");
// var secondNum = +prompt("Enter second number:");

// var operator = prompt("Enter an operator like (+, -, *, /, %):");

// var calculation;

// if (operator === "+") {
//   calculation = firstNum + secondNum;
//   document.write(
//     "Sum of " + firstNum + " and " + secondNum + " is: " + calculation
//   );
// } else if (operator === "-") {
//   calculation = firstNum - secondNum;
//   document.write(
//     "Subtraction of " + firstNum + " and " + secondNum + " is: " + calculation
//   );
// } else if (operator === "*") {
//   calculation = firstNum * secondNum;
//   document.write(
//     "Multiplication of " +
//       firstNum +
//       " and " +
//       secondNum +
//       " is: " +
//       calculation
//   );
// } else if (operator === "/") {
//   calculation = firstNum / secondNum;
//   document.write(
//     "Division of " + firstNum + " and " + secondNum + " is: " + calculation
//   );
// } else if (operator === "%") {
//   calculation = firstNum % secondNum;
//   document.write(
//     "Modulus of " + firstNum + " and " + secondNum + " is: " + calculation
//   );
// } else {
//   document.write("Invalid Operator");
// }


// CHAPTER 12 - 13

// QUESTION 1

// var char = prompt("Enter a character:");

// if (!isNaN(char)) {
//   document.write("Input is a Number");
// } else if (char >= "A" && char <= "Z") {
//   document.write("Input is a uppercase letter");
// } else if (char >= "a" && char <= "z") {
//   document.write("Input is a lovercase letter");
// }

// QUESTION 2

// var firstNum = +prompt("Enter first number:");
// var secondNum = +prompt("Enter second number:");

// if (firstNum > secondNum) {
//   document.write(firstNum + " is the larger number");
// } else if (secondNum > firstNum) {
//   document.write(secondNum + " is the larger number");
// } else if (firstNum === secondNum) {
//   document.write("both numbers are equal");
// } else {
//   document.write("Invalid input");
// }

// QUESTION 3

// var num = +prompt("Enter a number:");

// if (num > 0) {
//   document.write("Number is Positive");
// } else if (num < 0) {
//   document.write("Number is Negative");
// } else if (num === 0) {
//   document.write("Number is Zero");
// } else {
//   document.write("Invalid Input");
// }

// QUESTION 4

// var checkVowel = prompt(
//   "Enter a single character to check if it is a Vowel or not:"
// );

// if (
//   checkVowel === "a" ||
//   checkVowel === "e" ||
//   checkVowel === "i" ||
//   checkVowel === "o" ||
//   checkVowel === "u"
// ) {
//   document.write("Input character is a Vowel");
// } else {
//   document.write("Input character is not a Vowel");
// }

// QUESTION 5

// var password = "smit";

// var checkPass = prompt("Enter your password:");

// if (checkPass != "") {
//   if (checkPass === password) {
//     document.write(
//       "Correct! The password you entered matches the original password"
//     );
//   } else {
//     document.write("Incorrect password");
//   }
// } else {
//   document.write("Please enter your password");
// }


// QUESTION 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }


// QUESTION 7

// var time = 1900;

// if (time >= 0000 && time < 1200) {
//   document.write("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//   document.write("Good afternoon");
// } else if (time >= 1700 && time < 2100) {
//   document.write("Good evening");
// } else if (time >= 2100 && time <= 2359) {
//   document.write("Good night");
// }


// CHAPTER 14 - 16

// QUESTION 1

// var arr = {};

// QUESTION 2

// var arr = {};


// QUESTION 3

// var arr = ["zero", "one", "two"];


// QUESTION 4

// var arr = [1, 2, 3, 4];

// QUESTION 5

// var arr = [true, false];

// QUESTION 6

// var arr = [true, "Cars", 5, "d"];

// QUESTION 7

// var qualificationsInPakistan = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M.Phil",
//     "PhD",
//   ];
  
//   document.write("<h1>Qualifications:</h1>");
//   for (var i = 0; i < qualificationsInPakistan.length; i++) {
//     document.write("<h1>" + qualificationsInPakistan[i] + "</h1>");
//   }
  

// QUESTION 8

// var studentNames = ["Micheal", "John", "Tony"];

// var scores = [320, 230, 480];

// var totalMarks = 500;

// var percentages = [
//   (scores[0] / totalMarks) * 100,
//   (scores[1] / totalMarks) * 100,
//   (scores[2] / totalMarks) * 100,
// ];

// for (var i = 0; i < scores.length; i++) {
//   document.write(
//     "<h1>Score of " +
//       studentNames[i] +
//       " is " +
//       scores[i] +
//       ". Percentage: " +
//       percentages[i] +
//       "%</h1>"
//   );
// }

// QUESTION 9


// var colors = ["red", "green", "blue"];

// document.write("<br>Orignal Array<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }

// var addColor = prompt("Enter color Name to add to the begining:");

// colors.push(addColor);

// document.write("<br>Updated Array<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }

// colors.push("Pink", "Sky blue");

// document.write("<br>Updated Array (Added Two more colors)<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }

// colors.shift();

// document.write("<br>Updated Array (Deleted first color)<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }

// colors.pop();

// document.write("<br>Updated Array (Deleted last color)<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }

// addColor = prompt("At which index you want to add color:");
// var colorName = prompt("Enter color name:");

// colors.splice(addColor, 0, colorName);

// document.write("<br>Updated Array (Add Color in desire index)<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }

// var colorIndex = +prompt("At which index you want to delete color:");
// var colorsQuantity = +prompt("How many colors you want to delete:");

// colors.splice(colorIndex, colorsQuantity);

// document.write("<br>Updated Array (Deleted Color in desire index)<br><br>");

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + "<br>");
// }


// QUESTION 10

// var studentScores = [320, 230, 480, 120];

// document.write("Scores of Students : " + studentScores + "<br>");

// document.write("Ordered Scores of Students : " + studentScores.sort());

// QUESTION 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write("<h1>Cities List:</h1>");
// document.write("<h1>" + cities + "</h1>");

// var selectCities = cities.slice(2, 4);

// document.write("<h1>Selected Cities List:</h1>");
// document.write("<h1>" + selectCities + "</h1>");


// QUESTION 12

// var arr = ["This", "is", "my", "cat"];

// document.write("<h1>Array:<br>" + arr + "</h1>");

// var str = arr.join(" ");

// document.write("<h1>String:<br>" + str + "</h1>");


// QUESTION 13

// var devices = [];

// document.write("Devices:<br>keyboard,mouse,printer,monitor<br><br>");

// devices.push("keyboard");
// document.write("Out:<br>" + devices + "<br>");
// devices.shift();
// devices.push("mouse");
// document.write("Out:<br>" + devices + "<br>");
// devices.shift();
// devices.push("printer");
// document.write("Out:<br>" + devices + "<br>");
// devices.shift();
// devices.push("monitor");
// document.write("Out:<br>" + devices + "<br>");
// devices.shift();


// QUESTION 14

// var devices = [];

// document.write("Devices:<br>keyboard,mouse,printer,monitor<br><br>");

// devices.unshift("monitor");
// document.write("Out:<br>" + devices + "<br>");
// devices.pop();
// devices.unshift("printer");
// document.write("Out:<br>" + devices + "<br>");
// devices.pop();
// devices.unshift("mouse");
// document.write("Out:<br>" + devices + "<br>");
// devices.pop();
// devices.unshift("keyboard");
// document.write("Out:<br>" + devices + "<br>");
// devices.pop();


// QUESTION 15

// var phoneManufacturers = [
//     "Apple",
//     "Samsung",
//     "Motorola",
//     "Nokia",
//     "Sony",
//     "Haier",
//   ];
  
//   document.write("<select>");
//   for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
//   }
//   document.write("</select>");


// CHAPTER 17 - 20

// QUESTION 1

// var multiArray = [[], [], []];

// QUESTION 2

// var multiArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
//   ];
  
//   document.write(
//     multiArray[0].join(" ") +
//       "<br>" +
//       multiArray[1].join(" ") +
//       "<br>" +
//       multiArray[2].join(" ")
//   );

// QUESTION 3

// for (var i = 1; i <= 10; i++) {
//     document.write("<h1>" + i + "</h1>");
//   }
  

// QUESTION 4

// var tableNo = +prompt("Enter the number to show its multplication table:");

// var tableLength = +prompt("Enter length multiplication table:");

// for (var i = 1; i <= tableLength; i++) {
//   document.write("<h3>" + tableNo + " x " + i + " = " + tableNo * i + "</h3>");
// }

// QUESTION 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }

// document.write("<br>");

// for (var i = 0; i < fruits.length; i++) {
//   document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// QUESTION 6

// document.write("<strong>Counting</strong><br><br>");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// document.write("<br><br><strong>Reverse Counting</strong><br><br>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// document.write("<br><br><strong>Even</strong><br><br>");
// for (var i = 0; i <= 20; i = i + 2) {
//   document.write(i + ", ");
// }

// document.write("<br><br><strong>Odd</strong><br><br>");
// for (var i = 1; i <= 20; i = i + 2) {
//   document.write(i + ", ");
// }

// document.write("<br><br><strong>Series</strong><br><br>");
// for (var i = 2; i <= 20; i = i + 2) {
//   document.write(i + "k, ");
// }


// QUESTION 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
// );

// var notFound = true;

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === search) {
//     document.write(
//       search + " is <strong>available</strong> at index " + i + " in our Bakery"
//     );
//     notFound = true;
//     break;
//   } else {
//     notFound = false;
//   }
// }

// if (!notFound) {
//   document.write(
//     "We are sorry. " +
//       search +
//       " is <strong>not available</strong> in our Bakery"
//   );
// }


// QUESTION 8

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 0; i < A.length; i++) {
//   if (largest < A[i]) {
//     largest = A[i];
//   }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The largest number: " + largest);

// QUESTION 9

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 0; i < A.length; i++) {
//   if (smallest > A[i]) {
//     smallest = A[i];
//   }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The smallest number: " + smallest);

// QUESTION 10

// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ", ");
//   }
  


// CHAPTER 21 - 25


// QUESTION 1


// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hi! " + fullName + ", Welcome to our website.");


// QUESTION 2


// var favPhone = prompt("Enter your favorite mobile phone:");
// var length = favPhone.length;

// document.write(
//  "<h1>My fovrite phone is: " +
//    favPhone +
//    " <br>Lenght of string: " +
//    length +
//    "</h1>"
// );



// QUESTION 3


// var name = "Pakistani";
// var indexOfN = name.indexOf("n");

// document.write(
//  "<h1>String: " + name + "<br>Index of 'n': " + indexOfN + "</h1>"
// );


// QUESTION 4


// var name = "Hello World";
// var lastIndexOfN = name.lastIndexOf("l");

// document.write(
//  "<h1>String: " + name + "<br>Last index of 'l': " + lastIndexOfN + "</h1>"
// );



// QUESTION 5


// var name = "Pakistani";

// var charAtThird = name.slice(3, 4);

// document.write(
//  "<h1>String: " + name + "<br>Character at index 3: " + charAtThird + "</h1>"
// );


// QUESTION 6


// var str = "Q1";

// var concatStr = str.concat(str);
// document.write(
//  "<h1>Orignal String: " +
//    str +
//    "<br>Repeated string using string concat() method: " +
//    concatStr +
//    "</h1>"
// );



// QUESTION 7


// var name = "Hyderabad";
// var str = "Islam";

// var slicedName = name.slice(5);

// var replacedName = str + slicedName;

// document.write("Orignal Name: " + name + "<br>Replaced Name: " + replacedName);




// QUESTION 8



// var message =
//  "Ali and Sami are best friends.They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write("<h1>" + newMessage + "<h1>");



// QUESTION 9


// var val = "472";
// var convertedVal = Number(val);
// document.write(
//  "<h1>Value: " +
//    val +
//    "<br>Type: " +
//    typeof val +
//    "<br>Value: " +
//    convertedVal +
//    "<br>Type: " +
//    typeof convertedVal +
//    "<h1>"
// );



// QUESTION 10



// var input = prompt();

// var capitalInput = input.toUpperCase();

// document.write("User input: " + input + "<br>Upper case: " + capitalInput);
//  QUESTION 11
// var inp = prompt();
// function titleCase(string) {
//  var sentence = string.toLowerCase().split(" ");
//  for (var i = 0; i < sentence.length; i++) {
//    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//  }
//  document.write(sentence.join(" "));
//  return sentence;
// }
// titleCase(inp);



// QUESTION 12



// var num = 35.36;
// num = num.toString();
// var removeDot = num.replace(".", "");

// document.write("<h1>Number: " + num + "<br>Result: " + removeDot + "</h1>");



// QUESTION 13



// var input = prompt("Enter your username:");
// var isValid = false;

// for (var i = 0; i < input.length; i++) {
//  if (
//    input[i] === "@" ||
//    input[i] === "." ||
//    input[i] === "," ||
//    input[i] === "!"
//  ) {
//    alert("Please enter a valid username");
//    isValid = true;
//  }
// }

// if (!isValid) {
//  alert("Your username is: " + input);
// }



// QUESTION 14



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchItem = prompt("Enter an item to search:");

// var isValid = false;

// for (var i = 0; i < A.length; i++) {
//  if (searchItem.toLowerCase() === A[i]) {
//    document.write(
//      "<h1>" +
//        searchItem +
//        " is available at index " +
//        i +
//        " in our bakery</h1>"
//    );
//    isValid = true;
//  }
// }

// if (!isValid) {
//  document.write(
//    "<h1>We are sorry. " +
//      searchItem +
//      " is <strong>not available</strong> in our bakery</h1>"
//  );
// }



// QUESTION 15



// var password = prompt("Enter you password:");

// for (var i = 0; i < password.length; i++) {
//  if (
//    (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 122) ||
//    (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
//  ) {
//    if (password.length <= 6) {
//      if (
//        Number(password.slice(0, 1)) > 0 &&
//        Number(password.slice(0, 1)) <= 9
//      ) {
//        document.write("<h1>Password should not start with a number</h>");
//        break;
//      } else {
//        document.write(
//          "<h1>Congratulations! Your password is " + password + "</h>"
//        );
//        break;
//      }
//    } else {
//      document.write("<h1>Password must be 6 characters long</h>");
//      break;
//    }
//  } else {
//    document.write("<h1>Enter a valid password</h>");
//    break;
//  }
// }



// QUESTION 16



// var university = "University of Karachi";

// var uniArray = university.split("");

// for (var i = 0; i < uniArray.length; i++) {
//  document.write(uniArray[i] + "<br>");
// }



// QUESTION 17


// var name = prompt("Enter any name to get last character");
// var lastChar = name[name.length - 1];

// document.write(
//  "<h1>User input: " + name + "<br>Last character: " + lastChar + "</h1>"
// );



//  QUESTION 18



// var str = "The quick brown fox jumps over the lazy dog";

// function occurrences(string, subString, allowOverlapping) {
//  string += "";
//  subString += "";
//  if (subString.length <= 0) return string.length + 1;

//  var n = 0,
//    pos = 0,
//    step = allowOverlapping ? 1 : subString.length;

//  while (true) {
//    pos = string.indexOf(subString, pos);
//    if (pos >= 0) {
//      ++n;
//      pos += step;
//    } else break;
//  }
//  return n;
// }

// document.write(occurrences(str.toLowerCase(), "the"));













// CHAPTER 26 - 30


// QUESTION 1


// var num = 3.45214;

// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);

// document.write(
//  "<h1>number: " +
//    num +
//    "<br>round off value: " +
//    roundNum +
//    "<br>floor value: " +
//    floorNum +
//    "<br>ceil value: " +
//    ceilNum +
//    "</h1>"
// );


//  QUESTION 2



// var num = -2.673;

// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);

// document.write(
//  "<h1>number: " +
//    num +
//    "<br>round off value: " +
//    roundNum +
//    "<br>floor value: " +
//    floorNum +
//    "<br>ceil value: " +
//    ceilNum +
//    "</h1>"
// );



//  QUESTION 3



// var num = -4;

// var absVal = Math.abs(num);

// document.write("<h1>The absolute value of " + num + " is " + absVal + "</h1>");



//  QUESTION 4



// var randDice = Math.floor(Math.random() * 6 + 1);

// document.write("<h1>Random dice value: " + randDice + "</h1>");



//  QUESTION 5



// var randCoin = Math.floor(Math.random() * 2 + 1);
// var coin;

// if (randCoin === 1) {
//  coin = "Heads";
//  document.write(
//    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
//  );
// } else {
//  coin = "Tails";
//  document.write(
//    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
//  );
// }



//  QUESTION 6



// var randNum = Math.floor(Math.random() * 100 + 1);

// document.write("<h1>random number between 1 and 100: " + randNum + "</h1>");



//  QUESTION 7



// var userWeight = prompt("Enter your weight in kilograms");

// var seprateKilo = userWeight.slice(userWeight.indexOf("k"));

// var seprateWeight = userWeight.slice(0, userWeight.indexOf("k"));

// document.write(
//  "<h1>The weight of user is " + seprateWeight + " kilograms</h1>"
// );



//  QUESTION 8



// var secretNum = 6;

// var guessedNum = +prompt("Enter a number between 1 and 10");

// if (guessedNum === secretNum) {
//  alert("Congratulations! You guess the same number " + secretNum);
// } else {
//  alert("Try again!");
// }













// CHAPTER 31 - 34


//  QUESTION 1



// var today = new Date();

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// var months = [
//  "jan",
//  "feb",
//  "mar",
//  "apr",
//  "may",
//  "jun",
//  "jul",
//  "aug",
//  "sep",
//  "oct",
//  "nov",
//  "dec",
// ];

// document.write(
//  days[today.getDay()] +
//    " " +
//    months[today.getMonth()] +
//    " " +
//    today.getDate() +
//    " " +
//    today.getFullYear() +
//    " " +
//    today.getUTCHours() +
//    ":" +
//    today.getUTCMinutes() +
//    ":" +
//    today.getSeconds() +
//    " " +
//    today.toTimeString()
// );



//  QUESTION 2



// var months = [
//    "January",
//    "Febuary",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "Octuber",
//    "November",
//    "December",
//  ];

//  var monthNum = new Date();

//  var getMonth = months[monthNum.getUTCMonth()];

//  document.write("<h1>Current month: " + getMonth + "</h1>");




//  QUESTION 3



// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// var today = new Date();

// var getCurrentDay = days[today.getUTCDay()];

// alert("Today is " + getCurrentDay);



//  QUESTION 4



// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// var today = new Date();

// var getCurrentDay = days[today.getUTCDay()];

// if (getCurrentDay === "sun" || getCurrentDay === "sat") {
//  document.write("Its Fun day");
// } else {
//  document.write("Its working day");
// }




//  QUESTION 5


// var date = new Date();

// var getDay = date.getUTCDate();

// if (getDay < 16) {
//  document.write("<h1>First fifteen days of the month</h1>");
// } else {
//  document.write("<h1>Last days of the month</h1>");
// }



//  QUESTION 6


// var today = new Date();

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// var millSecSince1970 = today.getTime();
// var minSince1970 = (millSecSince1970 / 1000) * 60;

// var months = [
//  "jan",
//  "feb",
//  "mar",
//  "apr",
//  "may",
//  "jun",
//  "jul",
//  "aug",
//  "sep",
//  "oct",
//  "nov",
//  "dec",
// ];

// document.write(
//  "Current Date: " +
//    days[today.getDay()] +
//    " " +
//    months[today.getMonth()] +
//    " " +
//    today.getDate() +
//    " " +
//    today.getFullYear() +
//    " " +
//    today.getUTCHours() +
//    ":" +
//    today.getUTCMinutes() +
//    ":" +
//    today.getSeconds() +
//    " " +
//    today.toTimeString() +
//    "<br>"
// );

// document.write(
//  "Ellapsed milliseconds since January 1, 1970: " + millSecSince1970 + "<br>"
// );

// document.write("Ellapsed minutes since January 1, 1970: " + minSince1970);



//  QUESTION 7


// var date = new Date();

// var hours = date.getHours();

// var ap;

// if (hours <= 12) {
//  ap = "AM";
//  alert("Its " + ap);
// } else {
//  ap = "PM";
//  alert("Its " + ap);
// }



//  QUESTION 8


// var laterDate = new Date("Dec 31, 2020");

// document.write("<h1>Later date: " + laterDate.toString() + "</h1>");



//  QUESTION 9



// var firstRamadan = new Date("June 18, 2015");
// var today = new Date();
// var todayMillSec = today.getTime();
// var ramadanMillSec = firstRamadan.getTime();

// var diff = todayMillSec - ramadanMillSec;

// var diffYear = diff / (1000 * 60 * 60 * 24);

// var noOfDays = Math.floor(diffYear);

// document.write(
//  "<h1>" + noOfDays + " days have passed since 1st Ramadan, 2015</h1>"
// );



//  QUESTION 10


// var referenceDate = new Date("Dec 05, 2015");
// var targetDate = new Date("Jan 01, 2015");
// var referMillSec = referenceDate.getTime();
// var targetMillSec = targetDate.getTime();

// var diff = referMillSec - targetMillSec;

// var diffSec = diff / (1000 * 60);

// var noOfSec = Math.floor(diffSec);

// document.write(
//  "<h1>On reference date " +
//    referenceDate.toString() +
//    ",<br>" +
//    noOfSec +
//    " seconds had passed since beginning of 2015</h1>"
// );



//  QUESTION 11



// var today = new Date();
// var currentDate = today.toString();

// var currentHour = today.getHours();

// var replaceHour = currentDate.replace(currentHour, --currentHour);

// document.write(
//  "<h1>current date: " +
//    currentDate +
//    "<br>1 hour ago: it was " +
//    replaceHour +
//    "</h1>"
// );



//  QUESTION 12


// var today = new Date();
// var currentDate = today.toString();

// var currentYear = today.getFullYear();

// var replaceYear = currentDate.replace(currentYear, currentYear - 100);

// document.write(
//  "<h1>current date: " +
//    currentDate +
//    "<br>100 years back: it was " +
//    replaceYear +
//    "</h1>"
// );



//  QUESTION 13


// var age = +prompt("Enter your age: ");

// var date = new Date();

// var currentYear = date.getFullYear();

// var birthYear = currentYear - age;

// document.write(
//  "<h1>Your age is " + age + "<br>Your birth year is " + birthYear + "</h1>"
// );



//  QUESTION 14


// var date = new Date();
// var months = [
//  "January",
//  "Febuary",
//  "March",
//  "April",
//  "May",
//  "June",
//  "July",
//  "August",
//  "September",
//  "Octuber",
//  "November",
//  "December",
// ];

// var customerName = "ABC Customer";
// var currentMonth = months[date.getMonth()];

// var noOfUnits = 410;
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;

// var netAmountPayable = noOfUnits * chargesPerUnit; Within Due Date
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge; After Due Date

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>No of units: " + noOfUnits + "</p>");
// document.write("<p>Charges per units: " + chargesPerUnit + "</p><br>");
// document.write(
//  "<p>Net amount payable (within Due Date): " + netAmountPayable + "</p>"
// );
// document.write("<p>Late payment surcharge: " + latePaymentSurcharge + "</p>");
// document.write(
//  "<p>Gross amount payable (after Due Date): " + grossAmountPayable + "</p>"
// );












// CHAPTER 34 - 38



//  QUESTION 1


// function getCurrentDate() {
//    var date = new Date();
//    var currentDate = date.toString();
//    return currentDate;
//  }

//  document.write("<h1>" + getCurrentDate() + "</h1>");


//  QUESTION 2



// function greet(firstName, lastName) {
//  var fullName = firstName + " " + lastName;
//  return "Hi! " + fullName + " Welcome to my website";
// }

// alert(greet("Ali", "Aatir"));



//  QUESTION 3



// function sum(numOne, numTwo) {
//    var sum = numOne + numTwo;
//    return sum;
//  }

//  alert(sum(2, 4));



//  QUESTION 4



// function calculator(numOne, numTwo, operator) {
//    switch (operator) {
//      case "+":
//        return numOne + numTwo;
//        break;
//      case "-":
//        return numOne - numTwo;
//        break;
//      case "/":
//        return numOne / numTwo;
//        break;
//      case "*":
//        return numOne * numTwo;
//        break;
//      default:
//        return "Error! Something went wrong";
//    }
//  }

//  alert(calculator(4, 2, "+"));



//  QUESTION 5



// function getSquare(num) {
//  var square = num ** num;
//  return square;
// }

// alert(getSquare(+prompt("Enter a number to square")));



//  QUESTION 6



// function factorialize(num) {
//    if (num < 0) {
//      return -1;
//    } else if (num == 0) {
//      return 1;
//    } else {
//      return num * factorialize(num - 1);
//    }
//  }
//  alert(factorialize(5));



//  QUESTION 7



// function counting(startNum, endNum) {
//  for (var i = startNum; i <= endNum; i++) {
//    document.write(i + "<br>");
//  }
// }

// counting(1, 10);



//  QUESTION 8



// function calculateHypotenuse(base, perpendicular) {
//    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//    function calculateSquare(num) {
//      return num ** num;
//    }
//    return hypotenuse;
//  }

//  alert(calculateHypotenuse(2, 3));



//  QUESTION 9



// function areaOfRectangle(width, height) {
//  var A = width * height;
//  return A;
// }

// var width = 20;
// var height = 10;

// alert("Area of a Rectangle is: " + areaOfRectangle(20, 10));
// alert("Area of a Rectangle is: " + areaOfRectangle(width, height));



//  QUESTION 10



// function checkPalindrome(word) {
//    var revString = "";
//    var lowerWord = word.toLowerCase();
//    for (var i = word.length - 1; i >= 0; i--) {
//      revString += lowerWord[i];
//    }
//    if (revString != "") {
//      if (revString === lowerWord) {
//        return "The word " + word + " is Palindrome";
//      } else {
//        return "The word " + word + " is not a Palindrome";
//      }
//    } else {
//      return "Please Enter a word!!!";
//    }
//  }

//  document.write(
//    "<h1>" +
//      checkPalindrome(prompt("Enter a word to check is palindrome or not")) +
//      "</h1>"
//  );



//  QUESTION 11



// var str = "Web Development Tutorial";

// function longestWord(string) {
//  var str = string.split(" ");
//  var longest = 0;
//  var word = null;
//  str.forEach(function (str) {
//    if (longest < str.length) {
//      longest = str.length;
//      word = str;
//    }
//  });
//  return word;
// }
// alert(longestWord(str));



//  QUESTION 12



// console.log(("str1,str2,str3,str4".match(/,/g) || []).length); logs 3

// var str = "JSResourceS.com";

// function letterCount(str) {
//  return (str.match(/o/g) || []).length;
// }

// alert(letterCount(str));



//  QUESTION 13


// const pi = 3.14;

// function calcCircumference(radius) {
//  var circumference = 2 * (pi * radius);

//  return "The circumference is " + circumference;
// }

// function calcArea(radius) {
//  var area = pi * radius ** radius;

//  return "The area is " + area;
// }

// alert("Circumference of circle " + calcCircumference(2));
// alert("Area of circle " + calcArea(2));
// CHAPTER 21 - 25


// QUESTION 1


// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hi! " + fullName + ", Welcome to our website.");


// QUESTION 2


// var favPhone = prompt("Enter your favorite mobile phone:");
// var length = favPhone.length;

// document.write(
//  "<h1>My fovrite phone is: " +
//    favPhone +
//    " <br>Lenght of string: " +
//    length +
//    "</h1>"
// );



// QUESTION 3


// var name = "Pakistani";
// var indexOfN = name.indexOf("n");

// document.write(
//  "<h1>String: " + name + "<br>Index of 'n': " + indexOfN + "</h1>"
// );


// QUESTION 4


// var name = "Hello World";
// var lastIndexOfN = name.lastIndexOf("l");

// document.write(
//  "<h1>String: " + name + "<br>Last index of 'l': " + lastIndexOfN + "</h1>"
// );



// QUESTION 5


// var name = "Pakistani";

// var charAtThird = name.slice(3, 4);

// document.write(
//  "<h1>String: " + name + "<br>Character at index 3: " + charAtThird + "</h1>"
// );


// QUESTION 6


// var str = "Q1";

// var concatStr = str.concat(str);
// document.write(
//  "<h1>Orignal String: " +
//    str +
//    "<br>Repeated string using string concat() method: " +
//    concatStr +
//    "</h1>"
// );



// QUESTION 7


// var name = "Hyderabad";
// var str = "Islam";

// var slicedName = name.slice(5);

// var replacedName = str + slicedName;

// document.write("Orignal Name: " + name + "<br>Replaced Name: " + replacedName);




// QUESTION 8



// var message =
//  "Ali and Sami are best friends.They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write("<h1>" + newMessage + "<h1>");



// QUESTION 9


// var val = "472";
// var convertedVal = Number(val);
// document.write(
//  "<h1>Value: " +
//    val +
//    "<br>Type: " +
//    typeof val +
//    "<br>Value: " +
//    convertedVal +
//    "<br>Type: " +
//    typeof convertedVal +
//    "<h1>"
// );



// QUESTION 10



// var input = prompt();

// var capitalInput = input.toUpperCase();

// document.write("User input: " + input + "<br>Upper case: " + capitalInput);
//  QUESTION 11
// var inp = prompt();
// function titleCase(string) {
//  var sentence = string.toLowerCase().split(" ");
//  for (var i = 0; i < sentence.length; i++) {
//    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//  }
//  document.write(sentence.join(" "));
//  return sentence;
// }
// titleCase(inp);



// QUESTION 12



// var num = 35.36;
// num = num.toString();
// var removeDot = num.replace(".", "");

// document.write("<h1>Number: " + num + "<br>Result: " + removeDot + "</h1>");



// QUESTION 13



// var input = prompt("Enter your username:");
// var isValid = false;

// for (var i = 0; i < input.length; i++) {
//  if (
//    input[i] === "@" ||
//    input[i] === "." ||
//    input[i] === "," ||
//    input[i] === "!"
//  ) {
//    alert("Please enter a valid username");
//    isValid = true;
//  }
// }

// if (!isValid) {
//  alert("Your username is: " + input);
// }



// QUESTION 14



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchItem = prompt("Enter an item to search:");

// var isValid = false;

// for (var i = 0; i < A.length; i++) {
//  if (searchItem.toLowerCase() === A[i]) {
//    document.write(
//      "<h1>" +
//        searchItem +
//        " is available at index " +
//        i +
//        " in our bakery</h1>"
//    );
//    isValid = true;
//  }
// }

// if (!isValid) {
//  document.write(
//    "<h1>We are sorry. " +
//      searchItem +
//      " is <strong>not available</strong> in our bakery</h1>"
//  );
// }



// QUESTION 15



// var password = prompt("Enter you password:");

// for (var i = 0; i < password.length; i++) {
//  if (
//    (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 122) ||
//    (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
//  ) {
//    if (password.length <= 6) {
//      if (
//        Number(password.slice(0, 1)) > 0 &&
//        Number(password.slice(0, 1)) <= 9
//      ) {
//        document.write("<h1>Password should not start with a number</h>");
//        break;
//      } else {
//        document.write(
//          "<h1>Congratulations! Your password is " + password + "</h>"
//        );
//        break;
//      }
//    } else {
//      document.write("<h1>Password must be 6 characters long</h>");
//      break;
//    }
//  } else {
//    document.write("<h1>Enter a valid password</h>");
//    break;
//  }
// }



// QUESTION 16



// var university = "University of Karachi";

// var uniArray = university.split("");

// for (var i = 0; i < uniArray.length; i++) {
//  document.write(uniArray[i] + "<br>");
// }



// QUESTION 17


// var name = prompt("Enter any name to get last character");
// var lastChar = name[name.length - 1];

// document.write(
//  "<h1>User input: " + name + "<br>Last character: " + lastChar + "</h1>"
// );



//  QUESTION 18



// var str = "The quick brown fox jumps over the lazy dog";

// function occurrences(string, subString, allowOverlapping) {
//  string += "";
//  subString += "";
//  if (subString.length <= 0) return string.length + 1;

//  var n = 0,
//    pos = 0,
//    step = allowOverlapping ? 1 : subString.length;

//  while (true) {
//    pos = string.indexOf(subString, pos);
//    if (pos >= 0) {
//      ++n;
//      pos += step;
//    } else break;
//  }
//  return n;
// }

// document.write(occurrences(str.toLowerCase(), "the"));













// CHAPTER 26 - 30


// QUESTION 1


// var num = 3.45214;

// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);

// document.write(
//  "<h1>number: " +
//    num +
//    "<br>round off value: " +
//    roundNum +
//    "<br>floor value: " +
//    floorNum +
//    "<br>ceil value: " +
//    ceilNum +
//    "</h1>"
// );


//  QUESTION 2



// var num = -2.673;

// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);

// document.write(
//  "<h1>number: " +
//    num +
//    "<br>round off value: " +
//    roundNum +
//    "<br>floor value: " +
//    floorNum +
//    "<br>ceil value: " +
//    ceilNum +
//    "</h1>"
// );



//  QUESTION 3



// var num = -4;

// var absVal = Math.abs(num);

// document.write("<h1>The absolute value of " + num + " is " + absVal + "</h1>");



//  QUESTION 4



// var randDice = Math.floor(Math.random() * 6 + 1);

// document.write("<h1>Random dice value: " + randDice + "</h1>");



//  QUESTION 5



// var randCoin = Math.floor(Math.random() * 2 + 1);
// var coin;

// if (randCoin === 1) {
//  coin = "Heads";
//  document.write(
//    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
//  );
// } else {
//  coin = "Tails";
//  document.write(
//    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
//  );
// }



//  QUESTION 6



// var randNum = Math.floor(Math.random() * 100 + 1);

// document.write("<h1>random number between 1 and 100: " + randNum + "</h1>");



//  QUESTION 7



// var userWeight = prompt("Enter your weight in kilograms");

// var seprateKilo = userWeight.slice(userWeight.indexOf("k"));

// var seprateWeight = userWeight.slice(0, userWeight.indexOf("k"));

// document.write(
//  "<h1>The weight of user is " + seprateWeight + " kilograms</h1>"
// );



//  QUESTION 8



// var secretNum = 6;

// var guessedNum = +prompt("Enter a number between 1 and 10");

// if (guessedNum === secretNum) {
//  alert("Congratulations! You guess the same number " + secretNum);
// } else {
//  alert("Try again!");
// }













// CHAPTER 31 - 34


//  QUESTION 1



// var today = new Date();

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// var months = [
//  "jan",
//  "feb",
//  "mar",
//  "apr",
//  "may",
//  "jun",
//  "jul",
//  "aug",
//  "sep",
//  "oct",
//  "nov",
//  "dec",
// ];

// document.write(
//  days[today.getDay()] +
//    " " +
//    months[today.getMonth()] +
//    " " +
//    today.getDate() +
//    " " +
//    today.getFullYear() +
//    " " +
//    today.getUTCHours() +
//    ":" +
//    today.getUTCMinutes() +
//    ":" +
//    today.getSeconds() +
//    " " +
//    today.toTimeString()
// );



//  QUESTION 2



// var months = [
//    "January",
//    "Febuary",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "Octuber",
//    "November",
//    "December",
//  ];

//  var monthNum = new Date();

//  var getMonth = months[monthNum.getUTCMonth()];

//  document.write("<h1>Current month: " + getMonth + "</h1>");




//  QUESTION 3



// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// var today = new Date();

// var getCurrentDay = days[today.getUTCDay()];

// alert("Today is " + getCurrentDay);



//  QUESTION 4



// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// var today = new Date();

// var getCurrentDay = days[today.getUTCDay()];

// if (getCurrentDay === "sun" || getCurrentDay === "sat") {
//  document.write("Its Fun day");
// } else {
//  document.write("Its working day");
// }




//  QUESTION 5


// var date = new Date();

// var getDay = date.getUTCDate();

// if (getDay < 16) {
//  document.write("<h1>First fifteen days of the month</h1>");
// } else {
//  document.write("<h1>Last days of the month</h1>");
// }



//  QUESTION 6


// var today = new Date();

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// var millSecSince1970 = today.getTime();
// var minSince1970 = (millSecSince1970 / 1000) * 60;

// var months = [
//  "jan",
//  "feb",
//  "mar",
//  "apr",
//  "may",
//  "jun",
//  "jul",
//  "aug",
//  "sep",
//  "oct",
//  "nov",
//  "dec",
// ];

// document.write(
//  "Current Date: " +
//    days[today.getDay()] +
//    " " +
//    months[today.getMonth()] +
//    " " +
//    today.getDate() +
//    " " +
//    today.getFullYear() +
//    " " +
//    today.getUTCHours() +
//    ":" +
//    today.getUTCMinutes() +
//    ":" +
//    today.getSeconds() +
//    " " +
//    today.toTimeString() +
//    "<br>"
// );

// document.write(
//  "Ellapsed milliseconds since January 1, 1970: " + millSecSince1970 + "<br>"
// );

// document.write("Ellapsed minutes since January 1, 1970: " + minSince1970);



//  QUESTION 7


// var date = new Date();

// var hours = date.getHours();

// var ap;

// if (hours <= 12) {
//  ap = "AM";
//  alert("Its " + ap);
// } else {
//  ap = "PM";
//  alert("Its " + ap);
// }



//  QUESTION 8


// var laterDate = new Date("Dec 31, 2020");

// document.write("<h1>Later date: " + laterDate.toString() + "</h1>");



//  QUESTION 9



// var firstRamadan = new Date("June 18, 2015");
// var today = new Date();
// var todayMillSec = today.getTime();
// var ramadanMillSec = firstRamadan.getTime();

// var diff = todayMillSec - ramadanMillSec;

// var diffYear = diff / (1000 * 60 * 60 * 24);

// var noOfDays = Math.floor(diffYear);

// document.write(
//  "<h1>" + noOfDays + " days have passed since 1st Ramadan, 2015</h1>"
// );



//  QUESTION 10


// var referenceDate = new Date("Dec 05, 2015");
// var targetDate = new Date("Jan 01, 2015");
// var referMillSec = referenceDate.getTime();
// var targetMillSec = targetDate.getTime();

// var diff = referMillSec - targetMillSec;

// var diffSec = diff / (1000 * 60);

// var noOfSec = Math.floor(diffSec);

// document.write(
//  "<h1>On reference date " +
//    referenceDate.toString() +
//    ",<br>" +
//    noOfSec +
//    " seconds had passed since beginning of 2015</h1>"
// );



//  QUESTION 11



// var today = new Date();
// var currentDate = today.toString();

// var currentHour = today.getHours();

// var replaceHour = currentDate.replace(currentHour, --currentHour);

// document.write(
//  "<h1>current date: " +
//    currentDate +
//    "<br>1 hour ago: it was " +
//    replaceHour +
//    "</h1>"
// );



//  QUESTION 12


// var today = new Date();
// var currentDate = today.toString();

// var currentYear = today.getFullYear();

// var replaceYear = currentDate.replace(currentYear, currentYear - 100);

// document.write(
//  "<h1>current date: " +
//    currentDate +
//    "<br>100 years back: it was " +
//    replaceYear +
//    "</h1>"
// );



//  QUESTION 13


// var age = +prompt("Enter your age: ");

// var date = new Date();

// var currentYear = date.getFullYear();

// var birthYear = currentYear - age;

// document.write(
//  "<h1>Your age is " + age + "<br>Your birth year is " + birthYear + "</h1>"
// );



//  QUESTION 14


// var date = new Date();
// var months = [
//  "January",
//  "Febuary",
//  "March",
//  "April",
//  "May",
//  "June",
//  "July",
//  "August",
//  "September",
//  "Octuber",
//  "November",
//  "December",
// ];

// var customerName = "ABC Customer";
// var currentMonth = months[date.getMonth()];

// var noOfUnits = 410;
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;

// var netAmountPayable = noOfUnits * chargesPerUnit; Within Due Date
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge; After Due Date

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>No of units: " + noOfUnits + "</p>");
// document.write("<p>Charges per units: " + chargesPerUnit + "</p><br>");
// document.write(
//  "<p>Net amount payable (within Due Date): " + netAmountPayable + "</p>"
// );
// document.write("<p>Late payment surcharge: " + latePaymentSurcharge + "</p>");
// document.write(
//  "<p>Gross amount payable (after Due Date): " + grossAmountPayable + "</p>"
// );












// CHAPTER 34 - 38



//  QUESTION 1


// function getCurrentDate() {
//    var date = new Date();
//    var currentDate = date.toString();
//    return currentDate;
//  }

//  document.write("<h1>" + getCurrentDate() + "</h1>");


//  QUESTION 2



// function greet(firstName, lastName) {
//  var fullName = firstName + " " + lastName;
//  return "Hi! " + fullName + " Welcome to my website";
// }

// alert(greet("Ali", "Aatir"));



//  QUESTION 3



// function sum(numOne, numTwo) {
//    var sum = numOne + numTwo;
//    return sum;
//  }

//  alert(sum(2, 4));



//  QUESTION 4



// function calculator(numOne, numTwo, operator) {
//    switch (operator) {
//      case "+":
//        return numOne + numTwo;
//        break;
//      case "-":
//        return numOne - numTwo;
//        break;
//      case "/":
//        return numOne / numTwo;
//        break;
//      case "*":
//        return numOne * numTwo;
//        break;
//      default:
//        return "Error! Something went wrong";
//    }
//  }

//  alert(calculator(4, 2, "+"));



//  QUESTION 5



// function getSquare(num) {
//  var square = num ** num;
//  return square;
// }

// alert(getSquare(+prompt("Enter a number to square")));



//  QUESTION 6



// function factorialize(num) {
//    if (num < 0) {
//      return -1;
//    } else if (num == 0) {
//      return 1;
//    } else {
//      return num * factorialize(num - 1);
//    }
//  }
//  alert(factorialize(5));



//  QUESTION 7



// function counting(startNum, endNum) {
//  for (var i = startNum; i <= endNum; i++) {
//    document.write(i + "<br>");
//  }
// }

// counting(1, 10);



//  QUESTION 8



// function calculateHypotenuse(base, perpendicular) {
//    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//    function calculateSquare(num) {
//      return num ** num;
//    }
//    return hypotenuse;
//  }

//  alert(calculateHypotenuse(2, 3));



//  QUESTION 9



// function areaOfRectangle(width, height) {
//  var A = width * height;
//  return A;
// }

// var width = 20;
// var height = 10;

// alert("Area of a Rectangle is: " + areaOfRectangle(20, 10));
// alert("Area of a Rectangle is: " + areaOfRectangle(width, height));



//  QUESTION 10



// function checkPalindrome(word) {
//    var revString = "";
//    var lowerWord = word.toLowerCase();
//    for (var i = word.length - 1; i >= 0; i--) {
//      revString += lowerWord[i];
//    }
//    if (revString != "") {
//      if (revString === lowerWord) {
//        return "The word " + word + " is Palindrome";
//      } else {
//        return "The word " + word + " is not a Palindrome";
//      }
//    } else {
//      return "Please Enter a word!!!";
//    }
//  }

//  document.write(
//    "<h1>" +
//      checkPalindrome(prompt("Enter a word to check is palindrome or not")) +
//      "</h1>"
//  );



//  QUESTION 11



// var str = "Web Development Tutorial";

// function longestWord(string) {
//  var str = string.split(" ");
//  var longest = 0;
//  var word = null;
//  str.forEach(function (str) {
//    if (longest < str.length) {
//      longest = str.length;
//      word = str;
//    }
//  });
//  return word;
// }
// alert(longestWord(str));



//  QUESTION 12



// console.log(("str1,str2,str3,str4".match(/,/g) || []).length); logs 3

// var str = "JSResourceS.com";

// function letterCount(str) {
//  return (str.match(/o/g) || []).length;
// }

// alert(letterCount(str));



//  QUESTION 13


// const pi = 3.14;

// function calcCircumference(radius) {
//  var circumference = 2 * (pi * radius);

//  return "The circumference is " + circumference;
// }

// function calcArea(radius) {
//  var area = pi * radius ** radius;

//  return "The area is " + area;
// }

// alert("Circumference of circle " + calcCircumference(2));
// alert("Area of circle " + calcArea(2));
// CHAPTER 21 - 25


// QUESTION 1


// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hi! " + fullName + ", Welcome to our website.");


// QUESTION 2


// var favPhone = prompt("Enter your favorite mobile phone:");
// var length = favPhone.length;

// document.write(
//  "<h1>My fovrite phone is: " +
//    favPhone +
//    " <br>Lenght of string: " +
//    length +
//    "</h1>"
// );



// QUESTION 3


// var name = "Pakistani";
// var indexOfN = name.indexOf("n");

// document.write(
//  "<h1>String: " + name + "<br>Index of 'n': " + indexOfN + "</h1>"
// );


// QUESTION 4


// var name = "Hello World";
// var lastIndexOfN = name.lastIndexOf("l");

// document.write(
//  "<h1>String: " + name + "<br>Last index of 'l': " + lastIndexOfN + "</h1>"
// );



// QUESTION 5


// var name = "Pakistani";

// var charAtThird = name.slice(3, 4);

// document.write(
//  "<h1>String: " + name + "<br>Character at index 3: " + charAtThird + "</h1>"
// );


// QUESTION 6


// var str = "Q1";

// var concatStr = str.concat(str);
// document.write(
//  "<h1>Orignal String: " +
//    str +
//    "<br>Repeated string using string concat() method: " +
//    concatStr +
//    "</h1>"
// );



// QUESTION 7


// var name = "Hyderabad";
// var str = "Islam";

// var slicedName = name.slice(5);

// var replacedName = str + slicedName;

// document.write("Orignal Name: " + name + "<br>Replaced Name: " + replacedName);




// QUESTION 8



// var message =
//  "Ali and Sami are best friends.They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write("<h1>" + newMessage + "<h1>");



// QUESTION 9


// var val = "472";
// var convertedVal = Number(val);
// document.write(
//  "<h1>Value: " +
//    val +
//    "<br>Type: " +
//    typeof val +
//    "<br>Value: " +
//    convertedVal +
//    "<br>Type: " +
//    typeof convertedVal +
//    "<h1>"
// );



// QUESTION 10



// var input = prompt();

// var capitalInput = input.toUpperCase();

// document.write("User input: " + input + "<br>Upper case: " + capitalInput);
//  QUESTION 11
// var inp = prompt();
// function titleCase(string) {
//  var sentence = string.toLowerCase().split(" ");
//  for (var i = 0; i < sentence.length; i++) {
//    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//  }
//  document.write(sentence.join(" "));
//  return sentence;
// }
// titleCase(inp);



// QUESTION 12



// var num = 35.36;
// num = num.toString();
// var removeDot = num.replace(".", "");

// document.write("<h1>Number: " + num + "<br>Result: " + removeDot + "</h1>");



// QUESTION 13



// var input = prompt("Enter your username:");
// var isValid = false;

// for (var i = 0; i < input.length; i++) {
//  if (
//    input[i] === "@" ||
//    input[i] === "." ||
//    input[i] === "," ||
//    input[i] === "!"
//  ) {
//    alert("Please enter a valid username");
//    isValid = true;
//  }
// }

// if (!isValid) {
//  alert("Your username is: " + input);
// }



// QUESTION 14



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchItem = prompt("Enter an item to search:");

// var isValid = false;

// for (var i = 0; i < A.length; i++) {
//  if (searchItem.toLowerCase() === A[i]) {
//    document.write(
//      "<h1>" +
//        searchItem +
//        " is available at index " +
//        i +
//        " in our bakery</h1>"
//    );
//    isValid = true;
//  }
// }

// if (!isValid) {
//  document.write(
//    "<h1>We are sorry. " +
//      searchItem +
//      " is <strong>not available</strong> in our bakery</h1>"
//  );
// }



// QUESTION 15



// var password = prompt("Enter you password:");

// for (var i = 0; i < password.length; i++) {
//  if (
//    (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 122) ||
//    (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
//  ) {
//    if (password.length <= 6) {
//      if (
//        Number(password.slice(0, 1)) > 0 &&
//        Number(password.slice(0, 1)) <= 9
//      ) {
//        document.write("<h1>Password should not start with a number</h>");
//        break;
//      } else {
//        document.write(
//          "<h1>Congratulations! Your password is " + password + "</h>"
//        );
//        break;
//      }
//    } else {
//      document.write("<h1>Password must be 6 characters long</h>");
//      break;
//    }
//  } else {
//    document.write("<h1>Enter a valid password</h>");
//    break;
//  }
// }



// QUESTION 16



// var university = "University of Karachi";

// var uniArray = university.split("");

// for (var i = 0; i < uniArray.length; i++) {
//  document.write(uniArray[i] + "<br>");
// }



// QUESTION 17


// var name = prompt("Enter any name to get last character");
// var lastChar = name[name.length - 1];

// document.write(
//  "<h1>User input: " + name + "<br>Last character: " + lastChar + "</h1>"
// );



//  QUESTION 18



// var str = "The quick brown fox jumps over the lazy dog";

// function occurrences(string, subString, allowOverlapping) {
//  string += "";
//  subString += "";
//  if (subString.length <= 0) return string.length + 1;

//  var n = 0,
//    pos = 0,
//    step = allowOverlapping ? 1 : subString.length;

//  while (true) {
//    pos = string.indexOf(subString, pos);
//    if (pos >= 0) {
//      ++n;
//      pos += step;
//    } else break;
//  }
//  return n;
// }

// document.write(occurrences(str.toLowerCase(), "the"));













// CHAPTER 26 - 30


// QUESTION 1


// var num = 3.45214;

// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);

// document.write(
//  "<h1>number: " +
//    num +
//    "<br>round off value: " +
//    roundNum +
//    "<br>floor value: " +
//    floorNum +
//    "<br>ceil value: " +
//    ceilNum +
//    "</h1>"
// );


//  QUESTION 2



// var num = -2.673;

// var roundNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);

// document.write(
//  "<h1>number: " +
//    num +
//    "<br>round off value: " +
//    roundNum +
//    "<br>floor value: " +
//    floorNum +
//    "<br>ceil value: " +
//    ceilNum +
//    "</h1>"
// );



//  QUESTION 3



// var num = -4;

// var absVal = Math.abs(num);

// document.write("<h1>The absolute value of " + num + " is " + absVal + "</h1>");



//  QUESTION 4



// var randDice = Math.floor(Math.random() * 6 + 1);

// document.write("<h1>Random dice value: " + randDice + "</h1>");



//  QUESTION 5



// var randCoin = Math.floor(Math.random() * 2 + 1);
// var coin;

// if (randCoin === 1) {
//  coin = "Heads";
//  document.write(
//    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
//  );
// } else {
//  coin = "Tails";
//  document.write(
//    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
//  );
// }



//  QUESTION 6



// var randNum = Math.floor(Math.random() * 100 + 1);

// document.write("<h1>random number between 1 and 100: " + randNum + "</h1>");



//  QUESTION 7



// var userWeight = prompt("Enter your weight in kilograms");

// var seprateKilo = userWeight.slice(userWeight.indexOf("k"));

// var seprateWeight = userWeight.slice(0, userWeight.indexOf("k"));

// document.write(
//  "<h1>The weight of user is " + seprateWeight + " kilograms</h1>"
// );



//  QUESTION 8



// var secretNum = 6;

// var guessedNum = +prompt("Enter a number between 1 and 10");

// if (guessedNum === secretNum) {
//  alert("Congratulations! You guess the same number " + secretNum);
// } else {
//  alert("Try again!");
// }













// CHAPTER 31 - 34


//  QUESTION 1



// var today = new Date();

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// var months = [
//  "jan",
//  "feb",
//  "mar",
//  "apr",
//  "may",
//  "jun",
//  "jul",
//  "aug",
//  "sep",
//  "oct",
//  "nov",
//  "dec",
// ];

// document.write(
//  days[today.getDay()] +
//    " " +
//    months[today.getMonth()] +
//    " " +
//    today.getDate() +
//    " " +
//    today.getFullYear() +
//    " " +
//    today.getUTCHours() +
//    ":" +
//    today.getUTCMinutes() +
//    ":" +
//    today.getSeconds() +
//    " " +
//    today.toTimeString()
// );



//  QUESTION 2



// var months = [
//    "January",
//    "Febuary",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "Octuber",
//    "November",
//    "December",
//  ];

//  var monthNum = new Date();

//  var getMonth = months[monthNum.getUTCMonth()];

//  document.write("<h1>Current month: " + getMonth + "</h1>");




//  QUESTION 3



// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// var today = new Date();

// var getCurrentDay = days[today.getUTCDay()];

// alert("Today is " + getCurrentDay);



//  QUESTION 4



// var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// var today = new Date();

// var getCurrentDay = days[today.getUTCDay()];

// if (getCurrentDay === "sun" || getCurrentDay === "sat") {
//  document.write("Its Fun day");
// } else {
//  document.write("Its working day");
// }




//  QUESTION 5


// var date = new Date();

// var getDay = date.getUTCDate();

// if (getDay < 16) {
//  document.write("<h1>First fifteen days of the month</h1>");
// } else {
//  document.write("<h1>Last days of the month</h1>");
// }



//  QUESTION 6


// var today = new Date();

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// var millSecSince1970 = today.getTime();
// var minSince1970 = (millSecSince1970 / 1000) * 60;

// var months = [
//  "jan",
//  "feb",
//  "mar",
//  "apr",
//  "may",
//  "jun",
//  "jul",
//  "aug",
//  "sep",
//  "oct",
//  "nov",
//  "dec",
// ];

// document.write(
//  "Current Date: " +
//    days[today.getDay()] +
//    " " +
//    months[today.getMonth()] +
//    " " +
//    today.getDate() +
//    " " +
//    today.getFullYear() +
//    " " +
//    today.getUTCHours() +
//    ":" +
//    today.getUTCMinutes() +
//    ":" +
//    today.getSeconds() +
//    " " +
//    today.toTimeString() +
//    "<br>"
// );

// document.write(
//  "Ellapsed milliseconds since January 1, 1970: " + millSecSince1970 + "<br>"
// );

// document.write("Ellapsed minutes since January 1, 1970: " + minSince1970);



//  QUESTION 7


// var date = new Date();

// var hours = date.getHours();

// var ap;

// if (hours <= 12) {
//  ap = "AM";
//  alert("Its " + ap);
// } else {
//  ap = "PM";
//  alert("Its " + ap);
// }



//  QUESTION 8


// var laterDate = new Date("Dec 31, 2020");

// document.write("<h1>Later date: " + laterDate.toString() + "</h1>");



//  QUESTION 9



// var firstRamadan = new Date("June 18, 2015");
// var today = new Date();
// var todayMillSec = today.getTime();
// var ramadanMillSec = firstRamadan.getTime();

// var diff = todayMillSec - ramadanMillSec;

// var diffYear = diff / (1000 * 60 * 60 * 24);

// var noOfDays = Math.floor(diffYear);

// document.write(
//  "<h1>" + noOfDays + " days have passed since 1st Ramadan, 2015</h1>"
// );



//  QUESTION 10


// var referenceDate = new Date("Dec 05, 2015");
// var targetDate = new Date("Jan 01, 2015");
// var referMillSec = referenceDate.getTime();
// var targetMillSec = targetDate.getTime();

// var diff = referMillSec - targetMillSec;

// var diffSec = diff / (1000 * 60);

// var noOfSec = Math.floor(diffSec);

// document.write(
//  "<h1>On reference date " +
//    referenceDate.toString() +
//    ",<br>" +
//    noOfSec +
//    " seconds had passed since beginning of 2015</h1>"
// );



//  QUESTION 11



// var today = new Date();
// var currentDate = today.toString();

// var currentHour = today.getHours();

// var replaceHour = currentDate.replace(currentHour, --currentHour);

// document.write(
//  "<h1>current date: " +
//    currentDate +
//    "<br>1 hour ago: it was " +
//    replaceHour +
//    "</h1>"
// );



//  QUESTION 12


// var today = new Date();
// var currentDate = today.toString();

// var currentYear = today.getFullYear();

// var replaceYear = currentDate.replace(currentYear, currentYear - 100);

// document.write(
//  "<h1>current date: " +
//    currentDate +
//    "<br>100 years back: it was " +
//    replaceYear +
//    "</h1>"
// );



//  QUESTION 13


// var age = +prompt("Enter your age: ");

// var date = new Date();

// var currentYear = date.getFullYear();

// var birthYear = currentYear - age;

// document.write(
//  "<h1>Your age is " + age + "<br>Your birth year is " + birthYear + "</h1>"
// );



//  QUESTION 14


// var date = new Date();
// var months = [
//  "January",
//  "Febuary",
//  "March",
//  "April",
//  "May",
//  "June",
//  "July",
//  "August",
//  "September",
//  "Octuber",
//  "November",
//  "December",
// ];

// var customerName = "ABC Customer";
// var currentMonth = months[date.getMonth()];

// var noOfUnits = 410;
// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;

// var netAmountPayable = noOfUnits * chargesPerUnit; Within Due Date
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge; After Due Date

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>No of units: " + noOfUnits + "</p>");
// document.write("<p>Charges per units: " + chargesPerUnit + "</p><br>");
// document.write(
//  "<p>Net amount payable (within Due Date): " + netAmountPayable + "</p>"
// );
// document.write("<p>Late payment surcharge: " + latePaymentSurcharge + "</p>");
// document.write(
//  "<p>Gross amount payable (after Due Date): " + grossAmountPayable + "</p>"
// );












// CHAPTER 34 - 38



//  QUESTION 1


// function getCurrentDate() {
//    var date = new Date();
//    var currentDate = date.toString();
//    return currentDate;
//  }

//  document.write("<h1>" + getCurrentDate() + "</h1>");


//  QUESTION 2



// function greet(firstName, lastName) {
//  var fullName = firstName + " " + lastName;
//  return "Hi! " + fullName + " Welcome to my website";
// }

// alert(greet("Ali", "Aatir"));



//  QUESTION 3



// function sum(numOne, numTwo) {
//    var sum = numOne + numTwo;
//    return sum;
//  }

//  alert(sum(2, 4));



//  QUESTION 4



// function calculator(numOne, numTwo, operator) {
//    switch (operator) {
//      case "+":
//        return numOne + numTwo;
//        break;
//      case "-":
//        return numOne - numTwo;
//        break;
//      case "/":
//        return numOne / numTwo;
//        break;
//      case "*":
//        return numOne * numTwo;
//        break;
//      default:
//        return "Error! Something went wrong";
//    }
//  }

//  alert(calculator(4, 2, "+"));



//  QUESTION 5



// function getSquare(num) {
//  var square = num ** num;
//  return square;
// }

// alert(getSquare(+prompt("Enter a number to square")));



//  QUESTION 6



// function factorialize(num) {
//    if (num < 0) {
//      return -1;
//    } else if (num == 0) {
//      return 1;
//    } else {
//      return num * factorialize(num - 1);
//    }
//  }
//  alert(factorialize(5));



//  QUESTION 7



// function counting(startNum, endNum) {
//  for (var i = startNum; i <= endNum; i++) {
//    document.write(i + "<br>");
//  }
// }

// counting(1, 10);



//  QUESTION 8



// function calculateHypotenuse(base, perpendicular) {
//    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//    function calculateSquare(num) {
//      return num ** num;
//    }
//    return hypotenuse;
//  }

//  alert(calculateHypotenuse(2, 3));



//  QUESTION 9



// function areaOfRectangle(width, height) {
//  var A = width * height;
//  return A;
// }

// var width = 20;
// var height = 10;

// alert("Area of a Rectangle is: " + areaOfRectangle(20, 10));
// alert("Area of a Rectangle is: " + areaOfRectangle(width, height));



//  QUESTION 10



// function checkPalindrome(word) {
//    var revString = "";
//    var lowerWord = word.toLowerCase();
//    for (var i = word.length - 1; i >= 0; i--) {
//      revString += lowerWord[i];
//    }
//    if (revString != "") {
//      if (revString === lowerWord) {
//        return "The word " + word + " is Palindrome";
//      } else {
//        return "The word " + word + " is not a Palindrome";
//      }
//    } else {
//      return "Please Enter a word!!!";
//    }
//  }

//  document.write(
//    "<h1>" +
//      checkPalindrome(prompt("Enter a word to check is palindrome or not")) +
//      "</h1>"
//  );



//  QUESTION 11



// var str = "Web Development Tutorial";

// function longestWord(string) {
//  var str = string.split(" ");
//  var longest = 0;
//  var word = null;
//  str.forEach(function (str) {
//    if (longest < str.length) {
//      longest = str.length;
//      word = str;
//    }
//  });
//  return word;
// }
// alert(longestWord(str));



//  QUESTION 12



// console.log(("str1,str2,str3,str4".match(/,/g) || []).length); logs 3

// var str = "JSResourceS.com";

// function letterCount(str) {
//  return (str.match(/o/g) || []).length;
// }

// alert(letterCount(str));



//  QUESTION 13


// const pi = 3.14;

// function calcCircumference(radius) {
//  var circumference = 2 * (pi * radius);

//  return "The circumference is " + circumference;
// }

// function calcArea(radius) {
//  var area = pi * radius ** radius;

//  return "The area is " + area;
// }

// alert("Circumference of circle " + calcCircumference(2));
// alert("Area of circle " + calcArea(2));

