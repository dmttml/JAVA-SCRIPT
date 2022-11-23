/*let ile hayvanlardan olusan bir array olustur.
*arraydaki hayvanlarin sayisi 0 olarak tanimlanir.
*const ile her bir hayvanin bacak sayisi tanimlanir.
*for dongusu olusturulur.
*her bir hayvan icin ayri if dongusu kurulur.
*her bir hayvanin toplam bacak sayisi tanimlanir.
console.log ile consola yazdirilir.
ve en son olarak kelle paca yapilabilecek bacak sayisi tanimlanip console a yazdirilir. 
*/

let ciftlik = ["inek","tavuk","domuz","koyun","tavuk", "inek", "koyun","tavuk"];
//hayvan sayilari:
let inek=0;
let tavuk=0;
let domuz=0;
let koyun=0;
//hayvan bacak sayilari:
const inekBacakSayisi =4;
const tavukBacakSayisi =2;
const domuzBacakSayisi =4;
const koyunBacakSayisi =4;
   
for (let index = 0; index < ciftlik.length; index++) {
    const hayvan=ciftlik[index];
    
    if (hayvan=="inek"){
        inek++; 
    }
    if (hayvan=="tavuk"){
        tavuk++;   
    }
    if (hayvan=="koyun"){
        koyun++;   
    }
    if (hayvan=="domuz"){
        domuz++;   
    }
}
//toplam  bacak sayisi:
let toplamInekBacakSayisi =  inek * inekBacakSayisi;
let toplamTavukBacakSayisi =  tavuk * tavukBacakSayisi;
let toplamKoyunBacakSayisi =  koyun * koyunBacakSayisi;
let toplamDomuzBacakSayisi =  domuz * domuzBacakSayisi;
console.log("Inek bacak sayisi = " + toplamInekBacakSayisi);
console.log("Tavuk bacak sayisi = " + toplamTavukBacakSayisi );
console.log("Koyun bacak sayisi = " + toplamKoyunBacakSayisi);
console.log("Domuz bacak sayisi = " + toplamDomuzBacakSayisi);

let kellePacaBacakSayisi = toplamInekBacakSayisi + toplamKoyunBacakSayisi;
console.log("kelle paca yapmak icin toplam bacak sayisi = " + kellePacaBacakSayisi);
