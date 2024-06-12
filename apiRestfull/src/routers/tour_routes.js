import { Router } from "express"; // forma eficiente de manejar las rutas en una aplicación Express
import { verifyToken } from "../middlewares/auth.js";
import {
  createTourController,
  deleteTourController,
  getAllToursController,
  getTourByIDController,
  updateTourController,
  getAllEmpresasController,
  createEmpresasController
} from "../controllers/tour_controller.js";

const router = Router();

router.get("/tours", getAllToursController); //?Públicas
router.get("/tours/:id", getTourByIDController); //?Públicas
router.post("/tours", verifyToken, createTourController); //!privadas
router.put("/tours/:id", verifyToken, updateTourController); //!privadas
router.delete("/tours/:id", verifyToken, deleteTourController); //!privadas

//TODO Nuevas rutas:
router.get("/empresas", getAllEmpresasController); //?Públicas
router.post("/empresas", verifyToken, createEmpresasController); //!privadas


export default router;
