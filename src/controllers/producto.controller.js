import {
  crearProducto,
  obtenerProductosPorTenant,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} from '../services/producto.service.js';

export const crearProductoController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const producto = await crearProducto({ ...req.body, tenantId });
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto', detalles: error.message });
  }
};

export const obtenerProductosController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const productos = await obtenerProductosPorTenant(tenantId);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos', detalles: error.message });
  }
};

export const obtenerProductoPorIdController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const { id } = req.params;
    const producto = await obtenerProductoPorId(id, tenantId);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto', detalles: error.message });
  }
};

export const actualizarProductoController = async (req, res) => {
  try {
    const tenantId  = req.headers['x-tenant-id'];
    const { id } = req.params;
    const producto = await actualizarProducto(id, req.body, tenantId);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto', detalles: error.message });
  }
};

export const eliminarProductoController = async (req, res) => {
  try {
    const tenantId = req.headers['x-tenant-id'];
    const { id } = req.params;
    const producto = await eliminarProducto(id, tenantId);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto', detalles: error.message });
  }
};
