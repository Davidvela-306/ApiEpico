import tourModel from "../models/tour.js";
import { v4 as uuidv4 } from "uuid"; //para generar identificadores únicos

const getAllToursController = async (req, res) => {
  try {
    const tours = await tourModel.getAllToursModel();
    res.status(200).json(tours);
  } catch (error) {
    res.json(error);
  }
};

const getTourByIDController = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await tourModel.getTourByIdModel(id);
    const status = tour.error ? 404 : 200;
    res.status(status).json(tour);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTourController = async (req, res) => {
  const newTourData = {
    id: uuidv4(),
    ...req.body,
  };
  try {
    const tour = await tourModel.createTourModel(newTourData);
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTourController = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await tourModel.updateTourModel(id, req.body);
    const status = tour.error ? 404 : 200;
    res.status(status).json(tour);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTourController = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await tourModel.deleteTourModel(id);
    const status = tour.error ? 404 : 200;
    res.status(status).json(tour);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllEmpresasController = async (req, res) => {
  try {
    const empresas = await tourModel.getAllEmpresasModel();
    res.status(200).json(empresas);
  } catch (error) {
    res.json(error);
  }
};

const createEmpresasController = async (req, res) => {
  const newEmpresaData = {
    id: uuidv4(),
    ...req.body,
  };
  try {
    const tour = await tourModel.createEmpresaModel(newEmpresaData);
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  getAllToursController,
  getTourByIDController,
  createTourController,
  updateTourController,
  deleteTourController,
  getAllEmpresasController,
  createEmpresasController,
};
