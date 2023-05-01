//Create
export async function createRestaurante(req, res) {
  return res.json({ messge: 'crear Restaurante' });
}

//Read
export async function readRestaurante(req, res) {
  return res.json({ messge: 'Leer Restaurante' });
}

//Update
export async function updateRestaurante(req, res) {
  return res.json({ messge: 'actualizar Restaurante' });
}

//Delete
export async function deleteRestaurante(req, res) {
  return res.json({ messge: 'eliminar Restaurante' });
}
