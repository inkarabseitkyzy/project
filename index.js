
// let test1 = "Mathematics"
// console.log(test1.lastIndexOf("at", 10))
// console.log(test1.slice(1, 5))
// console.log(test1.charCodeAt(6))
// console.log(test1.codePointAt(1))
// console.log(test1.substring(1));
// console.log(test1.search("tic"))
// console.log(test1.trim())
// console.log(test1.split(" ".join("")))
// console.log(test1.replace(/ /g, ","))

// const number = 2
// console.log(Number.parseInt("43.1234"));
// console.log(Number.parseFloat("43"));
// console.log(Number(42).toString());
// console.log(Math.ceil(1.98))
// console.log(Math.trunc(1.98))

// const name1 = "Inkar"
// console.log(name1.charAt(Math.random() * name1.length))


// const age = 18;
// if( age > 18){
//     console.log("Ulken")
// }else if(age< 18){
//     console.log("Kiwi")
// }else{
//     console.log("18-de")
// }

// age = 18
// ? console.log("Ulken")
// : age < 18
// ? console.log("kiwi")
// : console.log("18-de")

// let number = 8
// switch(number){
//     case number > 0:
//         console.log("positive");
//         break;
//     case number < 0:
//         console.log("negative");
//         break; 
//     case number = 0:
//         console.log("zero");
//         break;       
// } 
// alert("Bizdin clubka qosh keldinizder");
// const age = prompt("Zhasyndy engiz:");
//  if (age >= 18){
//     prompt("Er | Aiel");
//  }else {
//     alert("Uiine kait")
//  }   
// // const gender = prompt("Er | Aiel");
// const ban = confirm("Siz chernyi spisoktasyz ba?");
//  if (gender.trim().toLowerCase() === "er" && !ban){
//     alert("Kiruge ruksat")
//  } else if (gender.trim().toLowerCase() === "aiel"){
//     alert("Uiine kait")
//  }
//  else{
//     alert("Uiine kait");
//  }

//  else if(gender == "Aiel"){
//     alert("Uiine kait");
// }else{
//     alert("Uiine kait");
// }   

//  if(gender.trim().toLowerCase() === "aiel" && !ban){
//     alert("Uiine kait")
//  }

// && gender.trim().toLowerCase() === "er" && !ban
//   let number = 100;
//   for(let i = 0; i<= 100; i++){
//     console.log(i)

//   }
// let number = 100;
// let myString= "Mathematics"
 
// myString. split("").forEach((char) => {
//     console.log(char)
// });

// while(condition){
    
// }
// let number = 100
// let i = 0;
// while(i <= number){
//     console.log(i);
//     i++;
// }

// function doThings(number){
//     console.log(`Your favourite number is ${number * 2}`)
// }
// doThings(123);
 
// listofvowels = ["a", "e", "i", "o", "u"]
// let count = 0;
// function countVowel(string) {
//     Array.from(str).forEach((char))
// }        
// dothings(string);



// let count = 0;
// const listoflowels = ["a", "e", "i", "o", "u"];
// function countLowels(str){
//     for(let i = 0; i < str.length; i++){
//         if(listoflowels.inclides(str[i])){
//             count++;
//         }
//     }
// }
// console.log(countLowels("kazakh"));
// const vowels = ["a", "e", "i", "o", "u"];
// console.log(vowels.join(';'));
// console.log(vowels.shift());
// console.log(vowels.unshift("a"));
// console.log(vowels.slice(0, 4));
// console.log(vowels.splice(0, 4));
// console.log(
//     vowels.map((char) => {
//         if(char)
// function doThings(number){
//     console.log(number + 2) 
//     console.log(number - 2)
//     console.log(number * 2)   
//     console.log(number / 2)       
// }
// doThings(3);
// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(1, 2))

// function divide(num1, num2){
//     return num1/ num2
// }
// console.log(divide(1, 2))

// function azaitu(num1, num2){
//     return num1 - num2
// }
// console.log(azaitu(1, 2))

// function kobeitu(num1, num2){
//     return num1 * num2
// }
// console.log(kobeitu(1, 2))
// function reverseNumber(number){
//     const tort = number % 10; //4
//     const eki = (number / 10000) / 100; //2
//     const uw = (number / 10) % 10; //3
//     const bir = number / 10000; //1
//     reverseNumber.push(tort+"" + "uw" + "" uw + eki + bir)
// }
// console.log(reverseNumber(1234));


// function reverseNumber(number){
//     let reversedStr = '';
//     console.log(number.toString());
//     let str = number.toString();
//     for (let i = str.length - 1; i >= 0; i--){
//         reversedStr = reversedStr.concat(str[i]);
//     }
//     console.log(reversedStr);
//     return Number(reversedStr);

// }
// reverseNumber(1234)

// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'false';
//         }
//     }
//     return 'true';
// }
// const string = prompt('Enter a string: ');
// const result = checkPalindrome(string)
// console.log(result);


// function isPalindrome(str) {
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
//   }
  
function checkPalindrome(string){
    return string === string.split("").reverse().join("");
}
console.log( checkPalindrome("asa"));

 function upperCase(word){
    return word.toUpperCase();
 }
 console.log(upperCase("My name is Inkar"));
 
    