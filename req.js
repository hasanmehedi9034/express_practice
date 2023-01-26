/*

req.baseurl
req.originalUrl
req.path
req.hostname
req.ip
req.method
req.protocol
req.params
req.quary
req.body
req.cookies
req.signedCookies
req.secure

*/

const express = require('express');
const cookieParser = require('cookie-parser');
const { handler } = require('./handler')

const app = express();


// const adminRoute = express.Router();



app.use('/admin', adminRoute);
app.use(cookieParser()); // cookie parser

// adminRoute.get('/dashboard', (req, res) => {
//     res.send('We are  in admin dashboard');
// })

app.get('/', handler)

app.listen(3000, () => {
    console.log('listening to port 3000...');
})














