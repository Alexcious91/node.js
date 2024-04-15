const express = require("express");
const router = express.Router();

const subsciberController = require("../controllers/subscriberController");

router.get("/subscribers", subsciberController.getAllSubscribers);

router.post("/new/subscriber", subsciberController.createSubscriber);

module.exports = router;