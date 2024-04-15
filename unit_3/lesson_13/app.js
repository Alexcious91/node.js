const express = require("express");
const Db = require("mongodb/lib/db");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/**
 * 1st option to connect to database
 */
const databaseURL = "mongodb://localhost:27017";
const databaseName = "recipe_db";

MongoClient.connect(databaseURL, (error, client) => {
    if (error) {
        console.error("Error connecting to database: ", error) // 
        return
    }

    const database = client.db(databaseName);
    const collection = database.collection("contacts");

    collection.find().toArray((error, data) => {
        if (error) {
            console.log("Error finding data in database: ", error);
            return;
        }
        console.log(data);
    });
});

/**
 * 2nd Option to connect to database
 */
// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/recipe_db")
//         console.log("Connected to Database");
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// connectToDatabase();

/**
 * 3rd option to connect to database
 */

// mongoose.connect("mongodb://localhost:27017/recipe_db")
//     .then(() => {
//         console.log("Connected to database");
//         // After connection succeeded run application
//         app.listen(port, () => {
//             console.log(`Server started listening at http://localhost:${port}`);
//         });
//     })
//     .catch((error) => {
//         console.error(`Error connecting to database: ${error.message}`);
//     })


app.get("/", (req, res) => {
    res.status(200).send("Home page");
});

