import { Router } from 'express';
import { createPedido, deletePedido, readPedido, updatePedido } from './pedidos.controller';

const routerPedidos = Router();

//Create
routerPedidos.post('/', createPedido);
//Read
routerPedidos.get('/', readPedido);
//Update
routerPedidos.patch('/', updatePedido);
//Delete
routerPedidos.delete('/', deletePedido);

export default routerPedidos;
