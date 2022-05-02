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
