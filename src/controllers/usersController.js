import { apiClient } from '../clients/apiClient.js';

export class UsersController {
  async getUserById(id) {
    return apiClient.get(`/users/${id}`);
  }
}
