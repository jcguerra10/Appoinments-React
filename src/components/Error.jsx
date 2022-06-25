

const Error = ({children}) => {
  // whit children you can pass a lot of HTML
  return (
    <div className='bg-red-700 p-3 uppercase font-bold mb-3 rounded-md'><p className='text-center text-white'>{children}</p></div>
  )
}

export default Error