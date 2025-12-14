// src/components/FormularioObjetos.jsx
<<<<<<< HEAD
import { useState } from "react";
import { createObjeto } from "../services/api";

export default function FormularioObjetos({ onCreated }) {
  const [form, setForm] = useState({
    descripción: "",
=======
import { useState, useEffect } from "react";
import { createObjeto, updateObjeto } from "../services/api";

export default function FormularioObjetos({ onCreated, objetoAEditar, setObjetoAEditar }) {
  // ... (El estado y los efectos son los mismos) ...
  const [form, setForm] = useState({
    descripcion: "",
>>>>>>> f29d371 (Primer commit)
    marca: "",
    color: "",
    fecha: "",
    hora: "",
    tipoObjeto: "",
  });

<<<<<<< HEAD
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createObjeto(form);
      alert("✨ Objeto registrado con éxito ✨");
      setForm({
        descripción: "",
=======
  useEffect(() => {
    if (objetoAEditar) {
      setForm({
        descripcion: objetoAEditar.descripcion || "",
        marca: objetoAEditar.marca || "",
        color: objetoAEditar.color || "",
        fecha: objetoAEditar.fecha || "",
        hora: objetoAEditar.hora || "",
        tipoObjeto: objetoAEditar.tipoObjeto || "",
      });
    } else {
      setForm({
        descripcion: "",
>>>>>>> f29d371 (Primer commit)
        marca: "",
        color: "",
        fecha: "",
        hora: "",
        tipoObjeto: "",
      });
<<<<<<< HEAD
      onCreated();
    } catch (error) {
      alert("⚠ Error al registrar el objeto");
=======
    }
  }, [objetoAEditar]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setObjetoAEditar(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (objetoAEditar) {
        await updateObjeto(objetoAEditar._id, form);
        alert("Objeto actualizado con éxito");
        setObjetoAEditar(null);
      } else {
        await createObjeto(form);
        alert("Objeto registrado con éxito");
      }

      setForm({
        descripcion: "",
        marca: "",
        color: "",
        fecha: "",
        hora: "",
        tipoObjeto: "",
      });

      onCreated();
    } catch (error) {
      alert(`Error al ${objetoAEditar ? 'actualizar' : 'registrar'} el objeto`);
>>>>>>> f29d371 (Primer commit)
      console.error(error);
    }
  };

<<<<<<< HEAD
  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2 className="form-title">Registrar nuevo objeto 🧳</h2>

      <div className="form-grid">
        <input
          className="input-field"
          type="text"
          name="descripción"
          placeholder="Descripción del objeto"
          value={form.descripción}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="text"
          name="marca"
          placeholder="Marca"
          value={form.marca}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="text"
          name="color"
          placeholder="Color"
          value={form.color}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          required
        />

        <select
          className="input-field"
          name="tipoObjeto"
          value={form.tipoObjeto}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione tipo de objeto</option>
          <option value="Objeto personal">Objeto personal</option>
          <option value="Objeto de valor">Objeto de valor</option>
          <option value="Documento">Documento</option>
          <option value="Otro">Otro</option>
        </select>

        <button type="submit" className="btn-primary">
          Guardar objeto 💼
        </button>
      </div>
    </form>
=======
  const formTitle = objetoAEditar ? "Editar objeto" : "Registrar nuevo objeto";

  return (
    <div className="form-card"> {/* Clase para el estilo de tarjeta */}
      <h2 className="form-title">{formTitle}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Todos los inputs van dentro de form-grid */}
          <input
            className="input-field"
            type="text"
            name="descripcion"
            placeholder="Descripción del objeto"
            value={form.descripcion}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            type="text"
            name="marca"
            placeholder="Marca"
            value={form.marca}
            onChange={handleChange}
            required
          />
          {/* ... (El resto de los inputs son iguales) ... */}
          <input
            className="input-field"
            type="text"
            name="color"
            placeholder="Color"
            value={form.color}
            onChange={handleChange}
            required
          />

          <input
            className="input-field"
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />

          <input
            className="input-field"
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            required
          />

          <select
            className="input-field"
            name="tipoObjeto"
            value={form.tipoObjeto}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione tipo de objeto</option>
            <option value="Objeto personal">Objeto personal</option>
            <option value="Objeto de valor">Objeto de valor</option>
            <option value="Documento">Documento</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {objetoAEditar ? "Guardar Cambios" : "Guardar objeto"}
          </button>
          {objetoAEditar && (
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancelar Edición
            </button>
          )}
        </div>
      </form>
    </div>
>>>>>>> f29d371 (Primer commit)
  );
}
