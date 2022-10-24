/*
let numberList=[2,6,6,9,1];
let stringList=["ahmet","mehmet","ali"];

function getRandomNumber(pArray){
    return Math.floor(Math.random()*pArray.lenght);
}
function topla1(sayi1,sayi2){
return sayi1*sayi2;
}
let toplam1=topla(43,23);
let toplam2=topla(67,43);

console.log(toplam1);
console.log(toplam2);
*/
/*
let numberList=[3,6,9,12,1];
let stringList=["demet","mahmut","ayse","ali"];
for(let index=0; index<stringList.length; index++){
    console.log(stringList[index]);
}
stringList.forEach((item)=> {
    console.log(item);
});


stringList.map((item,index)=>{
    console.log(item,index);
});
*/

/*
let numberList=[9,3,12,49,56];
let stringList =["ahmet","ali","ayse","fatma"];

let newNumberList =numberList.filter((item,index) =>{
    return item<40;
});
console,log(newNumberList);

let newNumber = numberList.find((item,index) =>{
    return item>40;
});
let newNumber = numberList.findIndex((item,index) =>{
    return item>40;
});
console.log(newNumber);
console.log(newNumberList);
*/

let numberList=[9,3,12,49,56];
let stringList =["ahmet","ali","ayse","fatma"];
let result1 = stringList.every((item, index) =>{
    return item.includes("k");

});
console.log(result1);

let result2 = stringList.every((item, index) =>{
    return !item.includes("k");
    // ! isareti 
});
console.log(result2);
