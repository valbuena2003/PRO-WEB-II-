const express = require("express");
const router = express.Router();
const Objeto = require("../models/Objeto");

router.get("/", async (req, res) => {
  try {
    const lista = await Objeto.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo los objetos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const objeto = await Objeto.findById(req.params.id);
    if (!objeto) return res.status(404).json({ error: "Objeto no encontrado" });
    res.json(objeto);
  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevo = new Objeto(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
  } catch (error) {
    res.status(400).json({ error: "Error creando el objeto" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Objeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: "Objeto no encontrado" });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: "Error actualizando el objeto" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const eliminado = await Objeto.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Objeto no encontrado" });
    res.json({ mensaje: "Objeto eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: "Error eliminando el objeto" });
  }
});

module.exports = router;
