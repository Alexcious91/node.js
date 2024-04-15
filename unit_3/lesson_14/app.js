const express = require("express");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const subscriberRoutes = require("./routes/router");
const middleware = require("./middleware/middleware");
const app = express();
const port = 3000;

// app.
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`request method: ${req.method}, URL: ${req.url}`);
    next();
})

// connect to the database
mongoose.connect("mongodb://localhost:27017/clients", {
    useUnifiedTopology: true
})
.then(() => console.log("Successfully connected to database"))
.catch((err) => console.log("Connection failed: ", err));

app.use("/", subscriberRoutes)
app.use(middleware.errorHandler);
app.use(middleware.internalServerError);

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
});