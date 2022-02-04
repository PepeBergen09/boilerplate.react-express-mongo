const supertest = require('supertest');
const app = require('./app')

describe('POST /users', () => {
    describe('given a username and password', () => {
        //should save the username and password to the database
        //should respond with a json object containing the user ID
        //should repond with a 200 status code
        test('should respond with a 200 status code', async() => {
          const response = await request(app).post("/users").send({
              username: "username",
              password: "password"
          })
           expect(response.statuscode).toBe(200)
        });
        
        //should specify json in the content type header
    });
    describe('when the username and password is missing', () => {
        //should respond with a status code of 400 
    });
    
    
});
