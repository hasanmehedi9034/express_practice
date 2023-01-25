const express = require('express');

const app = express();

// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public`, {
//     index: 'home.html'
// }))
app.use()


app.get('/', (req, res) => {
    
    res.send('this is home page')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('this is home page with  post request');
})

app.listen(3000, () => {
    console.log('listening  on port 3000...');
});









