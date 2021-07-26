exports.helloWorld = (req, res) => {
    console.log(req.body.name);
    res.send({ message: 'a response'});
};