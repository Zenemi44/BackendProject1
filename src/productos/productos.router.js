import { Router } from 'express';
import {
  createProducto,
  deleteProducto,
  readProducto,
  updateProducto,
} from './productos.controller';

const routerProductos = Router();

//Create
routerProductos.post('/', createProducto);
//Read
routerProductos.get('/', readProducto);
//Update
routerProductos.patch('/', updateProducto);
//Delete
routerProductos.delete('/', deleteProducto);

export default routerProductos;
