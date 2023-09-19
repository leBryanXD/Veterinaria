import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

function Form({ pacientes, setPacientes, paciente, setPaciente }) {
  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const [petName, setPetName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [syntoms, setSyntoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setPetName(paciente.petName);
      setName(paciente.name);
      setEmail(paciente.email);
      setDate(paciente.date);
      setSyntoms(paciente.syntoms);
    }
  }, [paciente]);

  function validacionForm(e) {
    e.preventDefault();
    if ([petName, name, email, date, syntoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    //llenando el objeto de pacientes
    const OBJpaciente = {
      petName,
      name,
      email,
      date,
      syntoms,
    };
    if (paciente.id) {
      OBJpaciente.id = paciente.id;
      const pacienteUpdate = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? OBJpaciente : pacienteState
      );
      setPacientes(pacienteUpdate);
      setPaciente({});
    } else {
      OBJpaciente.id = generarID();
      setPacientes([...pacientes, OBJpaciente]);
    }

    //reiniciando campos de el formulario
    setName("");
    setPetName("");
    setDate("");
    setEmail("");
    setSyntoms("");
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={validacionForm}
        className="bg-white shadow-md p-8 rounded-lg py-10 px-5 mb-5 ml-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="pet_name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota:
          </label>
          <input
            type="text"
            placeholder="nombre de mascota"
            id="pet_name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner_name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del dueño:
          </label>
          <input
            type="text"
            placeholder="nombre del dueño"
            id="owner_name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner_email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email del dueño:
          </label>
          <input
            type="email"
            placeholder="Email del dueño"
            id="owner_email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta:
          </label>
          <input
            type="date"
            placeholder="Email del dueño"
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="shadow-md border-2 w-full rounded-md placeholder-gray-400"
            placeholder="Describe los sintomas"
            value={syntoms}
            onChange={(e) => setSyntoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        ></input>
      </form>
    </div>
  );
}
Form.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPacientes: PropTypes.func.isRequired,
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
};

export default Form;
