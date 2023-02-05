const express = require('express');
const app = express();
const port = 8602;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.all('/:project', (req, res) => {
    res.send(req.params.project);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
