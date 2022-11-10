import routeAPI from './api/v1/routes/index';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//ZAM: imports Swagger
//ZAM: imports Routes
//ZAM: imports Middlewares
//ZAM: Config para variables de entorno
import config from './config/config';
// Import Routes

//ZAM: Declaramos la variable app igualandola a express
const app = express();
//ZAM: Establece la conexion a la BD
import { mongoose } from './config/database.config';
//ZAM: Settings
app.set('port', config.PORT);
//ZAM: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//ZAM: Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful Ejecutandoce en Principal</h1> <p> e--Commerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/ZAM', (req,res)=>{
    res.send(
        `<h1>RESTful Ejecutandoce en una Ruta diferente -> ZAM</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
// Routes
// Swagger Docs
// Middleware para el manejo de errores



// Routes
routeAPI(app); //Aqui da error

// Export App
export default app;