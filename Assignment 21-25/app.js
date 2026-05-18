// Question # 01
// let firstName = prompt("What's your first name?")
// let lastName = prompt("What's your last name?")
// let finalName = firstName + " "+ lastName
// alert(`Hello ${finalName}`)

// Question # 02
// let userMobile = prompt("What's your favourite mobile phone model")
// document.write(`My favourite phone is: ${userMobile}`)
// document.write("</br>")
// document.write(`Length of string: ${userMobile.length}`)

// Question # 03
// let word = "Pakistani"
// document.write(`String: ${word}`)
// document.write("</br>")
// document.write(`Index of 'n': ${word.indexOf("n")}`)

// Question # 04
// let word = "Hello World"
// document.write(`String: ${word}`)
// document.write("</br>")
// document.write(`Last index of 'l': ${word.lastIndexOf("l")}`)

// Question # 05
// let word = "Pakistani"
// document.write(`String: ${word}`)
// document.write("</br>")
// document.write(`Character at index 3: ${word.charAt(3)}`)

// Question # 06
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");

// let fullName = firstName.concat(" ", lastName);

// alert("Welcome " + fullName);

// Question # 07
// let city = "Hyderabad"
// document.write(city)
// document.write("</br>")
// document.write(`After replacement: ${city.replace("Hyder","Islam")}`)

// Question # 08
// let message = "Ali and Sami are best friends.They play cricket and football together"
// document.write(message.replace(/and/g,"&"))

// Question # 09
// let num = "472"
// document.write(`Value: ${num} </br>`);
// document.write("")
// document.write("Type: ");
// document.write(typeof(num));
// document.write("</br>")
// document.write(`Value: ${num} </br>`);
// document.write("Type: ");
// document.write(typeof(Number(num)));

// Qestion # 10
// let userInput = prompt("Type peanuts");
// document.write(`User Input: ${userInput}`)
// // document.write("</br>")
// document.write(`Upper Case: ${userInput.toUpperCase()}`)

// Question # 11
// let userInput = prompt("Type javascript");
// document.write(`User Input: ${userInput}`)
// document.write("</br>")
// let final = userInput[0].toUpperCase()+ userInput.slice(1).toLowerCase();
// document.write(`Title case: ${final} `)

// Question # 12
// let num = 35.36 ;
// document.write(`Number: ${num}`)
// document.write("</br>")
// document.write("Result: " + num.toString().replace(".",""))

// Question # 13
// let userName = prompt("Enter your username")
// for(let i =0 ; i < userName.length; i++){
//     let code = userName.charCodeAt(i)
//     if(code === 33 || code ===44 || code ===46 || code === 64){
//         alert("Please enter a valid username ")
//     }
// }

// Question # 14
// let userA = prompt("What do you want to eat").toLowerCase();
// let flag = false;
// let index = -1;
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (let i = 0; i < A.length; i++) {
//   if (A[i] == userA) {
//     flag = true;
//     index = i;
//     break
//   }
// }
// if (flag == true) {
//   alert("Item is found");
//   document.write(
//   `${userA} is available at index ${index} at our bakery`,
// );
// } else {
//   alert("Item is not found");
// document.write(
//   `We are sorry. ${userA} is not available at our bakery`,
// );
// }

// Question # 15
// let userPass = prompt("Enter your password");
// let alpha = false;
// let num = false;
// if (userPass.length < 6) {
//   alert("Password must be 6 character long");
// } else if (userPass.charCodeAt(0) >= 48 && userPass.charCodeAt(0) <= 57) {
//   alert("Password should not start with a number");
// } else {
//   for (let i = 0; i < userPass.length; i++) {
//     let code = userPass.charCodeAt(i);

//     if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
//       alpha = true;
//     } else if (code >= 48 && code <= 57) {
//       num = true;
//     }
//   }
//   if (alpha && num) {
//   alert("Valid Password");
// } else {
//   alert("Password must contain alphabet and number");
// }
// }

// Questin # 16
// let word = "University Of Karachi";
// let arr = word.split("");
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i]+  "</br>");
// }

// Question # 17
// let userInput = prompt("Enter the word")
// document.write(`User input: ${userInput}`)
// document.write("</br>")
// document.write(`Last character of input: ${userInput[userInput.length-1]}`)

// Question # 18
// let text = "The quick brown fox jumps over the lazy dog";
// let newText = text.toLowerCase();
// let count = 0;
// let word = "the";

// for (let i = 0; i < newText.length; i++) {
//   if (newText.slice(i, i + 3) === word) {
//     count++;
//   }
// }
// document.write(`Text: ${text}`);
// document.write("</br>");
// document.write(`There are ${count} occurence of the word ${word}`);
// done
