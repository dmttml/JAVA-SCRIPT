/**
 * We learn which zodiac sign we have by entering the month and day information
  in the alert box that appears on the screen.
 */
let month = prompt("Please enter your birth month");
let day = Number(prompt("Please enter your birth day"));

 if((month=="february" && day>20 && day <=28 )||(month=="march" && day>=1 && day<=20)){
  alert("Your horoscope: Pisces") 
 } 
 else if((month=="march" && day>20 && day<=31)||(month=="april" && day>=1 && day<=21)){
 alert("Your horoscope: Aries");
  } 
  else if((month=="april" && day>21 && day<=30) || (month=="may" && day>=1 && day<=20)){
    alert("Your horoscope: Taurus")
  }
  else if((month=="may" && day>20 && day<=31) || (month=="june" && day>=1 && day <=21)){
    alert("Your horoscope: Gemini")
  }
  else if((month=="june" && day > 21 && day <=30) || (month=="july" && day>=1 && day<=22)){
    alert("Your horoscope: Cancer")
  }
  else if((month=="july" && day >22 && day <=31) || (month=="august" && day>=1 && day<=23)){
    alert("Your horoscope: Leo")
  }
  else if((month=="august" && day>23 && day<=31) || (month=="september" && day>=1 && day <=23)){
    alert("Your horoscope: Virgo")
  }
  else if((month=="september" && day >23 && day<=30) || (month=="oktober" && day>=1 && day <=23)){
    alert("Your horoscope: Libra")
  }
  else if((month=="oktober" && day>23 && day <=30) || (month=="november" && day >=1 && day <=22)){
    alert("Your horoscope: Scorpio")
  }
  else if((month=="november" && day>22 && day <=30) || (month=="december" && day >=1 && day <= 21)){
    alert("Your horoscope: Sagittarius")
  }
  else if((month=="december" && day > 21 && day<=31) || (month=="january" && day >=1 && day <= 20)){
    alert("Your horoscope : Capricorn")
  }
  else if((month=="january" && day > 20 && day <=31) || (month=="february" && day>=1 && day<=20)){
    alert("Your horoscope : Aquarius")
  }

else{
  alert("Please try again")
}




