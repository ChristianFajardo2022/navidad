import React from 'react'

const Degradado = ({contenido}) => {
  return (
    <>
    <div className='w-full h-[50px] gradienteTransparente empujar'></div>
    <div className='flex-col justify-center text-center text-[#e2d599] bg-black empujar'>{contenido}</div>
    </>
    
  )
}

export default Degradado