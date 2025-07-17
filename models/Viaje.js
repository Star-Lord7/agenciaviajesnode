//Importamos la instancia de Sequelize
import { Sequelize } from "sequelize";
//Importamos la instancia de conexión a la base de datos
import db from "../config/db.js";

//Definimos el modelo Viaje
export const Viaje = db.define('viajes',{
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});