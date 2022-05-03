### NODEjs Basic Crud Application

---

#### Video Tutorial

```properties
Complete CRUD Application with Node, Express & MongoDB

https://www.youtube.com/watch?v=W1Kttu53qTg&t=5293s
```

---

#### Install Dependencies

```properties
npm install
```

#### Start Server

```properties
npm start
```

---

#### config.env

```properties
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
- forlder assets/css/style.css

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
