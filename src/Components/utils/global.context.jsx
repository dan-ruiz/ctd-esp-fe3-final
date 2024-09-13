import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

// Estado inicial con el tema incluido
const initialState = { theme: "light", data: [], favorites: [] };

const ContextGlobal = createContext();


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const URL = "https://jsonplaceholder.typicode.com/users";

  // Función asíncrona para consumir la API
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: "GET_DOCTORS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // Cambiar tema
  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedFavs = JSON.parse(localStorage.getItem("favorites")) || []; // Recuperar favoritos
    dispatch({ type: "TOGGLE_THEME", payload: savedTheme });
    dispatch({ type: "LOAD_FAVS", payload: savedFavs }); // Cargar favoritos
    document.body.className = savedTheme; // Aplicar el tema al body
    fetchData();
  }, []);

  useEffect(() => {
    document.body.className = state.theme; // Cambiar la clase del body cuando el tema cambia
  }, [state.theme]);  
  

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useDoctorStates = () => useContext(ContextGlobal);
