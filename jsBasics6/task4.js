const person = {
  firstName: "Denys",
  lastName: "Frosty",
  age: 25,
};

person.email = "denys@example.com";
delete person.age;

console.log(person);
