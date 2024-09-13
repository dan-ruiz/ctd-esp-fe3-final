
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom"
import { useDoctorStates } from "./utils/global.context"

const Navbar = () => {

  const { state, toggleTheme } = useDoctorStates();

  return (
    <nav className={state.theme === "dark" ? "dark" : "light"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contacto">Contactanos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar