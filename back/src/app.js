import express from "express";
import { errorHandler } from "./middelwares/errorHandler.js";
import {connectDB} from './config/dbConfig.js';
import {options} from './config/config.js';
import __dirname from './utils.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import userRoutes from './routes/usersRoutes.js';
import testimonialsRoutes from './routes/testimonialsRoutes.js';
import matchRoutes from './routes/matchRoutes.js'; 
import petsRoutes from './routes/petsRoutes.js';

const PORT = options.PORT || 8080;

const app = express();

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
app.use("/testimonials", testimonialsRoutes);
app.use("/pets", petsRoutes);
app.use('/match', matchRoutes);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(
    `Escuchando el puerto ${PORT}, iniciando express en http://localhost:${PORT}/`
  );
});
