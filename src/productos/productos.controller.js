//Create
export async function createProducto(req, res) {
  return res.json({ messge: 'crear Producto' });
}

//Read
export async function readProducto(req, res) {
  return res.json({ messge: 'Leer Producto' });
}

//Update
export async function updateProducto(req, res) {
  return res.json({ messge: 'actualizar Producto' });
}

//Delete
export async function deleteProducto(req, res) {
  return res.json({ messge: 'eliminar Producto' });
}
