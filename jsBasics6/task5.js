const users = [
  { name: 'Vira', email: 'vira@example.com', age: 25 },
  { name: 'Oleh', email: 'oleh@example.com', age: 30 },
  { name: 'Ira', email: 'ira@example.com', age: 22 },
  { name: 'Danys', email: 'dan@example.com', age: 20 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
