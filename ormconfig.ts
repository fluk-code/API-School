module.exports = { 
    "type": "postgres", 
    "host": "database", 
    "port": process.env.DB_PORT, 
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB, 
    "entities": ["src/entities/**/*.ts"], 
    "migrations": ["src/database/migrations/**/*.ts"], 
    "cli": { 
       "entitiesDir": "src/entities", 
       "migrationsDir": "src/database/migrations" 
    } 
}