// printing to the screen by increasing the stars :

    const star = "*";
    for (let index = 1; index <= 5; index++) {
      console.log(star.repeat(index));
    }
 
    
//Print prime numbers from 1 to 100

for (let mainIndex = 2; mainIndex < 101; mainIndex++) {

    const primeNumber = mainIndex;
    let dividable = false;
    
    for (let index = 2; index < primeNumber; index++) {

        if (primeNumber % index == 0) {

            dividable = true;
        }
    }

    if (dividable == false) {

        console.log(primeNumber, "is a prime number")

    } else {
        console.log(primeNumber, "is not a prime number")
    }

}



