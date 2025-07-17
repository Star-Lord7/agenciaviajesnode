// Importamos el modelo Testimonial
import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    // Validamos

    // "req.body" contiene los datos del formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({ mensaje: 'Nombre vacío' });
    }

    if(correo.trim() === ''){
        errores.push({ mensaje: 'Correo vacío' });
    }

    if(mensaje.trim() === ''){
        errores.push({ mensaje: 'Mensaje vacío' });
    }

    if(errores.length > 0){
        //Consultar Testimoniales existentes
        const testimoniales = await Testimonial.findAll(); // Obtener todos los testimoniales

        // Si hay errores, renderizamos la vista con los errores
        return res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales // Pasamos los testimoniales a la vista
        });
    } else{
        // Si no hay errores, lo guardamos en la Base de Datos
        try {
            // Guardamos el testimonio en la base de datos
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            // Redireccionamos a la página de testimoniales
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }

    }

    // Si no hay errores, guardamos el testimonio
    console.log('Testimonio guardado');
}

export { 
    guardarTestimonial
};