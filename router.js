const express = require('express');
const adminRouter = require('./adminRouter')
const publicRouter = require('./publicRouter')

const app = express();

app.use('/admin', adminRouter);
app.use('/public', publicRouter);

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})