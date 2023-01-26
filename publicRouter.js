const express = require('express');

const publicRouter = express.Router();

const log = (req,  res, next) => {
    console.log('This is all route');
    next();
}

// publicRouter.param('user', (req, res, next, id) =>  {
//     req.user = id ==  '1' ?  'Admin' : 'Anonymous';
//     next();
// })


publicRouter.param((param, option) => (req, res, next, val) => {
    if (val == option) {
        next();
    }
    else {
        res.sendStatus(403);
    }
});


publicRouter.param('user', '12');


// publicRouter.all('*', log);

publicRouter.get('/:user', (req, res) => {
    res.send('Hello Admin');
})

publicRouter.get('/post', (req, res) => {
    res.send('Login');
})

module.exports = publicRouter;
















