import { errorCodes } from "./errorCodes.js";

class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}

class NotFoundError extends BaseError {
    constructor(
        name,
        statusCode = errorCodes.NOT_FOUND,
        isOperational = true,
        description = "Not found"
    ) {
        super(name, statusCode, isOperational, description);
    }
}

class BadRequestError extends BaseError {
    constructor(
        name,
        statusCode = errorCodes.BAD_REQUEST,
        isOperational = true,
        description = "Bad request"
    ) {
        super(name, statusCode, isOperational, description);
    }
}

class InternalServerError extends BaseError {
    constructor(
        name,
        statusCode = errorCodes.INTERNAL_SERVER_ERROR,
        isOperational = true,
        description = "Internal server error"
    ) {
        super(name, statusCode, isOperational, description);
    }
}
