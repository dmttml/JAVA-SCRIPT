
/*
*const ile bir array olusturulur.
*arraydan sayilar cikartilir.
*maas tespit edilir.maas,array in 0.indexi
*masraflar toplanir.Array daki sayilar toplanir ve gelirden cikarilir.
*sirketin %20 destek oraninin masraflrin ne kadari oldugu hesaplanir.
*toplam masraftan sirket destegi cikarilir.
*toplam maastan kisiye kalan masraflar cikarilarak Fikret beyin kalan maasi bulunur.
 */
const incomeExpenses = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79,
 "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];

 console.log(incomeExpenses);

// fonktion olmadan 
 const filterNumber = incomeExpenses.filter(a => typeof a ==="number" );

 console.log("Sadece sayilar", filterNumber);
 
// funktion ile
 function filterNumbers(number) {
     return number.filter(a=> typeof a ==="number" )
     
 }
 console.log("Sadece sayilar", filterNumbers(incomeExpenses));

// maas bulma. 0. index maas miktarini gosteriyor.

const income = incomeExpenses[0];
console.log("Fikret Beyìn maasi =" ,income);

//masraflarin toplami 

const toplamGider = filterNumber.reduce((a,b) =>{
    return a + b ;
}) - incomeExpenses[0] ; // gelir
console.log ("Masraflarin toplami =", toplamGider);

//sirket yardimi

function  destekOrani(a,b) {
    return (a/100) * b;
    
}
const Destek = destekOrani(toplamGider,20);
console.log("Sirket destegi =", Destek);

// sirket yardimini cikarma

function KalanGiderler(x,y) {
    return (x-y);
}

const KisiyeKalanGider = KalanGiderler(toplamGider,Destek)
console.log("Fikret Bey e kalan masraf toplami =",KisiyeKalanGider) 

//kalan maas

function Kalan(z,q) {
    return (z-q) 
}
const KalanNetMaas = Kalan(income, KisiyeKalanGider);
console.log("Fikret Bey`in giderler disinda kalan maaasi =",KalanNetMaas);