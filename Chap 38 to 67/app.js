// CHAPTER 38 - 42

//  QUESTION 1

// function power(a, b) {
//     var power = a ** b;
//     return power;
//   }
  
//   document.write("<h1>" + power(2, 3) + "</h1>");


//  QUESTION 2

// function checkLeapYear(year) {
//     if (year % 4 === 0) {
//       return year + " is a Leap year";
//     } else {
//       return year + " is not a Leap year";
//     }
//   }
  
//   console.log(checkLeapYear(2012));
//   console.log(checkLeapYear(2016));
//   console.log(checkLeapYear(2020));
  

//  QUESTION 3

// function areaOfTriangle(a, b, c) {
//     var S = (a + b + c) / 2;
//     var area = S * (S - a) * (S - b) * (S - c);
//     return area;
//   }
  
//   document.write("<h1>" + areaOfTriangle(10, 10, 10) + "</h1>");


//  QUESTION 4

// function average(marksOne, marksTwo, marksThree) {
//     var average = (marksOne + marksTwo + marksThree) / 3;
  
//     return average;
//   }
  
//   function percentage(totalMarks, obtainedMarks) {
//     var totalMarks = 300;
//     var percentage = (obtainedMarks / totalMarks) * 100;
  
//     return percentage;
//   }
  
//   function result(marksOne, marksTwo, marksThree) {
//     var totalMarks = 300;
//     var obtainedMarks = marksOne + marksTwo + marksThree;
//     var avg = average(marksOne, marksTwo, marksThree).toFixed(2);
//     var per = percentage(totalMarks, obtainedMarks).toFixed(2);
  
//     document.write("<h1>Average " + avg + " Percentage " + per + "%</h1>");
//   }
  
//   result(86, 73, 59);


//  QUESTION 5

