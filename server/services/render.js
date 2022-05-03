const axios = require('axios');

exports.homeRoutes = (req, res) => {
  // Make get request to /api/users
  axios
    .get('http://localhost:3000/api/users')
    .then((response) => {
      // res.render('index', { users: 'New Data' });
      // console.log(response.data);
      res.render('index', { users: response.data });
    })
    .catch((error) => res.send(error));
};

exports.add_user = (req, res) => {
  res.render('add_user');
};

exports.update_user = (req, res) => {
  res.render('update_user');
};
