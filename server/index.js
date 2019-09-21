const express = require('express');
const app = express();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const cors = require('cors');

app.use(cors());

app.get('/users', (request, response) => {
  response.json(
    db.get('users').write());
});

app.get('/events', (request, response) => {
  response.json(
    db.get('events').write());
});

app.post('/new-event', (request, response) => {
  db.get('events')
    .push({type: request.event.type, title: request.event.title, date: request.event.title})
    .write()
});

app.post('/remove-event', (request, response) => {
  db.get('events')
    .remove({type: request.event.type, title: request.event.title, date: request.event.title})
    .write()
});

app.listen(process.env.PORT || 3000);
