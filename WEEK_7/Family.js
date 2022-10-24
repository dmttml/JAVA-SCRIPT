
const families = [
    {
       firstname: "Ahmet",
       lastname: "Kurnaz",
       partner: "Sevil",
       childrens: [
          {
             name: "Efe",
             age: 8,
             gender: "boy",
          },
          {
             name: "Ece",
             age: 6,
             gender: "girl",
          },
       ],
       salary: 4000,
    },
    {
       firstname: "Kemal",
       lastname: "Can",
       partner: "Elif",
       childrens: [
          {
             name: "Naz",
             age: 11,
             gender: "girl",
          },
          {
             name: "Kadir",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 6000,
    },
    {
       firstname: "Zakir",
       lastname: "Cemal",
       partner: "Nida",
       childrens: [
          {
             name: "Hasan",
             age: 2,
             gender: "boy",
          },
          {
             name: "Hüseyin",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 5500,
    },
    {
       firstname: "Murat",
       lastname: "Demirtas",
       partner: "Simay",
       childrens: [
          {
             name: "Oktay",
             age: 15,
             gender: "boy",
          },
          {
             name: "Gülsüm",
             age: 13,
             gender: "girl",
          },
       ],
       salary: 5300,
    },
    {
       firstname: "Umut",
       lastname: "Ilicak",
       partner: "Ayse",
       childrens: [
          {
             name: "Bilal",
             age: 8,
             gender: "boy",
          },
       ],
       salary: 3000,
    },
    {
       firstname: "Durmus",
       lastname: "Demir",
       partner: "Nur",
       childrens: [
          {
             name: "Meral",
             age: 4,
             gender: "girl",
          },
       ],
       salary: 7000,
    },
 ];

 //1. Maasi 5000'in üzerinde olan ailelerin listesi. Listede aile babasinin isimleri ve soy 
 //isimleri isim sirasina göre listelenmeli.
 /**
  *  filter ile ailelerin gelirinin 5000 in uzerinde olanlari belirleriz.
  * buldugumuz isimleri olusturdugumuz yeni bir degiskene atariz.
  * sort() metodu ile alfabetik siraya gore siralarz.
  */
 const maasiBesbinUzeriAileler = families.filter((person) => person.salary > 5000)
 const names = maasiBesbinUzeriAileler.map(name => name.firstname + " " + name.lastname )
 names.sort();
 console.log("Maasi 5000 den yuksek olan babalar :",names);
 
 //Toplam erkek cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
/**
 * once map() ile her bir ailedeki cocuklari cagiririz.
 * sonra filter ile bu cocuklari erkek olanlarini buluruz.
 * daha sonra erkek cocuklarin isimlerini sort() metodu ile siralariz.
 */
const erkekCocuklar = families.map((child) => child.childrens
                            .filter((child) => child.gender === "boy")
                            .map((isim)=> isim.name))
                            .sort(); 
console.log("Erkek cocuklar :", erkekCocuklar); 

// Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
/**
 * once map() ile her bir ailedeki cocuklari cagiririz.
 * sonra filter ile bu cocuklari kiz olanlarini buluruz.
 * daha sonra kiz cocuklarin isimlerini sort() metodu ile siralariz.
 */
const kizCocuklar = families.map((child) => child.childrens
                            .filter((child) => child.gender === "girl")
                            .map((isim)=> isim.name))
                            .sort(); 
console.log("KIz cocuklar :" ,kizCocuklar);                      

// Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.
/*
 *map ile her bir ailedeki cocuklari cagiriyoruz.
 *filter ile bu cocuklarin yaslari 8 den kucuk olanlari ayiririz.
 tekrar map ile 8 yasindan kucuk cocuklarin isimlerini cagiririz. 
 */
const kucukler = families.map((kucuk) => kucuk.childrens
                         .filter((ages) => ages.age < 8)
                         .map(isim2 => isim2.name));
console.log("Yasi 8 den kucuk olan cocuklarin isimleri :",kucukler)

// Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.
/*
 *map ile her bir ailedeki cocuklari cagiriyoruz.
 *filter ile bu cocuklarin yaslari 8 den buyuk olanlari ayiririz.
 tekrar map ile 8 yasindan buyuk cocuklarin isimlerini cagiririz. 
 */
const buyukler = families.map((buyuk) => buyuk.childrens
                         .filter((ages) => ages.age > 8)
                         .map(isim => isim.name));                                             
console.log("Yasi 8 den buyuk olan cocuklarin isimleri :" ,buyukler) 
