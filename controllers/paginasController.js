import { Viaje } from '../models/Viaje.js'; // Importamos el modelo Viaje
import { Testimonial } from '../models/Testimoniales.js'; // Importamos el modelo Testimonial

const paginaInicio = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde

    //Consultamos 3 viajes del modelo Viaje

    // Creamos un array de promesas para realizar consultas a la base de datos en paralelo
    const primiseDB = [];

    // findAll para obtener todos los registros de la tabla, limit: 3 limita a 3 resultados
    primiseDB.push(Viaje.findAll({ limit: 3 })); // Obtenemos los primeros 3 viajes
    primiseDB.push(Testimonial.findAll({ limit: 3 })); // Obtenemos los primeros 3 testimoniales

    try {
        // Guardamos el resultado de las consultas en una variable
        // Promise.all permite ejecutar múltiples promesas en paralelo y esperar a que todas se resuel
        const resultado = await Promise.all(primiseDB); // Esperamos a que ambas consultas se completen

        res.render('inicio',{ //"render" espera el nombre de una VISTA
            // Creamos un objeto que contiene los datos que queremos enviar a la vista
            pagina: 'Inicio',
            clase: 'home', // Esta clase se puede usar para aplicar estilos específicos a la página de inicio
            viajes: resultado[0], // Pasamos los viajes a la vista que esta en la posición 0 del array
            testimoniales: resultado[1] // Pasamos los testimoniales a la vista que esta en la posición 1 del array
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros',{ //"render" espera el nombre de una VISTA
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar Base de Datos
    // findAll se usa para obtener todos los registros de la tabla
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes',{ //"render" espera el nombre de una VISTA
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll(); // Obtener todos los testimoniales

        res.render('testimoniales',{ //"render" espera el nombre de una VISTA
            pagina: 'Testimoniales',
            testimoniales // Pasar los testimoniales a la vista
        });
    } catch (error) {
        console.log(error);
    }
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    // "params" es un objeto que contiene los parámetros de la URL
    // En este caso, estamos obteniendo el slug del viaje
    const { slug } = req.params;

    try {
        // Buscamos el viaje por su slug
        // findOne se usa para obtener un único registro que coincida con la condición
        // Y usamos "where" para especificar la condición de búsqueda
        const viaje = await Viaje.findOne({where: {slug }})

        // Redirigimos a la vista "viaje" y le pasamos el resultado
        res.render('viaje', { //"render" espera el nombre de una VISTA
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}