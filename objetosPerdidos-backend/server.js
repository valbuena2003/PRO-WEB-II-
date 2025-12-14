const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// -----------------------------------------------------
// Middlewares
// -----------------------------------------------------
app.use(express.json());
app.use(cors());

// -----------------------------------------------------
// Conexión a MongoDB
// -----------------------------------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error en conexión Mongo:", err));

// -----------------------------------------------------
// Rutas
// -----------------------------------------------------
const objetosRoutes = require("./routes/objetos");
app.use("/api/objetos", objetosRoutes);

// -----------------------------------------------------
// Servidor
// -----------------------------------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
});
