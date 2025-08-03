import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";

import { getMongoDbOptions } from "./options/mongoDbOptions.js";

import postRoutes from "./routes/post.js";
import {
    isOperationalError,
    logError
} from "./middleware/errors/errorHandler.js";
import { httpLogger } from "./middleware/logging/httpLogger.js";

const config = dotenv.config();

const app = express();

app.use(httpLogger);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", postRoutes);

// connection to mongo with mongoose, handling errors
const options = getMongoDbOptions(config);
console.log(options);
connect(`${process.env.MONGO_CONNECTION_STRING}`, options);

process.on("unhandledRejection", (error) => {
    throw error;
});

process.on("uncaughtException", (error) => {
    logError(error);

    if (!isOperationalError(error)) {
        process.exit(1);
    }
});

const port = process.env.PORT_DEV;
app.listen(`${port}`, () => {
    console.log(`Application listening at http://localhost:${port}`);
});
