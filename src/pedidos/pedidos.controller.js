//Create
export async function createPedido(req, res) {
  return res.json({ messge: 'crear Pedido' });
}

//Read
export async function readPedido(req, res) {
  return res.json({ messge: 'Leer Pedido' });
}

//Update
export async function updatePedido(req, res) {
  return res.json({ messge: 'actualizar Pedido' });
}

//Delete
export async function deletePedido(req, res) {
  return res.json({ messge: 'eliminar Pedido' });
}
