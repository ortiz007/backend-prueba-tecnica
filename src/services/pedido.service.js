import Pedido from '../models/pedido.model.js';

export const crearPedido = async (data) => {
  const nuevoPedido = new Pedido(data);
  return await nuevoPedido.save();
};

export const obtenerPedidos = async (tenantId) => {
  return await Pedido.find({ tenantId }).populate('productos.productoId');
};

export const obtenerPedidoPorId = async (id, tenantId) => {
  return await Pedido.findOne({ _id: id, tenantId }).populate('productos.productoId');
};

export const actualizarPedido = async (id, data, tenantId) => {
  return await Pedido.findOneAndUpdate(
    { _id: id, tenantId },
    data,
    { new: true }
  );
};

export const eliminarPedido = async (id, tenantId) => {
  return await Pedido.findOneAndDelete({ _id: id, tenantId });
};
