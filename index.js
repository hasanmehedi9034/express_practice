const express = require('express');

const app = express();
const handle = require('./handle')

// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public`, {
//     index: 'home.html'
// }))
// app.use()

app.locals.title = 'My App';


app.get('/', handle)

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('this is home page with  post request');
})

app.listen(3000, () => {
    console.log('listening  on port 3000...');
});









