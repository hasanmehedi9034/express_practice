const handler  = (req, res) => {
    console.log('handler');
    res.send('Hello world');
}

module.exports = handler