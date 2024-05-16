import React from 'react';

const IconButton = ({ icon: Icon, label,sty }) => {
  return (
    <button className={`w-32 flex flex-col items-center mx-4 px-3 py-2 text-sm leading-4 font-medium rounded-md text-gray-700 bg-transparent 
                        md:border-0 md:flex-row` + `${sty}`} >
      <div className="flex items-center justify-center w-16 h-16 hover:bg-verde-dark1  bg-white rounded-full border md:border-0 md:shadow-none border-gray-300 shadow-md mb-2 ">
        {Icon && <Icon className="text-2xl text-gray-700" />}
      </div>
      <span className="text-center">{label}</span>
    </button>
  );
};

export default IconButton;
