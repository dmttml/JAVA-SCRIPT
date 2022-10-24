//Printing "CIZZ BIZZ" on the screen

for(let sayac=1; sayac<100; sayac++){
console.log(sayac);

    if(sayac%3==0){
        console.log("CIZZ");  
      }
      if(sayac%5==0){
        console.log("BIZZ");  
      }
      if(sayac%3==0 && sayac%5==0){
        console.log("CIZZ BIZZ");  
      }

}