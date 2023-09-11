//creating a nested object representing a person and 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001"
    },
    occupation: "Engineer"
};

//accessing properties of the main object
console.log(person.firstName); //output: John
console.log(person.lastName); //output: Doe
console.log(person.age); //output: 30
console.log(person.occupation); //output: Engineer

//accessing properties of nested objects
console.log(person.address.street); //output: 123 Main Street
console.log(person.address.city); //output: New York
console.log(person.address.state); //output: NY
console.log(person.address.zipCode); //output: 10001