import { BaseError } from "./errors";
import { logger } from "../logging/logger.js";

function logError(err) {
    logger.error(err);
}

function logErrorMiddleware(err, req, res, next) {
    logError(err);
    next(err);
}

function returnError(err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message);
}

function isOperationalError(err) {
    if (err instanceof BaseError) {
        return err.isOperational;
    }
    return false;
}

export { logError, logErrorMiddleware, returnError, isOperationalError };
