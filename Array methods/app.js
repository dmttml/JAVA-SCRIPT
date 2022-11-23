
let myArray = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"];

let numberList = [];
let numberListSquare = []
let squareRoot = []
let smallestNumber;
let biggestNumber;
let sumOfNumbers = 0;
let averageOfNumbers = 0;



for (let index = 0; index < myArray.length; index++) {
    if (typeof myArray[index] === 'number') {
       numberList.push(myArray[index])
       numberListSquare.push(myArray[index] * myArray[index] )
      squareRoot.push(Math.sqrt(myArray[index]))
       sumOfNumbers += Number(myArray[index]);
       averageOfNumbers = sumOfNumbers / (numberList.length)
    }
    
 }
 smallestNumber = Math.min(...numberList);
 biggestNumber = Math.max(...numberList);
 
 
 console.log("NumberList:",numberList);

console.log(" Square of Number List :",numberListSquare);
console.log("Squae root of Numbers", squareRoot)

console.log("Smallest Number :",smallestNumber);


console.log("Biggest Number :", biggestNumber);


console.log("Sum of Number :", sumOfNumbers);

console.log("Average :" , averageOfNumbers);