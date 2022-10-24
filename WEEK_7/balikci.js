const fishFarm = [ 
    { 
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway", 
        season: "Winter", 
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan", 
        season: "Winter", 
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    { 
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),    
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom", 
        season: "Spring", 
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    { 
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),   
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland", 
        season: "Summer", 
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    { 
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),    
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France", 
        season: "Autumn", 
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Bluefish", 
        price: 13.70,
        entryDate: new Date(2021, 10, 11),  
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy", 
        season: "Winter", 
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    { 
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),    
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "Greece", 
        season: "Summer", 
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    { 
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),  
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt", 
        season: "Summer", 
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    { 
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),   
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam", 
        season: "Summer", 
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),    
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain", 
        season: "Winter", 
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },  
]
//1- stok miktari 500 kg uzeri olan baliklar:
/**
 * filter ile stok miktari 500 un uzerinde olan baliklari arraydan cektik.
 * map ile bu baliklarin isinleri icin bir degisken olusturup oraya attik.,
 */
const stok500kgUzeri = fishFarm.filter((stok) => stok.stockVolumeInKg > 500)
const names = stok500kgUzeri.map(name => name.fishType );
console.log("Stogu 500 kg uzeri baliklar :", names);

//2- Fiyati 9 ile 12 arasinda olan baliklar:
/**
 * fiyati 9 fr dan yuksek ve 12 fr dan dusuk olan baliklari filtreledik.
 * bu baliklarin turunu map ile bir arraya attik.
 */
const belliFiyatAraligi = fishFarm.filter((prc) => prc.price > 9 && prc.price < 12)
const FiyatAraligindakiBaliklar =belliFiyatAraligi.map(name2 => name2.fishType )
console.log("9-12 Frank olan baliklar : " , FiyatAraligindakiBaliklar);

//3- Sadece Bern de ve kis sezonu satilan baliklar :
/**
 * filtreleme yontemi ile baliklardan kis sezonu satilan baliklari ve includes("BE") yontemimi kullanarak
 *  Bern kantonunda satilan baliklari cektik.
 * bu baliklarin isimlerini map ile bir degiskene attik.
 */
const yerVeSezonAraligi =fishFarm.filter((fish,location) => fish.season === "Winter" && fish.saleLocations.includes("BE") )
const berndeKisinSatilanBaliklar = yerVeSezonAraligi.map(name3 => name3.fishType)
console.log("Bern de kis sezonu satilan baliklar :", berndeKisinSatilanBaliklar);


//4- Son kullanma tarihine gore siralama :
const sonKullanmaTarihi = fishFarm.filter((tarih) => tarih.entryDate)
                                 .map(name => name.entryDate + name.fishType)
    console.log("Baliklarin son kullanma tarihine gore siralanmasi : ", sonKullanmaTarihi);

//5- AB den geln ve fiyati 10fr dan dusuk olanlar:
/**
 * AB ulkelerinden gelen baliklari bulmak icin filter kullandik.
 */
const abdenGelenBaliklar = fishFarm.filter((country) => country.originCountry === "Spain" && country.originCountry ==="Greece")
const abdenGelenBaliklarinIsimleri =abdenGelenBaliklar.map(name4 => name4.fishType)
console.log("AB den gelen 10 Fr lik baliklar :", abdenGelenBaliklarinIsimleri);


//6- toplam balik stogu :
/**
 * once filter ile her bir baliga ait stok miktarlarini bulduk.
 * bu stok miktarlarini bir degiskene attik.
 * stokAray`deki bu stok miktarlarini reduce()metodu ile toplayarak toplam stok miktarini bulduk.
 */
const stokMiktarlari = fishFarm.filter((stok) => stok.stockVolumeInKg)
const stokArray = stokMiktarlari.map(name5 => name5.stockVolumeInKg)
const toplamStok = stokArray.reduce((a,b) => {
    return a + b ;
})
console.log("Toplam balik stogu :", toplamStok);


//7- En pahali balik :
/**
 * baliklarin fiyatlarini filtreledik.
 * filtrelemeden elde ettigimiz sayilar icin bir array olusturduk.
 * math,max methodu ile en yuksek fiyati bulduk.
 * fakat bu en yuksek fiyata sahip baligin adini yazdiramadik:(
 */
const balikFiyatlari = fishFarm.filter((fiyat) => fiyat.price)
const fiyatArray = balikFiyatlari.map( name6 =>name6.price)
const typeArray = balikFiyatlari.map( name6 =>name6.fishType)
const max = fiyatArray.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log("Baliklarin fiyatlari :",fiyatArray);
console.log("Baliklarin turleri :",typeArray);
console.log("En pahali balik :", max);

//8- en uzun sureli durabilen baliklar nereden geldi.
//cozemedim

//9- Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
//cozemedim

//10- Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
/**
 * ticino kantonunda satilan baliklari filtreledik.
 * bu baliklarin miktarini bir degiskene attik.
 * olusturdugumuz bu stok arrayindeki miktarlari reduce() ile topladik.
 */
const stokMiktari = fishFarm.filter((stok) => stok.stockVolumeInKg && stok.saleLocations.includes("TI"))
const newArray = stokMiktari.map(miktar => miktar.stockVolumeInKg)
console.log(newArray);
const toplamStokTicino = newArray.reduce((a,b) => {
    return a + b ;
});
console.log("Toplam balik stogu :",toplamStokTicino);



//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
/**
 * yarim yapildi.
 * once filter ile yazin gelen baliklari ve includes() ile de Zurih e gelen baliklari filtreledik.
 * bu baliklarin gramajlarini bulduk.
 * gramajlari reduce() ile topladik.
 *ortalama hesaplanamadi.
 */
const yazinZuriheGelenBalik =fishFarm.filter((fishs,location) => fishs.season === "Summer" && fishs.saleLocations.includes("ZH") )
const YazZurihteSatilanBaliklar = yazinZuriheGelenBalik.map(fishs => fishs.itemWeightInGrams)
const toplamBalik = YazZurihteSatilanBaliklar.reduce((a,b,c) => {
    return a + b ;
});

console.log("Yazmevsimi Zurih e gelen baliklar :",YazZurihteSatilanBaliklar)
console.log("Toplam gramaj :",toplamBalik);
