module.exports = {
    logError: (error, req, res, next) => {
        console.error(error.message);
        next();
    },
    resourceNotFound: (req, res) => {
        res.status(404);
        res.render("404");
    },
    internalServer: (req, res) => {
        res.status(500);
        res.render("500");
    }
}