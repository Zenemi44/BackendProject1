import { Router } from 'express';
import {
  createRestaurante,
  deleteRestaurante,
  readRestaurante,
  updateRestaurante,
} from './restaurantes.controller';

const routerRestaurantes = Router();

//Create
routerRestaurantes.post('/', createRestaurante);
//Read
routerRestaurantes.get('/', readRestaurante);
//Update
routerRestaurantes.patch('/', updateRestaurante);
//Delete
routerRestaurantes.delete('/', deleteRestaurante);

export default routerRestaurantes;
