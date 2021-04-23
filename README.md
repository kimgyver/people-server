# Node JS REST server – People Management Server

```bash
npm install
npm start
```

## Code structure

Index.js: Main program

- Initialize Express server as the web server.
- Set router modules for the express server.
- Open express server port 2000 for the REST service.

Router.js: Implementation of routing methods dealing with REST APIs for

- creating user
- searching for users
- getting only one user information by key
- updating user
- deleting user

Db.js: Implementation of database CRUD methods including the following.

- insert new user.
- Search users with combining gender condition and age condition.
- Get one user.
- Update user information.
- Delete user.

## Utilities / Libraries

Logging

- Utilizing the Winston Node JS library
- Implemented in src/logger.js code.
- Defined logging level: Information, Debugging, Error
- logs are displayed at console and saved in log files located in /logs directory.
  Cors
- Enable the internet browser to permit access to Node JS/Express web server.
- CORS library does this by required settings in terms of Cross Origin Resource Sharing

Env-cmd

- For the purpose of Environment variable management
- Differentiate Production / Testing environment

## Unit Testing

```bash
npm run test
```

Utilizing Jest version 23.6.0

### Code structure

- Test case implementations: /src/tests/people.test.js
- Testing cases
  a. Insert: REST post call
  b. Search: REST get call
  c. Select: RESET get call
  d. Update: REST put call
  e. Delete: REST delete call
- Mocking implementations: /src/tests/fixture/db.js, /src/tests/fixture/dbInstance.js
- The way of mocking: making testing data with 5 people, using separate database file (/db.test.json) for testing environment.

### Current Bug/Limitation

- Infinite loop occurs sometimes, not always.
- According to my investigation until now, it is related to Jest version, also related to the mechanism of NeDB which is a file-based Database.
- Still cannot figure out the reason why it sometime does loop. But test result could be checked out.
