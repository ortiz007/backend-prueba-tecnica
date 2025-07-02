import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productoRouter from './routes/producto.routes.js';
import pedidoRouter from './routes/pedido.routes.js';



dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('API funciona correctamente');
});

//Rutas
app.use('/api/productos',productoRouter);
app.use('/api/pedidos',pedidoRouter);

//correr servidor 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
