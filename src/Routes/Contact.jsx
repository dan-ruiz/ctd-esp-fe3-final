import Form from "../Components/Form";
import { useDoctorStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useDoctorStates();

  return (
    <div className={`contact-container ${state.theme === "dark" ? "dark" : "light"}`}>
      <h2>¿Necesitas saber más?</h2>
      <p>¡Envíanos tus preguntas y te contactaremos!</p>
      <Form />
    </div>
  );
};

export default Contact;
