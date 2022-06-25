import Paciente from './Paciente'
import { useEffect } from 'react';

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {

  //when it have a change on paciente
  useEffect(() => {
    console.log("Se agregó un paciente");
  },[pacientes]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega Pacientes {""}
            <span className="text-indigo-600 font-bold">Ahora!!!</span>
          </p>
        </>
      )}
    </div>

  )
}

export default ListadoPacientes