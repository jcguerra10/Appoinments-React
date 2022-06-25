const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {id} = paciente
  const {nombre} = paciente
  const {propietario} = paciente
  const {email} = paciente
  const {alta} = paciente
  const {sintomas} = paciente

  const handleEliminar = () => {
    const respuesta =  confirm("Deseas Eliminar?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
          <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between">
          <button className="py-2 px-10 bg-indigo-600  hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={() => setPaciente(paciente)}>
            Editar
          </button>
          <button className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg" onClick={handleEliminar}>
            Eliminar
          </button>
        </div>

      </div>
  )
}

export default Paciente