const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/endpoint1', (req, res) => {
  res.send('Endpoint 1');
});

app.get('/api/endpoint2', (req, res) => {
  res.send('Endpoint 2');
});

app.get('/api/endpoint3', (req, res) => {
  res.send('Endpoint 3');
});

app.get('/api/endpoint4', (req, res) => {
  res.send('Endpoint 4');
});

app.get('/api/endpoint5', (req, res) => {
  res.send('Endpoint 5');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
