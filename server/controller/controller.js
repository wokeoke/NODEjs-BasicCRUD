var Userdb = require('../model/model');

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

// retrieve and return all users or retrieve and return a single user
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || 'Error occurres while retriving user information',
      });
    });
};

// update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }

  const id = req.params.id;

  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id: ${id}. Maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({ message: 'Error update user information' });
    });
};

// delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot delete with id: ${id}. Maybe id is wrong` });
      } else {
        res.send({ message: 'User was deleted successfully' });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: `Could not delete user with id: ${id}` });
    });
};
