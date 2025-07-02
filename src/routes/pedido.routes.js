import express from 'express';
import {
  crearPedidoController,
  obtenerPedidosController,
  obtenerPedidoPorIdController,
  actualizarPedidoController,
  eliminarPedidoController
} from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/', crearPedidoController);
router.get('/', obtenerPedidosController);
router.get('/:id', obtenerPedidoPorIdController);
router.put('/:id', actualizarPedidoController);
router.delete('/:id', eliminarPedidoController);

export default router;
