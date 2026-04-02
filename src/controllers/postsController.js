import { apiClient } from '../clients/apiClient.js';

export class PostsController {
  async getPostsByUserId(userId) {
    return apiClient.get('/posts', { params: { userId } });
  }

  async createPost(payload) {
    return apiClient.post('/posts', payload);
  }

  async createComment(payload) {
    return apiClient.post('/comments', payload);
  }
}
