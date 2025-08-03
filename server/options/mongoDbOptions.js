export function getMongoDbOptions(config) {
    return {
        dbName: config.DATABASE_NAME
    }
}