/*This program should be able to check the following variable.
1. Cabbar Usta repairs only red and black cars.
2. It only accepts BMW, Audi and VW brands.
3. BMW only accepts reds and the age range between 2010 and 2019.
4. Audi only accepts the age range between 2005 and 2010 or 2014 and 2020.
5. At BMW, only black people and the age range 2001 to 2018 are accepted.
6. As of this year, Cabbar Usta also accepts black BMWs from 2020.
7. It serves its fixed customers for more than 5 years, in all car models (all age range and all colors).
*/
let model=prompt("model girin");
let renk=prompt("renk girin");
let marka=prompt("marka girin");
let hangiYildayiz=prompt("hangi yil tamire geldiniz");
let kaYillikMusteri=prompt("kac yilllik musterimizsiniz");

    if(renk=="kirmizi" || renk=="siyah"){
        if(marka=="BMW"){
            if(renk=="kirmizi"){
                if(model>=2010 && model<=2019){
                    console.log("kirmizi ve 2010-2019 arasi araclar");
                }
            }
            else{
                console.log("maalesef arabanizi burada tamir ettiremezsiniz.")
            }
        }
        else 
        if(marka=="AUDI"){
            if((model<=2005 && model>=2010)||(model<=2020 && model>=2014)){
                console.log("HOSGELDINIZ");
            }else{ console.log("maalesef arabanizi burada tamir ettiremezsiniz.")}
            
        }else
        if(marka=="BMW"){
            if(renk=="siyah"){
                if(model<=2018 && model<=2002){
                    console.log("HOSGELDINIZ");
                }else{console.log("maalesef arabanizi burada tamir ettiremezsiniz.")}
            }else{console.log("maalesef arabanizi burada tamir ettiremezsiniz.")}
        }else{console.log("maalesef arabanizi burada tamir ettiremezsiniz")}
    }
    else
    if(hangiYildayiz==2021){
        if(marka=="BMW" && model=="2021" && renk=="siyah"){
            console.log("bu yil geldiginiz icin 2021 cikisli BMW hosgeldiniz.")
        }
    }else
    if(kaYillikMusteri<=5){
        console.log("tesekkurler")
    }
    