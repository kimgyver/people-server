const request = require('supertest');
const app = require('../index');
const { insert, getOne, remove, update, search } = require('../db');
const { setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create new user', async () => {
  const response = await request(app)
    .post('/user')
    .send({
      name: 'Simon',
      age: 33,
      gender: 'male',
    })
    .expect(200);

  const person = await getOne(response.body._id);
  expect(person).not.toBeNull();
});

test('Should get users', async () => {
  const response = await request(app)
    .get('/users?gender=male&age=20&isGreaterThan=true')
    .send()
    .expect(200);

  expect(response.body.length > 0);

  const person = await getOne(response.body[0]._id);
  expect(person).not.toBeNull();
});

test('Should change user info', async () => {
  const users = await search({ genderParam: {}, ageParam: {} });
  // console.log(users);

  const userinfo = { name: 'changedname', age: 10, gender: 'female' };
  // console.log(users[0]._id);

  const response = await request(app)
    .put('/user/' + users[0]._id)
    .send(userinfo)
    .expect(200);

  const person = await getOne(users[0]._id);
  expect(person.name).toBe(userinfo.name);
  expect(person.age).toBe(userinfo.age);
  expect(person.gender).toBe(userinfo.gender);
});

test('Should delete a user', async () => {
  const users = await search({ genderParam: {}, ageParam: {} });

  const response = await request(app)
    .delete('/user/' + users[0]._id)
    .send()
    .expect(200);

  const person = await getOne(users[0]._id);
  expect(person).toBeNull();
});
