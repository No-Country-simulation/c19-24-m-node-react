import express from 'express';
import {connectDB} from './config/dbConfig.js';
import {options} from './config/config.js';
import __dirname from './utils.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import userRoutes from './routes/usersRoutes.js'
import petsRoutes from './routes/petsRoutes.js'


const PORT = options.PORT || 8080;

const app = express();

//como la URL de la DB no esta lita si corres el server va a dar error
connectDB();

//esto para axios o fetch dependera del front
const corsOptions = {
    origin: true,
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/pets", petsRoutes);

const server = app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto ${PORT}, iniciando express en http://localhost:${PORT}/`);
});