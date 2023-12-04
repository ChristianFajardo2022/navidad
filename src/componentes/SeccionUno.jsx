import React, { useState, useRef, useEffect } from 'react';

const SeccionDos = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const popupRef = useRef(null);

  const images = [
    './src/assets/imagenes/mano1.png',
    'url_de_imagen_2.jpg',
    'url_de_imagen_3.jpg',
    'url_de_imagen_4.jpg',
    'url_de_imagen_5.jpg',
    // Agrega más URLs de imágenes según sea necesario
  ];

  const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt aliquam egestas. Integer vitae auctor felis, quis convallis ex. Donec aliquet neque sed dui sollicitudin, sit amet elementum nisi bibendum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt aliquam egestas. Integer vitae auctor felis, quis convallis ex. Donec aliquet neque sed dui sollicitudin, sit amet elementum nisi bibendum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt aliquam egestas. Integer vitae auctor felis, quis convallis ex. Donec aliquet neque sed dui sollicitudin, sit amet elementum nisi bibendum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt aliquam egestas. Integer vitae auctor felis, quis convallis ex. Donec aliquet neque sed dui sollicitudin, sit amet elementum nisi bibendum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt aliquam egestas. Integer vitae auctor felis, quis convallis ex. Donec aliquet neque sed dui sollicitudin, sit amet elementum nisi bibendum.',
    // Agrega más textos según sea necesario
  ];

  const handleDotClick = (index) => {
    setSelectedImage(images[index]);
    setSelectedText(texts[index]);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="full-screen-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="dot"
          onClick={() => handleDotClick(index)}
        />
      ))}
      {showPopup && (
        <div className="popup-container" onClick={closePopup}>
          <div className="popup" ref={popupRef}>
            {/* <button className="close-button" onClick={closePopup}>
              Cerrar
            </button> */}
            <img
              className="popup-image"
              src={selectedImage}
              alt="Popup"
            />
            <p>{selectedText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeccionDos;
