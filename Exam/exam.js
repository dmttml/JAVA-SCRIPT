const person = {
    firstName : "Thomas",
    lastNnae : "Meier",
    age : 36,
    salary : 112000.00,
    osMarried : false,
    children : [
        "Miryam", "Hannnes", "Jurig"
    ],
    address :{
        street : "Musterstr. 3",
        zipCode : "6785" 

    }
}
const personSalary = person.salary;
console.log(personSalary);
const child = person.children[1];
console.log(child);


const personList = [
    {
        firsName : "Joey",
        lastName : "Tribani",
        age : 32,
        salary : 2000000,  
      },
      {
        firsName : "Ross",
        lastName : "Geller",
        age : 35,
        salary : 5600000,  
      },
      {
        firsName : "Rachel",
        lastName : "Green",
        age : 29,
        salary : 4800000, 
      }
] ;
const peopleWithHugeSalary = personList.filter((person) => person.salary > 50000);
console.log(peopleWithHugeSalary);

const ageList = personList.filter ((ages) =>ages.name > 30 );
const names = ageList.map((person) => person.firsName);
console.log(ageList);
console.log(names);