//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDoctorStates } from "../Components/utils/global.context";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  // Usamos el contexto global para obtener la data
  const { state } = useDoctorStates()
  const params = useParams();
  const [dentist, setDentist] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Extraemos los datos del usuario específico
  // Función asíncrona para consumir la API por ID
  const fetchDataID = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      console.log("Respuesta" + response);

      // Si la respuesta no es exitosa, lanza un error
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      // Actualiza el estado con los datos obtenidos
      setDentist(data);
      setLoading(false);
    } catch (error) {
      // Maneja errores
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataID();
  }, [params.id]);

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Detalles del Dentista</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error al cargar los detalles del dentista</p>
      ) : dentist ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No se encontraron detalles del dentista.</p>
      )}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
