exports.errorHandler = (error, req, res) => {
    console.error(error.stack)
    res.send("Not found");
}

exports.internalServerError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
    next()
}