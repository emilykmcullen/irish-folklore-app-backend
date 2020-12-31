const cors = require('cors');
const express = require('express');
const app = express();
const parser = require('body-parser');
const importData = require("./db/data.json");

let port = process.env.PORT || 3000;



app.use(parser.json());
app.use(cors());

// const MongoClient = require('mongodb').MongoClient;
// const createRouter = require('./helpers/create_router.js');

// MongoClient.connect('mongodb://localhost:27017')
//     .then((client) => {
//         const db = client.db('irish_folklore');
//         const charactersCollection = db.collection('characters');
//         const charactersRouter = createRouter(charactersCollection);
//         app.use('/api/characters', charactersRouter);
//     })
//     .catch(console.err);

// app.listen(3000, function () {
//     console.log(`Listening on port ${ this.address().port}`);
// });


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to irish folklore application.' });
  });

app.get("/api/characters", (req, res) =>{
    res.send(importData)
})

// app.get('/api/characters', (req, res) => {
//     res.json({ message: 'Welcome to irish folklore application.' });
// })


app.listen(port, () => {
    console.log(`server started on port ${port}`)
})