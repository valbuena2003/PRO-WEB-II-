// src/App.jsx
import { useEffect, useState } from "react";
<<<<<<< HEAD
import "./App.css";
=======
import "./styles/App.css";
>>>>>>> f29d371 (Primer commit)
import FormularioObjetos from "./components/FormularioObjetos";
import ListaObjetos from "./components/ListaObjetos";
import { getObjetos } from "./services/api";

export default function App() {
<<<<<<< HEAD
  const [objetos, setObjetos] = useState([]);

  // Cargar objetos desde el backend
  const loadData = async () => {
    try {
      const res = await getObjetos();
      setObjetos(res.data); // 👈 guardamos la lista en el estado
    } catch (error) {
      console.error("Error cargando objetos", error);
    }
  };

  // Cargar al iniciar la app
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">
        Gestión de Objetos Perdidos <span className="app-title-emoji">💼</span>
      </h1>

      {/* Formulario: al crear, recarga la lista */}
      <FormularioObjetos onCreated={loadData} />

      {/* Lista: recibe los objetos y, al eliminar, recarga */}
      <ListaObjetos data={objetos} onDeleted={loadData} />
    </div>
  );
=======
    const [objetos, setObjetos] = useState([]);
    // NUEVO ESTADO: Guarda el objeto que se está editando
    const [objetoAEditar, setObjetoAEditar] = useState(null); 

    const loadData = async () => {
        try {
            const res = await getObjetos();
            setObjetos(res.data);
        } catch (error) {
            console.error("Error cargando objetos", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="app-container">
            <h1 className="app-title">Gestión de Objetos Perdidos</h1>

            <section aria-labelledby="registro">
                {/* Se pasan el objetoAEditar y la función para cambiarlo */}
                <FormularioObjetos 
                    onCreated={loadData} 
                    objetoAEditar={objetoAEditar}
                    setObjetoAEditar={setObjetoAEditar}
                />
            </section>

            <h2 className="list-title" id="objetos-registrados">
                Objetos Registrados
            </h2>

            <section aria-labelledby="objetos-registrados">
                {/* Se pasa la función para cambiar el objetoAEditar */}
                <ListaObjetos 
                    data={objetos} 
                    onDeleted={loadData} 
                    setObjetoAEditar={setObjetoAEditar}
                />
            </section>
        </div>
    );
>>>>>>> f29d371 (Primer commit)
}
