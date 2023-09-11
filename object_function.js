//creating an object using object literal notation
const person={
    firstName: "John",
    lastName: "Doe",
    age:30,
    occupation:"Engineer",

    //method inside the object
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
    },
};

//Accessing object properties
console.log(person.firstName);//output:John
console.log(person.lastName); //output:Doe
console.log(person.age); //output:30
console.log(person.occupation); //output:Engineer
//calling the method of object
person.sayHello(); //output: Hello, my name is John Doe. I am 30 years old.