var Userdb = require('../model/model');

// CREATE AND SAVE NEW USER
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
