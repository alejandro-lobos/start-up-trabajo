'use client';

export default function NavBusqueda({ placeholder }) {


  return (
    <div className="flex flex-row rounded-lg  bg-black ">
      <input
        type= 'text'
        className="border shadow-xl border-gray-300 border-r-0  rounded-l-lg w-3/4 y-full py-2 pl-3 pr-16  focus:outline-none focus:border-verde-dark1"
      />
      <button
        className=" px-1 y-1 w-1/4  text-white bg-verde-dark1  rounded-r-lg focus:outline-none"
      >
       Buscar

      </button>
    </div>
  );
}
