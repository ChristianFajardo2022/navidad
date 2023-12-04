import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const SeccionDos = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  const opts = {
    height: '600px',
    width: '1000px',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
    setPlaying(true);
  };

  const handleClose = (e) => {
    // Verificar si el clic fue fuera del video
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setPlaying(false);
    }
  };

  useEffect(() => {
    // Agregar un event listener para cerrar el video cuando se hace clic fuera de él
    document.addEventListener('mousedown', handleClose);
    
    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, []);

  return (
    <div
      className='full_width comercial '
      style={{
        display: 'flex',
      }}
    >
      {playing && (
        <div ref={videoRef} className=' absolute'>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      )}  
        <img
          className='mt-[18%] h-[100px]'
          src="./src/assets/imagenes/iconovideo.png"
          alt="Imagen"
          style={{ cursor: 'pointer' }}
          onClick={handleClick}
        />
      <div className='w-full h-[50px] gradienteTransparente empujar'></div>
      <div className='flex-col justify-center text-center text-[#e2d599] bg-black empujar'>
        <p className='text-[#e2d599] tracking-[7px]'>
          SUMERGETE EN LA CONMOVEDORA HISTORIA DE DAVID
          <br />
          DONDE UN SIMPLE ACTO DE ENTREGA SE TRANSFORMA EN UN MILAGRO NAVIDEÑO.
        </p>
        <h2 className='font-extrabold font-[tusker] text-3xl my-6'>
          LA CARTA QUE CAMBIO NUESTRA FORMA DE VER LA NAVIDAD
        </h2>
        <p className='text-[#e2d599] tracking-[7px]'>
          UN NIÑO. UN DESEO DE ENTREGAR. UN MUNDO TRANSFORMADO. LA CARTA DE DAVID
          NOS ENSEÑA EL VERDADERO SIGNIFICADO DE LA NAVIDAD{' '}
        </p>
      </div>
    </div>
  );
};

export default SeccionDos;
