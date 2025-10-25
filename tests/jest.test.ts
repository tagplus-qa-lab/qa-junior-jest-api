import supertest from 'supertest'

export const testServer = supertest("https://gorest.co.in/public/v2")

describe('GoRest API', () => {
  it('GET /users should return list of users', async () => {
    const response = await testServer.get('/users'); 
    console.log("response: ", response)
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  
  
});