const { server } = require('../src/server');
const { request, gql } = require('graphql-request');

let url = null;

beforeAll(async () => {
  ({ url } = await server.listen(0));
});

afterAll(async () => {
  await server.stop();
});

describe('Test #3', () => {
  it('should pass', async () => {
    const query = gql`
      query {
        me {
          id
          name
          age
        }
      }
    `;

    const res = await request(`${url}graphql`, query);

    expect(res).toHaveProperty('me');

    expect(res.me).toHaveProperty('id');
    expect(res.me).toHaveProperty('name');
    expect(res.me).toHaveProperty('age');

    expect(res.me.name).toBe('Mohamed Gamal');
    expect(res.me.age).toBe(30);
  });
});
