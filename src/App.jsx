import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useDoctorStates } from "./Components/utils/global.context";

function App() {
  const { state } = useDoctorStates();

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
