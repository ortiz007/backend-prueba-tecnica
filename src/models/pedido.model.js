import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  horaInicio: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: String,
    enum: ['en curso', 'cerrado'],
    default: 'en curso',
  },
  cliente: {
    type: String,
    required: true,
  },
  productos: [
    {
      productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
      },
      cantidad: {
        type: Number,
        default: 1,
      },
    }
  ],
  total: {
    type: Number,
    required: true,
  },
  tenantId: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;
