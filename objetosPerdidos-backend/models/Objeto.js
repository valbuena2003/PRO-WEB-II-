const mongoose = require("mongoose");

const ObjetoSchema = new mongoose.Schema(
  {
    // CORRECCIÓN: Se eliminó la tilde para estandarizar el nombre del campo
    descripcion: { 
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    tipoObjeto: {
      type: String,
      required: true, // Ej.: objeto de valor, objeto personal, etc.    
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Objeto", ObjetoSchema);
