import { Link } from "react-router-dom";
import { useDoctorStates } from "./utils/global.context";

const Card = ({ dentista }) => {
  const { dispatch, state } = useDoctorStates();
  const isAlreadyFav = state.favorites.some((fav) => fav.id === dentista.id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: isAlreadyFav ? "REMOVE_FAV": "ADD_FAV", payload: dentista})
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="../../public/images/doctor.jpg" alt="dentist-logo" />
      <Link to={"/" + dentista.id}>
        <h2>{dentista.name}</h2>
      </Link>
      <h3>{dentista.username}</h3>

      <button onClick={addFav}>{isAlreadyFav ? "❌" : "⭐"}</button>
    </div>
  );
};

export default Card;
