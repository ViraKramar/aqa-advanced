const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2015,
};

const car2 = {
  brand: "Honda",
  model: "Civic",
  owner: "Vira", //рядок, представляє ім'я власника автомобіля
};

const car3 = { ...car1, ...car2 };

console.log(car3);
