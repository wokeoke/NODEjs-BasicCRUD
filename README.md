### NODEjs Basic Crud Application

---

##### Video Tutorial

```properties
Complete CRUD Application with Node, Express & MongoDB

https://www.youtube.com/watch?v=W1Kttu53qTg&t=5293s
```

---

##### Install Dependencies

```properties
npm install
```

##### Start Server

```properties
npm start
```

---

##### config.env

```properties
PORT=3000
```

---

##### Project Structure

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

##### HTTP Server

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
