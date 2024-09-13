import Card from "../Components/Card";
import { useDoctorStates } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useDoctorStates();
  const { theme, favorites } = state;

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favorites.length === 0 ? (
          <p>No hay favoritos guardados</p>
        ) : (
          favorites.map(dentista => <Card key={dentista.id} dentista={dentista} />)
        )}
      </div>
    </div>
  );
};

export default Favs;
