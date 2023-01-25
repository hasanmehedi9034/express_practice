const express = require('express');

const app = express();
const admin = express();

app.use('/admin', admin);

app.get('/', (req, res) => {
    console.log('this is main app');
    res.send('Hello main app')
})

admin.get('/', (req, res) => {
    console.log('this is admin');
    res.send('Hello admin page')
})

app.listen(3000);

