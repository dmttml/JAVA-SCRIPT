
//const ile grup isimlerinden olusan array olustur.
//const ile personal isimleirnden olusan array olustur.
//funktion olustur.
//Math.random ile listelerden rastgele isim sec. 
//
const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan",
 "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];

 function groupBul() {
   return groupList
 }
 const person = personalList[Math.floor(Math.random() * personalList.length)];

 function personBul() {
    return personalList
 }
 const group = groupList[Math.floor(Math.random() * groupList.length)];

 console.log("",group, person)


 



