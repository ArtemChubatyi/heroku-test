const express = require('express');
const app = express();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);


app.get('/', (request, response) => {
  response.send('Hello world');
});


app.get('/users', (request, response) => {
  response.json(
    db.get('users').write());
});

app.get('/events', (request, response) => {
  response.json(
    db.get('events').write());
});


app.listen(3000);
