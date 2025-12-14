import axios from "axios";

const API_URL = "http://localhost:3000/api/objetos";

// -----------------------------------------------------
// Obtener todos los objetos
// -----------------------------------------------------
export function getObjetos() {
  return axios.get(API_URL);
}

// -----------------------------------------------------
// Crear un nuevo objeto
// -----------------------------------------------------
export function createObjeto(data) {
  return axios.post(API_URL, data);
}

// -----------------------------------------------------
// Actualizar un objeto por ID
// -----------------------------------------------------
export function updateObjeto(id, data) {
  return axios.put(`${API_URL}/${id}`, data);
}

// -----------------------------------------------------
// Eliminar un objeto por ID
// -----------------------------------------------------
export function deleteObjeto(id) {
  return axios.delete(`${API_URL}/${id}`);
}

// -----------------------------------------------------
// (Opcional) Obtener un objeto específico por ID
// -----------------------------------------------------
export function getObjetoById(id) {
  return axios.get(`${API_URL}/${id}`);
}
