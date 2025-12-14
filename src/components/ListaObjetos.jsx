// src/components/ListaObjetos.jsx
import { deleteObjeto } from "../services/api";

<<<<<<< HEAD
export default function ListaObjetos({ data = [], onDeleted }) {
  return (
    <div className="children-list">
      <h2 className="list-title">Objetos registrados 💼</h2>

      {data.length === 0 && <p className="no-data">No hay objetos registrados.</p>}

      {data.map((objeto) => (
        <div key={objeto._id} className="child-item">
          <div className="child-info">
            <p><strong>Descripción:</strong> {objeto.descripción}</p>
            <p><strong>Marca:</strong> {objeto.marca}</p>
            <p><strong>Color:</strong> {objeto.color}</p>
            <p><strong>Fecha:</strong> {objeto.fecha} — <strong>Hora:</strong> {objeto.hora}</p>
            <p><strong>Tipo:</strong> {objeto.tipoObjeto}</p>
          </div>

          <button
            className="btn-delete"
            onClick={async () => {
              if (window.confirm("¿Seguro que deseas eliminar este objeto?")) {
                await deleteObjeto(objeto._id);
                if (onDeleted) onDeleted();
              }
            }}
          >
            🗑️ Eliminar
          </button>
        </div>
      ))}
=======
export default function ListaObjetos({ data, onDeleted, setObjetoAEditar }) {
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este objeto?")) {
      try {
        await deleteObjeto(id);
        alert("Objeto eliminado con éxito");
        onDeleted(); // Refresca la lista
      } catch (error) {
        alert("Error al eliminar el objeto");
        console.error(error);
      }
    }
  };

  return (
    <div className="list-container"> {/* Clase para centrar la lista */}
      {data.length === 0 ? (
        <p>No hay objetos registrados.</p>
      ) : (
        <ul className="object-list">
          {data.map((objeto) => (
            <li key={objeto._id} className="object-item">
              <div className="object-details">
                <p><strong>Descripción:</strong> {objeto.descripcion}</p>
                <p><strong>Marca:</strong> {objeto.marca}</p>
                <p><strong>Color:</strong> {objeto.color}</p>
                <p><strong>Fecha:</strong> {objeto.fecha} - {objeto.hora}</p>
                <p><strong>Tipo:</strong> {objeto.tipoObjeto}</p>
              </div>
              <div className="object-actions">
                <button 
                  className="btn-edit" 
                  onClick={() => setObjetoAEditar(objeto)}
                >
                  Editar
                </button>
                <button 
                  className="btn-delete" 
                  onClick={() => handleDelete(objeto._id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
>>>>>>> f29d371 (Primer commit)
    </div>
  );
}
