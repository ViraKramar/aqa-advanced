async function fetchTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!res.ok) throw new Error('Failed to fetch todo');
  return res.json();
}

async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

(async () => {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Promise.all todo:', todo);
    console.log('Promise.all user:', user);

    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race first result:', firstResult);
  } catch (err) {
    console.log('Error:', err.message);
  }
})();
