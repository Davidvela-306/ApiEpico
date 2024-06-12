// Requerir los módulos
import routerTour from "./routers/tour_routes.js";
import routerUser from "./routers/user_routes.js";
import express from "express";
import morgan from "morgan"; //El middleware morgan en una aplicación Express.js se utiliza principalmente para registrar (log) las solicitudes HTTP que llegan al servidor.

// Inicializaciones
const app = express();
app.use(morgan("dev"));

// Variables
app.set("port", process.env.port || 3000);

// Middlewares
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Server on");
});
app.use("/api", routerTour);

app.use("/api", routerUser);

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

// Exportar la instancia de express por medio de app
export default app;
