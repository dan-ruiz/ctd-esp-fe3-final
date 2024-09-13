import Card from "../Components/Card";
import { useDoctorStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDoctorStates();

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentistas</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}

        {state.data.map((den) => (
          <Card key={den.id} dentista={den} />
        ))}
      </div>
    </main>
  );
};

export default Home;
