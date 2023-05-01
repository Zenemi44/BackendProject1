import express from 'express';
import routerUsuarios from './usuarios/usuarios.router';
import routerRestaurantes from './restaurantes/restaurantes.router';
import mongoose from 'mongoose';
import routerProductos from './productos/productos.router';
import routerPedidos from './pedidos/pedidos.router';

const app = express();

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running on port 8080');
  }
});

app.use(express.json());
app.use('/usuarios', routerUsuarios);
app.use('/restaurantes', routerRestaurantes);
app.use('/productos', routerProductos);
app.use('/pedidos', routerPedidos);

mongoose
  .connect('mongodb+srv://backend.jxjicy9.mongodb.net/', {
    dbName: 'BackendDB',
    user: 'test',
    pass: 'test',
  })
  .then(() => console.log('base de datos conectada'))
  .catch((error) => console.log(error));