// function findIndex(str, character) {
//     var isValid = false;
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === character) {
//         isValid = true;
//         return i;
//         break;
//       }
//     }
  
//     if (!isValid) {
//       return character + " is not available in " + str;
//     }
//   }
  
//   document.write("<h1>" + findIndex("pakistan", "t") + "</h1>");


//  QUESTION 6

// var str = "afoeoibuaru";

// function deleteVowels(sentence) {
//   sentence = sentence.replace(/a/g, "");
//   sentence = sentence.replace(/e/g, "");
//   sentence = sentence.replace(/i/g, "");
//   sentence = sentence.replace(/o/g, "");
//   sentence = sentence.replace(/u/g, "");
//   return sentence;
// }

// document.write("<h1>Orignal String: " + str + "</h1>");
// document.write("<h1>Without Vowels: " + deleteVowels(str) + "</h1>");

//  QUESTION 7


// var sentence = "Pleases read this application and give me gratuity";

// function countTwoVowels(str) {
//   var getSec = str.indexOf("e", str.indexOf("e") + 5);
//   var first = str.slice(str.indexOf("e"), str.indexOf("e") + 2);
//   var second = str.slice(getSec, getSec + 2);
//   var third = str.slice(str.indexOf("u"), str.indexOf("u") + 2);

//   switch (first) {
//     case "ea":
//       document.write("<h1>" + first + "</h1>");
//       break;
//     default:
//       return "Error First";
//   }

//   switch (second) {
//     case "ea":
//       document.write("<h1>" + second + "</h1>");
//       break;
//     default:
//       return "Error Second";
//   }

//   switch (third) {
//     case "ui":
//       document.write("<h1>" + third + "</h1>");
//       break;
//     default:
//       return "Error Third";
//   }
// }

// countTwoVowels(sentence);


//  QUESTION 8

// function kmToMeter(km) {
//     var meter = km * 1000;
//     return meter;
//   }
  
//   function kmToFeet(km) {
//     var feet = km * 3281;
//     return feet;
//   }
  
//   function kmToInches(km) {
//     var inches = km * 39370;
//     return inches;
//   }
  
//   function kmToCentimeter(km) {
//     var centimeters = km * 100000;
//     return centimeters;
//   }
  
//   function getDistance(km) {
//     document.write("<h1>Distance in Kilometers " + km + "</h1>");
//     document.write("<h1>Distance in Meters " + kmToMeter(km) + "</h1>");
//     document.write("<h1>Distance in Feet " + kmToFeet(km) + "</h1>");
//     document.write("<h1>Distance in Inches " + kmToInches(km) + "</h1>");
//     document.write("<h1>Distance in Centimeters " + kmToCentimeter(km) + "</h1>");
//   }
  
//   getDistance(58);

//  QUESTION 9

// function overtimePay(noOfEmployes) {
//     var count = 1,
//       working_hours,
//       over_time;
//     var over_time_pay;
  
//     while (count <= noOfEmployes) {
//       working_hours = prompt(
//         "Enter the working hours of employee no " + count + ":"
//       );
//       if (working_hours > 40) {
//         over_time = working_hours - 40;
//         over_time_pay = over_time * 12.0;
//         document.write(
//           "<h1>Employee No " +
//             count +
//             " overtime pay is " +
//             over_time_pay +
//             "</h1>"
//         );
//       } else
//         document.write(
//           "<h1>You have to work for more than 40 hours to get over time pay</h1>"
//         );
  
//       count++;
//     }
//   }
  
//   overtimePay(2);

//  QUESTION 10
  
// function currencyDenomination(cash) {
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln(
//       "<h1>You will have ",
//       hundred,
//       " hundred notes ",
//       fifty,
//       " fifty notes ",
//       ten,
//       " ten notes.</h1>"
//     );
//   }
//   currencyDenomination(470);

// CHAPTER 43 - 48

// QUESTION 1

// function showAlert() {
//     alert("Asalam-o-Alikum!");
//   }
  

// QUESTION 2

// function showAlert() {
//     alert("Thanks for purchasing a phone from us");
//   }
  

// QUESTION 3


// function delete_row(e) {
//     e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
//   }

// QUESTION 4

// var img = document.getElementById("img");

// function mouseOver() {
//   img.src = "images/car2.jpg";
// }

// function mouseOut() {
//   img.src = "images/car1.jpg";
// }


// QUESTION 5

// var counter = document.getElementById("counter");

// var count = 0;

// function countIncrease() {
//   count++;
//   counter.innerHTML = count;
// }

// function countDecrease() {
//   count--;
//   counter.innerHTML = count;
// }





// Chapter 49 - 52

// Question # 1


// function getData() {
//     var firstName = document.getElementById("txtFirstName");
//     var lastName = document.getElementById("txtLastName");
//     var email = document.getElementById("txtEmail");
//     var password = document.getElementById("txtPassword");
  
//     var showData = document.getElementById("formData");
  
//     var formData = [firstName, lastName, email, password];
  
//     for (var i = 0; i < formData.length; i++) {
//       showData.innerHTML += formData[i].value + "   ";
//     }
//   }




//   Question # 2



//   var para =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo deleniti unde cumque nisi facere hic.Libero id quos tenetur blanditiis, error harum, explicabo, rerum itaque nostrum quae nesciunt voluptatem";

// function fullPara() {
//   var p = document.getElementById("para");
//   p.innerHTML = para;
// }




// Question # 3

// var table = document.getElementById("table");

// var count = 0;
// var txt = "Delete";

// function delete_row(e) {
//   e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
// }

// function edit_row(e) {
//   var editName = prompt(
//     "Enter updated Name",
//     e.parentNode.parentNode.childNodes[1].innerText
//   );

//   var editClass = prompt(
//     "Enter updated Class",
//     e.parentNode.parentNode.childNodes[2].innerText
//   );

//   e.parentNode.parentNode.childNodes[1].innerText = editName;
//   e.parentNode.parentNode.childNodes[2].innerText = editClass;
// }

// function insertData() {
//   var name = document.getElementById("txtName");
//   var _class = document.getElementById("txtClass");

//   var tr = document.createElement("tr");
//   var tdIndex = document.createElement("td");
//   var tdName = document.createElement("td");
//   var tdClass = document.createElement("td");
//   var tdBtn = document.createElement("td");
//   var btnDelete = document.createElement("button");
//   var btnEdit = document.createElement("button");

//   if (name.value != "" && _class.value != "") {
//     var countText = document.createTextNode(count++);
//     var nameText = document.createTextNode(name.value);
//     var classText = document.createTextNode(_class.value);
//     var btnDeleteText = document.createTextNode("Delete");
//     var btnEditText = document.createTextNode("Edit");

//     btnDelete.setAttribute("onclick", "delete_row(this)");
//     btnEdit.setAttribute("onclick", "edit_row(this)");

//     tdIndex.appendChild(countText);
//     tdName.appendChild(nameText);
//     tdClass.appendChild(classText);
//     btnDelete.appendChild(btnDeleteText);
//     btnEdit.appendChild(btnEditText);

//     tr.appendChild(tdIndex);
//     tr.appendChild(tdName);
//     tr.appendChild(tdClass);
//     tr.appendChild(tdBtn);

//     tdBtn.appendChild(btnEdit);
//     tdBtn.appendChild(btnDelete);

//     table.appendChild(tr);

//     name.value = "";
//     _class.value = "";
//   } else {
//     alert("Input feilds can't be empty");
//   }
// }





// Chapter 52 - 57

// Question 01



// var btnClose = document.getElementById("btnClose");
// var modal = document.getElementById("modal");

// function getImage(e) {
//   var modalImage = document.getElementById("modalImage");

//   modal.style.display = "block";
//   btnClose.style.display = "block";
//   modalImage.src = e.src;
// }

// function closeModal() {
//   btnClose.style.display = "none";
//   modal.style.display = "none";
// }





// Chapter 58 - 67
// Question 01



// var mainContent = document.getElementById("main-content");
// var main = document.getElementById("main");
// var render = document.getElementsByClassName("render");
// var mainRender = document.getElementById("main-render");
// var firstName = document.getElementById("first-name");
// var lastName = document.getElementById("last-name");
// var email = document.getElementById("email");
// var children = mainContent.childNodes;

// var elements = [];

// for (var i = 0; i < mainContent.childNodes.length; i++) {
//   var child = mainContent.childNodes[i];
//   if (child.nodeType == 1) {
//     elements.push(child);
//   }
// }

// var inText = elements[0].innerText;
// var text = document.createTextNode(inText);

// var inText2 = elements[1].innerText;
// var text2 = document.createTextNode(inText2);

// var inText3 = elements[2].innerText;
// var text3 = document.createTextNode(inText3);

// var inText4 = elements[3].innerText;
// var text4 = document.createTextNode(inText4);

// var inText5 = elements[4].innerText;
// var text5 = document.createTextNode(inText5);

// main.appendChild(text);
// main.appendChild(text2);
// main.appendChild(text3);
// main.appendChild(text4);
// main.appendChild(text5);

// console.log(render[0].innerHTML);

// for (var i = 0; i < render.length; i++) {
//   mainRender.innerHTML += render[i].innerHTML;
// }

// firstName.value = "Set Value using JS";
// lastName.value = "Set Value using JS";
// email.value = "Set Value using JS";


// Question#2


// var formContent = document.getElementById("form-content");
// var lastName = document.getElementById("last-name");
// var mainContent = document.getElementById("main-content");
// var email = document.getElementById("email");

// var main = document.getElementById("main");

// main.innerHTML += formContent.nodeType;

// main.innerHTML +=
//   "<p>ii.Show node type of element having id “lastName” and its child node.</p>";

// main.innerHTML += lastName.nodeType;

// main.innerHTML += "<p>iv.Get First and last child of id “main - content”.</p>";
// main.innerHTML += mainContent.firstChild.nextSibling.innerHTML;
// main.innerHTML += mainContent.lastChild.previousSibling.innerHTML;

// main.innerHTML += "<p>v.Get next and previous siblings of id “lastName”.</p>";

// main.innerHTML += lastName.nextSibling.nextSibling.innerHTML;
// main.innerHTML += lastName.previousSibling.previousSibling.innerHTML;

// main.innerHTML +=
//   "<p>vi.Get parent node and node type of element having id “email”</p>";

// main.innerHTML += email.parentNode.className;
// main.innerHTML += email.nodeType;