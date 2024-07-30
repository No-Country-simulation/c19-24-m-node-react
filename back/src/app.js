import express from "express";
import { errorHandler } from "./middelwares/errorHandler.js";
import { connectDB } from "./config/dbConfig.js";
import { options } from "./config/config.js";
import __dirname from "./utils.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/usersRoutes.js";
import testimonialsRoutes from "./routes/testimonialsRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import petsRoutes from "./routes/petsRoutes.js";
import adoptionRoutes from "./routes/adoptionRoutes.js";

const PORT = options.PORT || 8080;

const app = express();

const whitelist = [
    "http://localhost:3000", //parece q la white liste solo toma el primero
    "https://c19-24-m-react.onrender.com",
    "http://localhost:8080", 
    "https://c19-24-m-node.onrender.com",/** other domains if any */,
];
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));

// const corsOptions = {
//   origin: true,
//   credentials: true
// }
// app.options('*', cors(corsOptions));

// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Content-Type', 'application/json; charset=utf-8')
//   next();
// });

connectDB();

//ESTO POR SI JODE LOS CORS
// app.use(function (req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000/'];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//       res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(cookieParser("palabraSecreta", {}));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/testimonials", testimonialsRoutes);
app.use("/pets", petsRoutes);
app.use("/match", matchRoutes);
app.use("/adoptions", adoptionRoutes);

app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.log(
        `Escuchando el puerto ${PORT}, iniciando express en http://localhost:${PORT}/`
    );
});
