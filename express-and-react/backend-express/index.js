const express = require('express');
const path = require('path');

const app = express();

const usersSampleData = [
  {
    userId: 1,
    userName: "Jhon",
  },
  {
    userId: 2,
    userName: "Adam",
  },
  {
    userId: 3,
    userName: "Michael"
  },
];

app.get('/api/users', (req, res) => {
  res.json(usersSampleData);
})

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(5000);
