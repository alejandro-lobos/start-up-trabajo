import React from 'react';

const IconButton = ({ icon: Icon, label,sty }) => {
  return (
    <button className=" w-16 flex flex-col items-center  py-2 text-sm leading-4 font-medium  text-gray-700 rounded-full 
                        md:flex-row md:border-2 md:w-[15%] md:h-10 md:hover:bg-verde-dark1 md:hover:text-white md:mb-2 md:rounded-none md:mx-2 
                        lg:w-[9%]
                        xl:w-[10%]                                                                                  ">
      <div className="flex items-center justify-center p-1 w-8 h-auto  bg-transparent rounded-full border border-verde-dark2 shadow-md
                      md:border-0 md:shadow-none md:flex-col md:bg-transparent md:w-[30%]  md:h-8 md:p-0 
                      lg:h-10  lg:w-[30%]
                      xl:px-2 xl:w-[25%]">
        {Icon && <Icon className="text-xl 
                                  md:text-lg      " />}
      </div>
      <div className= 'w-full text-center md:text-center md:w-[50%] lg:text-start overflow-hidden'>
        <span className=" 
                          md:text-xs md:w-2      ">
          {label}
        </span>
      </div>
    
    </button>
  );
};

export default IconButton;
