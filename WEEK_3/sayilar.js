function hesapla(){
    var sayi1=document.getElementById("sayi1").value;
    console.log(sayi1);
    var sayi2=document.getElementById("sayi2").value;
    console.log(sayi2);

    var s1= Number(sayi1);
    var s2= Number(sayi2);

    if(s1>s2) { document.getElementById("sonuc").innerHTML="birinci sayi olan"+ s1 + "sayısı "+ s2 +"den buyuk.";
    }
    else 
    if(s2 > s1) { document.getElementById("sonuc").innerHTML = "birinci sayı olan " + s2 + "sayısı "+ s1 + "den buyuktur.";
    }
    else
    document.getElementById("sonuc").innerHTML = "İki sayı birbirne eşittir.";
    var hesaplaBtn=document.getElementById("buton");
    hesaplaBtn.onclick=hesapla;
    console.log(hesaplaBtn)


    
}