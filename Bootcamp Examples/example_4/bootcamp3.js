
const kullanici="demet";
const sifre="12345";

let inputname=document.querySelector("kullanici").value;
document.querySelector(kullanici)


let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join("+"));

let arrayString=myColor.join("+");
console.log(arrayString);
console.log(arrayString.toLowerCase());


//rastgele isim yazdirma 

let names=["ali","ayse","fatma","demet","nur","necmi","bekir"]

let index=Math.floor(Math.random() * names.length);
console.log(names[index]);


let numberEqual = 0;
for(let index = 0; index<array2.length; index++ ){
    for(let index2 = 0; index2<array1.length; index2++){
        if(array1[index] == array2[index2]){
            numberEqual+= array2[index]
        }
}
    }