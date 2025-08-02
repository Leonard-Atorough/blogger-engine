import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// connection to mongo with mongoose, handling errors

connect(`${process.env.MONGO_CONNECTION_STRING}`);

const port = process.env.PORT_DEV;
app.listen(`${port}`, () => {
    console.log(`Application listening at http://localhost:${port}`);
});
