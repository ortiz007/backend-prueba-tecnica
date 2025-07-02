import express from 'express';
import {
  crearProductoController,
  obtenerProductosController,
  obtenerProductoPorIdController,
  actualizarProductoController,
  eliminarProductoController
} from '../controllers/producto.controller.js';

const router = express.Router();

// Todas estas rutas esperan que venga tenantId en los headers

router.post('/', crearProductoController);
router.get('/', obtenerProductosController);
router.get('/:id', obtenerProductoPorIdController);
router.put('/:id', actualizarProductoController);
router.delete('/:id', eliminarProductoController);

export default router;
