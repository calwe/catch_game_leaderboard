const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let leaderboard = [];
let MAXID = 0;

app.get('/leaderboard', (req, res) => {
    res.send(JSON.stringify({ leaderboard }));
});

app.post('/addscore', (req, res) => {
    const name = req.body.name.toString();
    const score = req.body.score.toString();
    leaderboard[MAXID++] = { name, score };
    res.send('OK');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));