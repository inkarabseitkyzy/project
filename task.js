// listofProfession = ["programmer", "accountant", "doctor", "teacher"]
// listofLocation = ["Taraz", "Almaty", "Astana"]
// people = ["Aigul", "Anar", "Zhanna"];
// numberofChildren = [1, 2, 3, 4, 5];
// function tellFortune( x , y, z , n){
//     console.log(
//         `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`
//         );
// }
// let x = randomChoice(listofProfession);
// let y = randomChoice(listofLocation);
// let z = randomChoice(people);
// let n = randomChoice(numberofChildren);
//  function randomChoice(arr){
//      return arr[Math.floor(Math.random() * arr.length)];
//  }
// tellFortune(x,y,z,n);
// tellFortune(x,y,z,n);
// tellFortune(x,y,z,n);
// tellFortune(x,y,z,n);
listofnumbers = [1, 2, 3, 4, 5]
 function calculateDog(x){
    console.log(
        `Your doggie is ${x} years old in dog years!`
    );
 }
 let x = randomChoice(listofnumbers);
    function randomChoice(x){
        return Math.round(Math.random(x) * 7)
    }
 calculateDog(x)


 let number = 1;
 function calculateDog(y){
    console.log(
        `Your dog's age is ${y} years old in people years!`
    );
 }
 
 let y = randomChoice(number);
    function randomChoice(y){
        return Math.round(Math.random(y) / 7)
    }
 calculateDog(y)

 function calculateDog(){
    console.log(`dog age ${dogage * 7} years old in Dopg years `);
    console.log(`human is  ${dogage / 7} years old in Dopg years `);

 }