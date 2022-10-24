/**
 * const ile element isimlerinden olusan array olusturulur.
 * const ile hayvan isimlerinden olusan array  olusturulur.
 * let ile dogum yilini gosteren degisken tanimlanir.
 * elementi ve hayvani bulmak icin ayri  birer funktion tanimlanir.
 *  
 */

const elementList = ["Metal","Metal","Water","Water","Wood","Wood","Fire","Fire","Earth","Earth"];
const hayvanList = ["Monkey","Cock","Dog","Boar","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Sheep"];

let yil = 1994;

function elementBul(yil) {
    for (let index = 0; index < elementList.length; index++) {
        
    }
    return elementList[yil % elementList.length]
 }
 const element =  elementBul(yil);
 console.log("Element=",element);
 

 function hayvanBul(yil) {
    for (let index = 0; index < hayvanList.length; index++) {
          
    }
    return hayvanList[yil % hayvanList.length]
 }
 const hayvan =  hayvanBul(yil);

 console.log("Burc=", hayvan);
 
 






