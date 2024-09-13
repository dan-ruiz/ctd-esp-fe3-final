import { useState } from "react";

const Form = () => {
  const [customer, setCustomer] = useState({ name: "", email: "", pregunta: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [submittedCustomer, setSubmittedCustomer] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  };

  // Validación del formulario
  const validateForm = () => {
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return customer.name.trim().length > 5 && emailRegex.test(customer.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShow(true);
      setError(false);
      setSubmittedCustomer(customer);
      setCustomer({ name: "", email: "", pregunta: "" }); // Reset form
    } else {
      setError(true);
      setShow(false);
    }
  };


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            name="name" // Usar el nombre del campo para manejar dinámicamente
            value={customer.name}
            onChange={handleChange}
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />
          <label>Tu pregunta: </label>
          <input
            type="text"
            name="pregunta"
            value={customer.pregunta}
            onChange={handleChange}
          />

          <button>Enviar</button>
        </form>
      </div>

      {show && submittedCustomer && (
        <h4>
          Gracias {submittedCustomer.name}, te contactaremos cuando antes vía mail
        </h4>
      )}

      {error && (
        <h4>
          Por favor chequea que la información sea correcta.
        </h4>
      )}
      
    </>
  );
};

export default Form;
