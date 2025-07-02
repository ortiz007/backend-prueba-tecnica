import {
  crearPedido,
  obtenerPedidos,
  obtenerPedidoPorId,
  actualizarPedido,
  eliminarPedido
} from '../services/pedido.service.js';

export const crearPedidoController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const data = { ...req.body, tenantId };
    const pedido = await crearPedido(data);
    res.status(201).json(pedido);
  } catch (error) {
    console.error('error en crear pedidocontroller',error);
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
};

export const obtenerPedidosController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const pedidos = await obtenerPedidos(tenantId);
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
};

export const obtenerPedidoPorIdController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const { id } = req.params;
    const pedido = await obtenerPedidoPorId(id, tenantId);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pedido' });
  }
};

export const actualizarPedidoController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const { id } = req.params;
    const pedidoActualizado = await actualizarPedido(id, req.body, tenantId);
    if (!pedidoActualizado) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar pedido' });
  }
};

export const eliminarPedidoController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const { id } = req.params;
    const pedidoEliminado = await eliminarPedido(id, tenantId);
    if (!pedidoEliminado) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json({ mensaje: 'Pedido eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar pedido' });
  }
};
