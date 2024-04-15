const fs = require("fs");
const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.send(subscribers);
        console.log(subscribers);
    } catch (error) {
        res.status(500);
        res.send("Internal Server Error");
    }
}

exports.createSubscriber = async (req, res) => {
    try {
        const data = await fs.promises.readFile("./views/index.ejs", "utf-8")
        const { email, firstname, lastname } = req.body;
        const newSubscriber = new Subscriber({ email, firstname, lastname });
        const saveSubscriber = await newSubscriber.save();
        res.status(201).json(saveSubscriber);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
}