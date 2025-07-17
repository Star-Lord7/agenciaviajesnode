import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG para las vistas
app.set('view engine', 'pug'); //Aqui se define el motor de plantillas

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date(); // Crear un objeto de fecha
    res.locals.actualYear = year.getFullYear(); // Hacer disponible el año en las vistas
    res.locals.nombreSitio = 'Agencia de Viajes'; // Hacer disponible el nombre del sitio en las vistas
    next(); // Llamar al siguiente middleware
});

// Agregar Body Parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true })); // Permite leer datos de formularios

//Definir la carpeta public
app.use(express.static('public')); //Aqui se define la carpeta que contiene los archivos estáticos como CSS, imágenes, etc.

//Agregar router usando "use" porque soporta varios métodos HTTP
app.use('/', router); // Aquí se define la ruta base para el router

//Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
})