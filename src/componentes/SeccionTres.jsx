
import React, { useEffect } from "react";


const SeccionTres = () => {const logScrollPercentage = () => {
    // Obtener la altura total de la página
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY;

    // Calcular el porcentaje de avance
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    return scrollPercentage.toFixed(2);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Obtener el porcentaje de avance
      const percentage = logScrollPercentage();

      // Imprimir el porcentaje en la consola
      console.log(`Scroll Percentage: ${percentage}%`);

      const img1 = document.querySelector('.imagen_1');
      const img2 = document.querySelector('.imagen_2');
      const img3 = document.querySelector('.imagen_3');
      const img4 = document.querySelector('.imagen_4');
      const img5 = document.querySelector('.imagen_5');
      const img6 = document.querySelector('.imagen_6');
      const img7 = document.querySelector('.imagen_7');
      const img8 = document.querySelector('.imagen_8');
      // const img9 = document.querySelector('.imagen_9');

      console.log(scroll);

      
      if (parseFloat(percentage) >= 52.03) {
        img1.classList.add('opacity');
      } else {
        img1.classList.remove('opacity');
      }
if((parseFloat(percentage)) >= 57.58){
    img2.classList.add('opacity')
}else{
    img2.classList.remove('opacity')
    
}
if((parseFloat(percentage)) >= 62.58){
    img3.classList.add('opacity')
}else{
    img3.classList.remove('opacity')
}
if((parseFloat(percentage)) >= 67.58){
    img4.classList.add('opacity')
}else{
    img4.classList.remove('opacity')
}
if((parseFloat(percentage)) >= 72.58){
    img5.classList.add('opacity')
}else{
    img5.classList.remove('opacity')
}
if((parseFloat(percentage)) >= 77.58){
    img6.classList.add('opacity')
}else{
    img6.classList.remove('opacity')
}
if((parseFloat(percentage)) >= 82.58){
  img7.classList.add('opacity')
}else{
  img7.classList.remove('opacity')
}
if((parseFloat(percentage)) >= 87.58){
  img8.classList.add('opacity')
}else{
  img8.classList.remove('opacity')
}

};

window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);

  return (
    <div className='largo'>
      <div className="cajaimagenes">
      <img className='imagen_1' src="./src/assets/imagenes/mano1.png" alt="" />
      <img className='imagen_2' src="./src/assets/imagenes/mano2.png" alt="" />
      <img className='imagen_3' src="./src/assets/imagenes/mano3.png" alt="" />
      <img className='imagen_4' src="./src/assets/imagenes/mano4.png" alt="" />
      <img className='imagen_5' src="./src/assets/imagenes/mano5.png" alt="" />
      <img className='imagen_6' src="./src/assets/imagenes/mano6.png" alt="" />
      <img className='imagen_7' src="./src/assets/imagenes/mano7.png" alt="" />
      <img className='imagen_8' src="./src/assets/imagenes/mano8.png" alt="" />
      <img className='imagen_9' src="./src/assets/imagenes/mano9.png" alt="" />
      </div>
    </div>
  )
}

export default SeccionTres