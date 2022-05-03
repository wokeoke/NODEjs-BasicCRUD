### NODEjs Basic Crud Application

---

#### Video Tutorial

**Complete CRUD Application with Node, Express & MongoDB**

```url
https://www.youtube.com/watch?v=W1Kttu53qTg&t=5293s
```

**Github Repo**

```url
https://github.com/akashyap2013/CRUD_Application_Node
```

---

#### Install Dependencies

```sh
npm install
```

#### Start Server

```sh
npm start
```

---

#### config.env

```
PORT=3000
```

---

#### Project Structure

```sh
root
│ config.env
│ server.js
│ README.md
│
├── assets
│   ├── css
│   ├── img
│   └── js
│
├── server
│   ├── controller
│   ├── database
│   ├── model
│   ├── routes
│   └── services
│
└── views
```

---

#### HTTP Server

```js
server.js;

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('CRUD Application');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

#### Modules

```js
server.js;

const bodyparser = require('body-parser');
const path = require('path');
.
.
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, './views'));

// load assets
app.use('/css', express.static(path.resolve(__dirname, './assets/css')));
app.use('/img', express.static(path.resolve(__dirname, './assets/img')));
app.use('/js', express.static(path.resolve(__dirname, './assets/js')));
```

---

#### Views

- Render index.ejs

```js
server.js;

.
.
app.get('/', (req, res) => {
  res.render('index');
});
```

- Direct to "views" Folder
- **Create index.ejs**
- Check the file on localhost

```html
index.ejs;

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CRUD Application</title>
  </head>
  <body>
    <!-- HEADER -->
    <header id="header">
      <nav>
        <div class="container">
          <div class="text-center">
            <a href="/" class="nav-brand text-dark">User Management System</a>
          </div>
        </div>
      </nav>
    </header>
    <!-- /HEADER -->
  </body>
</html>
```

---

#### Main Section

- Create dummy index.html
- Copy content from index.ejs

```html
index.html

<!-- /HEADER -->
.
<!-- MAIN SITE -->
<main id="site-main">
  <div class="container">
    <div class="box-nav d-flex justify-between">
      <a href="/add-user" class="border-shadow">
        <span class="text-gradient">New User <i class="fas fa-user"></i></span>
      </a>
    </div>

    <!-- FORM HANDLING -->
    <form action="/" method="POST">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Username</td>
            <td>example@demo.com</td>
            <td>Male</td>
            <td>Active</td>
            <td>
              <a href="#" class="btn border-shadow update">
                <span class="text-gradient">
                  <i class="fas fa-pencil-alt"></i>
                </span>
              </a>

              <a class="btn border-shadow delete">
                <span class="text-gradient">
                  <i class="fas fa-times"></i>
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</main>
<!-- /MAIN SITE -->
```

---

#### Styling HTML

- Create style.css
- Folder assets/css/style.css

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=PT+Sans&display=swap');

:root {
  --dark: #2b2d42;
  --light: #adb5bd;
  --border: #dee2e6;
  --border-btn: #edf2f4;
}
```

---

#### Table & Form

- Create new dummy add_user.html
- Folder views/add_user.html

```html
add_user.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CRUD Application</title>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../assets/css/style.css" />
  </head>
  <body>
    <!-- HEADER -->
    <header id="header">
      <nav>
        <div class="container">
          <div class="text-center">
            <a href="/" class="nav-brand text-dark">User Management System</a>
          </div>
        </div>
      </nav>
    </header>
    <!-- /HEADER -->

    <!-- MAIN SITE -->
    <main id="site-main">
      <div class="container">
        <div class="box-nav d-flex justify-between">
          <div class="filter">
            <a href="/">
              All Users
              <i class="fas fa-angle-double-left"></i>
            </a>
          </div>
        </div>
        <div class="form-title text-center">
          <h2 class="text-dark">New User</h2>
          <span class="text-light">
            Use the below form to create a new account
          </span>
        </div>

        <!-- FORM HANDLING -->
        <form method="POST" id="update_user">
          <div class="new_user">
            <div class="form-group">
              <label for="name" class="text-light">Name</label>
              <input type="hidden" name="id" value="" />
              <input type="text" name="name" placeholder="Mark Stoennis" />
            </div>

            <div class="form-group">
              <label for="email" class="text-light">Email</label>
              <input type="text" name="email" placeholder="email@example.com" />
            </div>

            <div class="form-group">
              <label for="gender" class="text-light">Gender</label>
              <div class="radio inline">
                <input type="radio" name="gender" value="Male" />
                <label for="gender" class="text-light">Male</label>
              </div>
              <div class="radio inline">
                <input type="radio" name="gender" value="Female" />
                <label for="gender" class="text-light">Female</label>
              </div>
            </div>

            <div class="form-group">
              <label for="status" class="text-light">Status</label>
              <div class="radio inline">
                <input type="radio" name="status" value="Active" />
                <label for="status" class="text-light">Active</label>
              </div>
              <div class="radio inline">
                <input type="radio" name="status" value="Inactive" />
                <label for="status" class="text-light">Inactive</label>
              </div>
            </div>

            <div class="form-group">
              <button type="submit" class="btn text-dark update">Save</button>
            </div>
          </div>
        </form>
      </div>
    </main>
    <!-- /MAIN SITE -->
  </body>
</html>
```

