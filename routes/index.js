import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio); // Ruta para la página de inicio

router.get('/nosotros', paginaNosotros); // Ruta para la página "Nosotros"

router.get('/viajes', paginaViajes); // Ruta para la página "Viajes"

// Ruta para la página "Detalle Viaje" donde le pasamos 
// el slug del viaje que es un identificador único
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales); // Ruta para la página "Testimoniales"

router.post('/testimoniales', guardarTestimonial); // Ruta para guardar un testimonio

export default router;