//Importamos la instancia de Sequelize
import { Sequelize } from "sequelize";
//Importamos la instancia de conexión a la base de datos
import db from "../config/db.js";

//Definimos el modelo Testimonial
export const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});