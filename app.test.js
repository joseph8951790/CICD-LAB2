const request = require('supertest');
const app = require('./app');

describe('Express App Routes', () => {
  
  test('Home route responds correctly', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('/health route returns healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('healthy');
  });

  test('/nonexistent route returns 404', async () => {
    const res = await request(app).get('/fake');
    expect(res.statusCode).toBe(404);
  });
});
