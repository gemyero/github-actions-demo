const { server } = require('../src/server');

let url = null;

beforeAll(async () => {
  ({ url } = await server.listen(0));
});

afterAll(async () => {
  await server.stop();
});

describe('Test #1', () => {
  it('should pass', () => {
    console.log(url);
    expect(1).toBe(1);
  });
});
