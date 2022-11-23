/**
 * Mario is hiding in a train with 10 compartments.
  *We try to find mario's compartment by entering a number from 1 to 10 in the alert that appears on the screen.
 */
let compartmentNumber =Number(prompt("Enter a number from 1 to 10"));
const MariosCompartment = 4;


if(compartmentNumber > 0 && compartmentNumber <4){
    alert("Your guess :" + " "  + compartmentNumber + " " +  "Marios compartment is in a compartment with a larger number.") ;
   }
   else if(compartmentNumber > 4 && compartmentNumber < 11){
    alert("Your guess :" + " " + compartmentNumber + " " + "Marios compartment is in a compartment with a smaller number.")
   }

  else {
    alert("True compartment")
    
  } 


