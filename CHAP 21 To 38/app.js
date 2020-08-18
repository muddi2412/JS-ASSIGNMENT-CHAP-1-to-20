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