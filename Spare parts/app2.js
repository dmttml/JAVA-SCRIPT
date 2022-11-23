/*
*let ile yedek parcalardan olusun bir array olustur.
*parca isimlarini buyuk harf yapmak icin bir fonktion tanimla ve toUpperCase ile isimleri byuk harfe cevir.
*parca simlerinden sayilari cikarmak icin bir funktion tanimla ve replace i kullanarak uygula.
*parca isimlerini ters cevirmek icin yeni bir funktion tanimla ve split().reverse().join() methodunu kullan.
*kelimelerin basina "KEREM_AG" eklemek icin const ile sirket adini tanimla ve stringlerin basina ekle.
*kelimelrin sonuna date() metodu ile tarih ekle
*/

let YedekParca2 = ["Kaporta5", "Ak3u", "Stop Lambasi", "Radyator 21", "Karburator 42", "Tekerlek", "3 AYNA", "Jant"];

// parca isimlerini buyuk harf yapma:

function Parcalar(pName) {
    for (let index = 0; index < YedekParca2.length; index++) {
        const element = YedekParca2[index];  
    }
}
console.log(YedekParca2[0].toUpperCase());
console.log(YedekParca2[1].toUpperCase());
console.log(YedekParca2[2].toUpperCase());
console.log(YedekParca2[3].toUpperCase());
console.log(YedekParca2[4].toUpperCase());
console.log(YedekParca2[5].toUpperCase());
console.log(YedekParca2[6].toUpperCase());
console.log(YedekParca2[7].toUpperCase());

// Parca isimlerinden sayilari cikarma :


function SayilariCikarma(pName) {  
    for (let index = 0; index < YedekParca2.length; index++) {
        const element = YedekParca2[index];
        element.replace(/[0-9]/g,"");
        return pName.replace(/[0-9]/g,"")
    }
     //calismadi.
}


//Parca isimlerini ters cevirme:
function TersCevirme(pName) {
    for (let index = 0; index < YedekParca2.length; index++) {
        
    }
}
console.log(YedekParca2[0].split("").reverse().join(""));
console.log(YedekParca2[1].split("").reverse().join(""));
console.log(YedekParca2[2].split("").reverse().join(""));
console.log(YedekParca2[3].split("").reverse().join(""));
console.log(YedekParca2[4].split("").reverse().join(""));
console.log(YedekParca2[5].split("").reverse().join(""));
console.log(YedekParca2[6].split("").reverse().join(""));
console.log(YedekParca2[7].split("").reverse().join(""));




//KEREM AG ekleme:
const Sirket = "KEREM AG_";  // sirket adini tanimladik.
function KelimeEkleme(pName) {
    for (let index = 0; index < YedekParca2.length; index++) {   
    }
}console.log(Sirket + YedekParca2[0].toUpperCase());
console.log(Sirket + YedekParca2[1].toUpperCase());
console.log(Sirket + YedekParca2[2].toUpperCase());
console.log(Sirket + YedekParca2[3].toUpperCase());
console.log(Sirket + YedekParca2[4].toUpperCase());
console.log(Sirket + YedekParca2[5].toUpperCase());
console.log(Sirket + YedekParca2[6].toUpperCase());
console.log(Sirket + YedekParca2[7].toUpperCase());



// Tarih ekleme :

