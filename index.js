const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/:i', (req, res) => {

    const param = req.params['i'];

    const i = parseInt(param);

    const square = i * i;

    res.send(square.toString());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})