---

#### Styling Form

- Folder assets/css/style.css

```css
style.css
.
.
/* ADD USER & UPDATE USER TEMPLATE */
#update_user .form-group input[type='text'],
#add_user .form-group input[type='text'] {
  width: 100%;
  padding: 0.6em 1em;
  margin: 0.5em 0;
  border: 1px solid var(--border);
  font-family: 'Barlow', sans-serif;
  font-size: 1em;
  border-radius: 0.2em;
}

/* ADDING STYLE TO RADIO BUTTONS */
.radio input[type='radio'] {
  position: absolute;
  opacity: 0;
}

.radio input[type='radio'] + .radio-label:before {
  content: '';
  background: var(--border-btn);
  border-radius: 100%;
  border: 1px solid var(--border);
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
  top: -0em;
  margin-right: 0.5em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}

.radio input[type='radio']:checked + .radio-label:before {
  background-color: #16db93;
  box-shadow: inset 0 0 0 4px #e9ecef;
}

.radio input[type='radio']:focus + .radio-label:before {
  outline: none;
  border-color: #16db93;
}

.radio input[type='radio']:disabled + .radio-label:before {
  box-shadow: inset 0 0 0 4px #e9ecef;
  border-color: #b4b4b4;
  background: #b4b4b4;
}
```

- Folder views/add_user.html
- Add **id** to input element
- Change label's **for** equal to input's **id**

```html
add_user.html

<div class="form-group">
  <label for="gender" class="text-light">Gender</label>
  <div class="radio inline">
    <input type="radio" id="radio-2" name="gender" value="Male" />
    <label for="radio-2" class="radio-label">Male</label>
  </div>
  <div class="radio inline">
    <input type="radio" id="radio-3" name="gender" value="Female" />
    <label for="radio-3" class="radio-label">Female</label>
  </div>
</div>

<div class="form-group">
  <label for="gender" class="text-light">Status</label>
  <div class="radio inline">
    <input type="radio" id="radio-4" name="status" value="Active" />
    <label for="radio-4" class="radio-label">Active</label>
  </div>
  <div class="radio inline">
    <input type="radio" id="radio-5" name="status" value="Inactive" />
    <label for="radio-5" class="radio-label">Inactive</label>
  </div>
</div>
```

---

#### EJS

- ##### File Structure

```sh
root
└── views
      │ add_user.ejs
      │ index.ejs
      │ update_user.ejs
      │
      └── include
            │ _footer.ejs
            │ _form.ejs
            │ _header.ejs
            │ _show.ejs
```

- ##### index.ejs

```html
<!-- include header -->
<%- include('include/_header') %>
<!-- /include header -->

<!-- MAIN SITE -->
<main id="site-main">
  <div class="container">
    <div class="box-nav d-flex justify-between">
      <a href="/add-user" class="border-shadow">
        <span class="text-gradient">
          New User <i class="fas fa-user"></i>
        </span>
      </a>
    </div>

    <!-- FORM HANDLING -->
    <form action="/" method="POST">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <%- include('include/_show') %>
        </tbody>
      </table>
    </form>
  </div>
</main>
<!-- /MAIN SITE -->

<!-- include footer -->
<%- include('include/_footer') %>
<!-- /include footer -->
```

- ##### \_show.ejs

```html
<tr>
  <td>1</td>
  <td>Username</td>
  <td>example@demo.com</td>
  <td>Male</td>
  <td>Active</td>
  <td>
    <a href="/update-user" class="btn border-shadow update">
      <span class="text-gradient">
        <i class="fas fa-pencil-alt"></i>
      </span>
    </a>

    <a class="btn border-shadow delete">
      <span class="text-gradient">
        <i class="fas fa-times"></i>
      </span>
    </a>
  </td>
</tr>
```

- ##### add_user.ejs

