import { useEffect } from "react";
import Paciente from "./Paciente.jsx";
import propTypes from "prop-types";
function Listado_Pacientes({ pacientes, setPaciente, EliminarPaciente }) {
  useEffect(() => {
    if (pacientes.length > 0) console.log("Nuevo Paciente registrado");
  }, [pacientes]);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length != 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {" "}
            Listado Pacientes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>

          {pacientes.map((pacienteTemp) => (
            <Paciente
              setPaciente={setPaciente}
              key={pacienteTemp.id}
              paciente={pacienteTemp}
              EliminarPaciente={EliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> No hay pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Agrega tus Pacientes y citas {""}
            <span className="text-indigo-600 font-bold ">
              en el formulario de la izquierda
            </span>
          </p>
        </>
      )}
    </div>
  );
}

Listado_Pacientes.propTypes = {
  pacientes: propTypes.array.isRequired,
  setPaciente: propTypes.func.isRequired,
  EliminarPaciente: propTypes.func.isRequired,
};

export default Listado_Pacientes;
