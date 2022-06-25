import { useState, useEffect} from "react"
import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const[pacientes, setPacientes] = useState([]);
  const[paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  //LocalStorage
  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLocalStorage);
    }
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes",JSON.stringify( pacientes ));
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App