import { describe, it, expect } from 'vitest';
import { TodosController } from '../src/controllers/todosController.js';
import { UsersController } from '../src/controllers/usersController.js';
import { PostsController } from '../src/controllers/postsController.js';
import { postPayload, commentPayload } from '../src/testData/payloads.js';

const todosController = new TodosController();
const usersController = new UsersController();
const postsController = new PostsController();

describe('JSONPlaceholder API', () => {
  it('GET /todos/1 returns valid todo', async () => {
    const res = await todosController.getTodoById(1);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  it('GET /users/1 returns valid user', async () => {
    const res = await usersController.getUserById(1);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({
      id: 1,
      name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
    });
  });

  it('GET /posts?userId=1 returns posts array', async () => {
    const res = await postsController.getPostsByUserId(1);

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
    const res = await postsController.createPost(postPayload);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject({
      ...postPayload,
      id: expect.any(Number),
    });
  });

  it('POST /comments returns created comment', async () => {
    const res = await postsController.createComment(commentPayload);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject({
      ...commentPayload,
      id: expect.any(Number),
    });
  });
});
