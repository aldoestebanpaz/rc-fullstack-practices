const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/aboutme', (req, res) => res.send('Paz Aldo Esteban!'));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`RollingCode - Example app listening on port ${port}!`))
