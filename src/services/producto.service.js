import Producto from '../models/producto.model.js';

export const crearProducto = async (data) => {
  const nuevoProducto = new Producto(data);
  return await nuevoProducto.save();
};

export const obtenerProductosPorTenant = async (tenantId) => {
  return await Producto.find({ tenantId });
};

export const obtenerProductoPorId = async (id, tenantId) => {
  return await Producto.findOne({ _id: id, tenantId });
};

export const actualizarProducto = async (id, data, tenantId) => {
  return await Producto.findOneAndUpdate(
    { _id: id, tenantId },
    data,
    { new: true }
  );
};

export const eliminarProducto = async (id, tenantId) => {
  return await Producto.findOneAndDelete({ _id: id, tenantId });
};
