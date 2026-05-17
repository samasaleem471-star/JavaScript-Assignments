// Question 01
// let add = (a,b) => a+b;

// Question # 02
// let num = a => {
//     if(a%2 === 0){
//         alert(`${a} is a even number`)
//     }else{
//         alert(`${a} is a odd number`)
//     }
// }
// num(9);

// Question # 03
// let greaterNum  = (a,b) => {
//     if(a>b){
//         console.log(`${a} is greater`);        
//     }else{
//         console.log(`${b} is greater`);
//     }
// }
// greaterNum(19,10)

// Question # 04
// let marks  = a => {
//     if(a>40){
//         console.log(`PASS`);        
//     }else{
//         console.log(`FAIL`);
//     }
// }
// marks(33)

// Question # 05
// let num  = a => {
//     if(a>=0){
//         console.log(`The number is positive`)  
//     }else if(a<0){
//         console.log(`The number is negative`)  
//     }
// }
// num(-99)

// Question # 06
// let num  = a => a*a
// num(9)

// Question # 07
// let upperCase  = a => a.toUpperCase()
// console.log(upperCase("Hi it's me"));

// Question # 08
// let upperCase  = a => a.toLowerCase()
// console.log(upperCase("Hi it's me"));

// Question # 09
// let wording  = a => {
//     if(a.length === 0){
//         alert("Empty wording")
//     }
// }
// wording("");

// Question # 10
// let firstCh  = f1 => f1[0]
// console.log(firstCh("hello"));

// Question # 11
// let arr = ["banana","apple","kiwi","guava"]
// let firstElement  = fe => fe[0]
// console.log(firstElement(arr));

// Question # 12
// let arr = ["banana","apple","kiwi","guava"]
// let lastElement  = fe => fe[fe.length-1]
// console.log(lastElement(arr));

// Question # 13
// let arr = ["banana","apple","kiwi","guava"]
// let elementNum  = fe => fe.length;
// console.log(elementNum(arr));

// Question # 14
// let num = a => {
//     if(a%2 === 0){
//         alert(`${a} is a even number`)
//     }else{
//         alert(`${a} is a odd number`)
//     }
// }
// num(9);

// Question # 15
// let num = a => {
//     if(a%2 === 0){
//         alert(`${a} is a even number`)
//     }else{
//         alert(`${a} is a odd number`)
//     }
// }
// num(90);

// Question # 16
// let num = [1,5,55,67,9];
// let greaterNum = arr =>{
//     for(let i=0; i < arr.length ; i++){
//         if(arr[i] > 10)    {
//             console.log(arr[i]);
            
//         }                                    
        
//     }

// }
// greaterNum(num)

// Question # 17
// let num = [1,5,55,67,9];
// let greaterNum = arr =>{
//     let largestNum = arr[0];
//     for(let i=0; i < arr.length ; i++){
//         if(arr[i] > largestNum)    {
//               largestNum = arr[i];
            
//         }                                    
        
//     }
//    console.log(largestNum);
   
// }
// greaterNum(num);

// Question # 18
// let num = [1,5,55,67,9];
// let smallestNum = arr =>{
//     let smallestNum = arr[0];
//     for(let i=0; i < arr.length ; i++){
//         if(arr[i] < smallestNum)    {
//               smallestNum = arr[i];
            
//         }                                    
        
//     }
//    console.log(smallestNum);
   
// }
// smallestNum(num);

// Question # 19
// let arr = [1, "Ali", "Hello", true];

// let checkwording = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "wording") {
//             console.log(arr[i]);
//         }
//     }
// }

// checkwording(arr);

// Question # 20 
// let arr = [1, 28, 13, 74];

// let removeLast = arr => {
//     arr.pop();
//     console.log(arr);
// }

// removeLast(arr);

// Question # 21
// let num = [1, 20, 13, 4];

// let sumArray = arr => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     console.log(sum);
// }

// sumArray(num);

// Question # 22
// let countVowels = total => {
//     let count = 0;
//     for (let i = 0; i < total.length; i++) {
//         if (
//             total[i] === "a" ||
//             total[i] === "e" ||
//             total[i] === "i" ||
//             total[i] === "o" ||
//             total[i] === "u"
//         ) {
//             count++;
//         }
//     }
//      console.log(count);
// }
// countVowels("hello")

// Question # 23
// let wordAvailable = (sentence, word) => {
//     return sentence.includes(word);
// }

// console.log(wordAvailable("My name is samaa", "samaa"));

// Question # 25
// let firstWord = sentence => {
//     return sentence.split(" ")[0];
// }

// console.log(firstWord("Its Java script"));
   
// Question # 26
// let lastWord = sentence => {
//     let words = sentence.split(" ");
//     return words[words.length - 1];
// }

// console.log(lastWord("Its Java script"));

// Question # 27
// let reverseString = str => {
//     let rev = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         rev = rev + str[i];
//     }

//     console.log(rev);
// }

// reverseString("hello");

// Question # 28
// let num = a => {
//     if(a%3 === 0){
//         alert(`${a} is divisible by 3`)
//     }else{
//         alert(`${a} is not is divisible by 3`)
//     }
// }
// num(9);

// Question # 29 
// let onlyLetters = word => {
//     for (let i = 0; i < word.length; i++) {
//         let code = word.charCodeAt(i);

//         if (
//             (code >= 65 && code <= 90)&& 
//             (code >= 97 && code <= 122)     
//         ) {
//             console.log(true);
//             // return;
//         }
//     }
//     console.log(false);
// }

// onlyLetters("HelloJS");

// Question # 30
// let sentenceArray = sentence => {
//     return sentence.split(" ");
// }
// console.log(sentenceArray("My name is sam"));
