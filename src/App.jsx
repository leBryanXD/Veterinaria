import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Listado_Pacientes from "./components/Listado_Pacientes";

Header;
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const getLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacienteLS);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const EliminarPaciente = (id) => {
    const PacientesActualizados = pacientes.filter(
      (pacienteTEmp) => pacienteTEmp.id !== id
    );
    setPacientes(PacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <Listado_Pacientes
          EliminarPaciente={EliminarPaciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
        />
      </div>
    </div>
  );
}

export default App;