```html
<!-- include header -->
<%- include('include/_header') %>
<!-- /include header -->

<!-- MAIN SITE -->
<main id="site-main">
  <div class="container">
    <div class="box-nav d-flex justify-between">
      <div class="filter">
        <a href="/">
          <i class="fas fa-angle-double-left"></i>
          All Users
        </a>
      </div>
    </div>
    <div class="form-title text-center">
      <h2 class="text-dark">New User</h2>
      <span class="text-light">
        Use the below form to create a new account
      </span>
    </div>

    <!-- ADD USER FORM -->
    <%- include('include/_form') %>
  </div>
</main>
<!-- /MAIN SITE -->

<!-- include footer -->
<%- include('include/_footer') %>
<!-- /include footer -->
```

- ##### \_form.ejs

```html
<!-- FORM HANDLING -->
<form method="POST" id="add_user">
  <div class="new_user">
    <div class="form-group">
      <label for="name" class="text-light">Name</label>
      <input type="hidden" name="id" value="" />
      <input type="text" name="name" placeholder="Mark Stoennis" />
    </div>

    <div class="form-group">
      <label for="email" class="text-light">Email</label>
      <input type="text" name="email" placeholder="email@example.com" />
    </div>

    <div class="form-group">
      <label for="gender" class="text-light">Gender</label>
      <div class="radio inline">
        <input type="radio" id="radio-2" name="gender" value="Male" />
        <label for="radio-2" class="radio-label">Male</label>
      </div>
      <div class="radio inline">
        <input type="radio" id="radio-3" name="gender" value="Female" />
        <label for="radio-3" class="radio-label">Female</label>
      </div>
    </div>

    <div class="form-group">
      <label for="gender" class="text-light">Status</label>
      <div class="radio inline">
        <input type="radio" id="radio-4" name="status" value="Active" />
        <label for="radio-4" class="radio-label">Active</label>
      </div>
      <div class="radio inline">
        <input type="radio" id="radio-5" name="status" value="Inactive" />
        <label for="radio-5" class="radio-label">Inactive</label>
      </div>
    </div>

    <div class="form-group">
      <button type="submit" class="btn text-dark update">Save</button>
    </div>
  </div>
</form>
```

- ##### server.js

```js
// load assets
.
.
// URL_ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/add-user', (req, res) => {
  res.render('add_user');
});

app.get('/update-user', (req, res) => {
  res.render('update_user');
});
```

---

#### Routes

- ##### File Structure

```sh
root
│ server.js
│
└── server
      ├── routes
      │     │ router.js
      │
      └── services
            │ render.js
```

- **server.js**
- replace // URL_ROUTES to // load routers

```js
// load assets
.
.
// load routers
app.use('/', require('./server/routes/router'));
```

- ##### router.js

```js
const express = require('express');
const route = express.Router();

const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user);

module.exports = route;
```

- ##### render.js

```js
exports.homeRoutes = (req, res) => {
  res.render('index');
};

exports.add_user = (req, res) => {
  res.render('add_user');
};

exports.update_user = (req, res) => {
  res.render('update_user');
};
```

---

#### MongoDB

- ##### File Structure

```sh
root
│ config.env
│ server.js
│
└── server
      │
      └── database
            │ connection.js
```

- ##### config.env

```
MONGO_URI= // mongoDB string
```

- ##### connection.js

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

- ##### server.js

```js
const connectDB = require('./server/database/connection');
.
// log request
.
// mongodb connection
connectDB();
```

---

#### API

- ##### File Structure

```sh
root
└── server
      ├── controller
      │     │ controller.js
      │
      ├── model
      │     │ model.js
      │
      └── routes
            │ router.js
```

- ##### model.js

```js
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
```

- ##### controller.js

```js
var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
  res.send('create');
};

// retrieve and return all users or retrieve and return a single user
exports.find = (req, res) => {
  res.send('find');
};

// update a new identified user by user id
exports.update = (req, res) => {
  res.send('update');
};

// delete a user with specified user id in the request
exports.delete = (req, res) => {
  res.send('delete');
};
```

- ##### router.js

```js
.
const controller = require('../controller/controller');
.
.
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
```

---

#### Create New User

- ##### controller.js

```js
// create and save new user
exports.create = (req, res) => {
  // VALIDATE REQUEST
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' });
    return;
  }

  // NEW USER
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // SAVE USER IN THE DATABASE
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          'Some error occurred while creating a create operation',
      });
    });
};
```

- ##### Postman
- Testing in postman

```
Method  : POST
URL     : http://localhost:3000/api/users
Request : Body
Type    : x-www-form-urlencoded
```

- example

| KEY    | Value         |
| ------ | ------------- |
| name   | John Doe      |
| email  | john@demo.com |
| gender | Male          |
| status | Active        |

---
