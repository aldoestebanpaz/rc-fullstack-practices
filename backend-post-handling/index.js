const express = require('express');

const DB = [];

const app = express();

app.use(express.json());

app.post('/api/users', function (request, response) {
  
  DB.push(request.body);
  
  response.json({
    status: "OK",
    message: "The new user has been saved"
  });
  
});

app.get('/api/users', function (request, response) {
  response.json(DB);
})

app.listen(3000, function() {
  console.log("The server is listening in port 3000!");
})