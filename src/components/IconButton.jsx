import React from 'react';
import Image from 'next/image';

const IconButton = ({ icon: Icon, label }) => {
  return (
    <button className="w-32 y-2  flex  items-center mx-4 px-3 py-2 border border-gray-300 shadow-md text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verde-dark1">
       {Icon && (
        <Icon className="mr-2 text-lg" /> // el tamaño del icono es gestionado por clases de Tailwind CSS
      )}
      {label}
    </button>
  );
};

export default IconButton;
