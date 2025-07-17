import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false, // Desactivar los campos createdAt y updatedAt
    },
    pool: {
        max: 5, // Máximo de conexiones en el pool
        min: 0, // Mínimo de conexiones en el pool
        acquire: 30000, // Tiempo máximo para adquirir una conexión
        idle: 10000, // Tiempo máximo que una conexión puede estar inactiva antes de ser liberada
    },
    operatorsAliases: false,
});

export default db;