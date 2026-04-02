import { apiClient } from '../clients/apiClient.js';

export class TodosController {
  async getTodoById(id) {
    return apiClient.get(`/todos/${id}`);
  }
}
