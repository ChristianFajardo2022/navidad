import React from 'react';
import Degradado from './Degradado';

const SeccionCuatro = () => {

  const handleDownload = () => {
    // Puedes cambiar 'ruta/al/archivo.pdf' con la ruta correcta de tu archivo PDF.
    const pdfFilePath = 'ruta/al/archivo.pdf';

    // Crea un elemento 'a' (enlace) y configúralo para descargar el archivo.
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'nombre_del_archivo.pdf';

    // Simula el clic en el enlace para iniciar la descarga.
    document.body.appendChild(link);
    link.click();

    // Limpia el enlace después de la descarga.
    document.body.removeChild(link);
  };

  return (
    <div className=" bnovena">
      <div className='flex flex-col h-full justify-between text-center'>
        <p className=' pt-10'>EXTIENDE LA MAGIA DE ENTREGAR: DESCARGA NUESTRA NOVENA ESPECIAL Y UN CUENTO NAVIDEÑO PARA COMPARTIR EL ESPÍRITU DE ENTREGA EN FAMILIA</p>
        <div className=' flex flex-col'>
        <Degradado contenido={
          <>
          <p className=' my-4'>PREPARA TU HOGAR PARA UNA NAVIDAD INOLVIDABLE</p>
        {/* Agrega el evento onClick para manejar la descarga */}
        <button onClick={handleDownload} className='custonBtn tracking-[15px] text-sm'>DESCARGA AQUÍ</button>
        </>
        }/>
        </div>
      
      </div>
      
    </div>
  );
};


export default SeccionCuatro;
