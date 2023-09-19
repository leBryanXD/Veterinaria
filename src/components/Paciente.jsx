import propTypes from "prop-types";
const Paciente = ({ paciente, setPaciente, EliminarPaciente }) => {
  const { petName, name, email, date, syntoms, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
      EliminarPaciente(id);
    }
  };

  return (
    <>
      <section className="  m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 uppercase text-gray-700 ">
          Nombre: <span className="font-normal normal-case">{petName}</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700 ">
          Propietario: <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700 ">
          Email: <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700 ">
          Fecha Alta: <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700 ">
          Sintomas: <span className="font-normal normal-case">{syntoms}</span>
        </p>
        <div>
          <button
            className="bg-green-700 uppercase font-bold text-white text-center p-2 rounded-md m-2"
            type="button"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            className="bg-red-800 uppercase font-bold text-white text-center p-2 rounded-md"
            type="button"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </section>
    </>
  );
};
Paciente.propTypes = {
  paciente: propTypes.object.isRequired,
  setPaciente: propTypes.func.isRequired,
  EliminarPaciente: propTypes.func.isRequired,
};

export default Paciente;
