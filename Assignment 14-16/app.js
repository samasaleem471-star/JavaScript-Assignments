// Question # 01
// let student = []

// Question # 02
// let student = []

// Question # 03
// let studentName ;
// studentName = ["Sam","hania"];

// Question # 04
// let studentNum ;
// studentNum = [3,3];

// Question # 05
// let boolean ;
// boolean = ["true","false"];

// Question # 06
// let mixed ;
// mixed = ["true",1,"sam"];
// console.log(mixed)

// // Question # 07
// let qualification ;
// qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("Qualifications:" + "</br></br>")
// document.write("1)" + qualification[0] + "</br>")
// document.write("2)" + qualification[1] + "</br>")
// document.write("3)" + qualification[2] + "</br>")
// document.write("4)" + qualification[3] + "</br>")
// document.write("5)" + qualification[4] + "</br>")
// document.write("6)" + qualification[5] + "</br>")
// document.write("7)" + qualification[6] + "</br>")
// document.write("8)" + qualification[7] + "</br>")

// // Question # 08
// let studentName =["Michael","John","Tony"]
// let studentMarks =[320,230,480]
// let totalMarks = 500 ;
// let studentPercentage =[(studentMarks[0]/totalMarks)*100 , (studentMarks[1]/totalMarks)*100 , (studentMarks[2]/totalMarks)*100]
// document.write(`Score of ${studentName[0]} is ${studentMarks[0]}. Percentage: ${studentPercentage[0]}% </br>`)
// document.write(`Score of ${studentName[1]} is ${studentMarks[1]}. Percentage: ${studentPercentage[1]}% </br>`)
// document.write(`Score of ${studentName[2]} is ${studentMarks[2]}. Percentage: ${studentPercentage[2]}% </br>`)

// Question # 09
// let color =["pink","green","orange","purple"]
// document.write(color)

// "a"
// document.write("</br>")
// let userColor = prompt("Add your color at the start")
// color.unshift(userColor)
// document.write(color)

// "b"
// document.write("</br>")
// let userColor = prompt("Add your color at the end")
// color.push(userColor)
// document.write(color)

// "c"
// document.write("</br>")
// color.unshift("black","blue")
// document.write(color)

// "d"
// document.write("</br>")
// color.shift()
// document.write(color)

// "e"
// document.write("</br>")
// color.pop()
// document.write(color)

// "f"
// let colors = ["Red","Blue","Orange","Pink"];
// let  userColor = prompt(" What color do you want to add?");
// let userIndex = +prompt("At which position do u want to add a color?");
// let finalIndex = userIndex-1;
// colors.splice(finalIndex,0,userColor);
// document.write(colors);

// "g"
// let colors = ["Red","Blue","Orange","Pink"];
// let  numOfColors = +prompt(" How many colors do you want to delete?");
// let indexNum = +prompt("At which position do u want to delete colors?");
// let finalIndex = indexNum-1;
// colors.splice(indexNum,numOfColors);
// document.write(colors);

// Question # 10
// let studentScore = [320,230,480,120];
// document.write(`Score Of Students ; ${studentScore}`);
// document.write("</br>")
// document.write("Ordered Scores Of Student" + studentScore.sort());

// Question # 11
// let cities = ["Karachi", "Lahore ","Islamabad","Quetta","Peshawar"];
// document.write(`Cities List: </br> ${cities}`);
// document.write("</br>");
// document.write("Selected Cities List:"+"</br>" + cities.slice(2,4));

// Question # 12
// let joining = ["This","is","my","cat"]
// document.write(`Array : </br> ${joining}`);
// document.write("</br>");
// document.write("String : " + "</br>" + joining.join(" "));

// Question # 13
// let devices = ["keyboard","mouse","printer","monitor"]
// document.write(`Devices : </br> ${devices} </br>`);
// document.write("Out"+"</br>"+devices.shift() +  "</br>");
// document.write("Out"+"</br>"+devices.shift() +  "</br>");
// document.write("Out"+"</br>"+devices.shift() +  "</br>");
// document.write("Out"+"</br>"+devices.shift() +  "</br>");

// Question # 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];

// for (var i = devices.length - 1; i >= 0; i--) {
//   document.write("Out: " + "<br>"+ devices[i] + "<br>");
// }

// Question # 15
// let phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

//   document.write("<select>");

//     for (var i = 0; i < phones.length; i++) {
//         document.write("<option>" + phones[i] + "</option>");
//     }

// document.write("</select>");
