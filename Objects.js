//literal

const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

//console.log(person.firstName)

//new kyword

const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

console.log(person2.age)


//create object wrt class

//looping in objects


for(let x in person){
    console.log(person[x]);
}




