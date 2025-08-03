import winston, { format, level, transports } from "winston";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "blogger-engine-api" },
    transports: [
        winston.transports.File({ filename: "error.log", level: "error" }),
        winston.transports.File({ filename: "combined.log", level: "info" })
    ]
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new transports.Console({
            format: format.combine(format.colorize(), format.simple())
        })
    );
}

export { logger };
