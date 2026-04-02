import axios from 'axios';
import { describe, it, expect } from 'vitest';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  console.log(`[REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log(`[RESPONSE] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.log(
      `[RESPONSE ERROR] ${error?.response?.status ?? 'NO_STATUS'} ${error?.config?.url ?? 'NO_URL'}`
    );
    throw error;
  }
);

describe('JSONPlaceholder API', () => {
  it('GET /todos/1 returns valid todo', async () => {
    const res = await api.get('/todos/1');

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  it('GET /users/1 returns valid user', async () => {
    const res = await api.get('/users/1');

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({
      id: 1,
      name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
    });
  });

  it('GET /posts?userId=1 returns posts array', async () => {
    const res = await api.get('/posts', { params: { userId: 1 } });

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBeGreaterThan(0);

    expect(res.data[0]).toMatchObject({
      userId: 1,
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  it('POST /posts returns created post', async () => {
    const payload = { title: 'hello', body: 'test body', userId: 1 };

    const res = await api.post('/posts', payload);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject({
      ...payload,
      id: expect.any(Number),
    });
  });

  it('POST /comments returns created comment', async () => {
    const payload = { postId: 1, name: 'Vira', email: 'vira@example.com', body: 'comment body' };

    const res = await api.post('/comments', payload);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject({
      ...payload,
      id: expect.any(Number),
    });
  });
});
