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
