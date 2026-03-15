function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
    if (!res.ok) throw new Error("Failed to fetch todo");
    return res.json();
  });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  });
}

const allPromise = Promise.all([fetchTodo(), fetchUser()]);
const racePromise = Promise.race([fetchTodo(), fetchUser()]);

allPromise
  .then(([todo, user]) => {
    console.log("Promise.all todo:", todo);
    console.log("Promise.all user:", user);
  })
  .catch((err) => console.log("Promise.all error:", err.message));

racePromise
  .then((firstResult) => {
    console.log("Promise.race first result:", firstResult);
  })
  .catch((err) => console.log("Promise.race error:", err.message));
