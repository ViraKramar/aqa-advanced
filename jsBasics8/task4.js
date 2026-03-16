class ApiService {
  getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json());
  }
  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json());
  }
}

class PromiseService {
  constructor(api) {
    this.api = api;
  }

  getAll() {
    return Promise.all([this.api.getTodo(), this.api.getUser()]);
  }

  getFirst() {
    return Promise.race([this.api.getTodo(), this.api.getUser()]);
  }
}

const api = new ApiService();
const service = new PromiseService(api);

service.getAll().then(([todo, user]) => console.log("all:", todo, user));
service.getFirst().then((first) => console.log("first:", first));
