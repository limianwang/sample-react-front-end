'use strict';

var jwt = require('jwt-simple');
var cors = require('cors');

var secret = 'some_secret_password';

var app = require('express')();

app.use(cors());

app.post('/login', function(req, res) {
  var payload = {
    user: 'test',
    user_id: 1313131
  };

  var decoded = jwt.encode(payload, secret);
  console.log("returning jwt", decoded);

  res.status(200).send({ token: decoded });
});

app.listen(3001);
