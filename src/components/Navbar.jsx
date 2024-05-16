import React from 'react';
import Image from 'next/image';
import { MdAccountCircle } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiHeartAdd2Line } from "react-icons/ri";
import { SiMdbook } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { TiDropbox } from "react-icons/ti";
import { IoCarSport } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlinePets } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";
import IconButton from './IconButton';
import IconsCarousel from './IconsCarousel';
import NavBusqueda from './NavBusqueda'; // Asumimos que este es un componente de búsqueda personalizado
import useWindowSize from '@/hooks/useWindowSize';

const Navbar = () => {
    const size = useWindowSize();
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-10 flex flex-col justify-between py-5">
      {/* Primera fila */}
      <div className="flex flex-col  justify-between items-center mx-4 my-5  xl:mx-32   md:flex-row">
        <div className="w-full md:w-48 flex justify-center mb-4 md:mb-0">
          <Image
            src="/images/logonav.jpg"
            alt="Davit logo empresarial"
            width={200}
            height={100}
            className="cursor-pointer w-36"
          />
        </div>
        <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
          <NavBusqueda />
        </div>
        <div className="w-full md:w-32 flex justify-center">
          <button className="w-32 h-full flex items-center px-3 border border-gray-300 shadow-md text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-verde-dark1 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verde-dark1">
            <MdAccountCircle className="w-full h-full" />
            <p className="ml-1 text-lg">Acceder</p>
          </button>
        </div>
      </div>

      {/* Segunda fila */}
      {size.width > 768 ? (
      <div className="flex flex-wrap justify-center mx-4 md:mx-0">
        {[
          { icon: FaHome, label: 'Hogar' },
          { icon: RiHeartAdd2Line, label: 'Salud' },
          { icon: SiMdbook, label: 'Clases' },
          { icon: IoHardwareChipOutline, label: 'Tecnología' },
          { icon: TiDropbox, label: 'Otros' },
          { icon: IoCarSport, label: 'Vehículos' },
          { icon: ImSpoonKnife, label: 'Cocina' },
          { icon: MdOutlinePets, label: 'Mascota' },
          { icon: LuDumbbell, label: 'Deportes' },
        ].map((item, index) => (
            <IconButton key={index}  icon={item.icon} label={item.label} sty="bg-black"/>
        ))}
      </div>
  ) : (
    <IconsCarousel />
    
    )}
      {/* Carrusel de iconos */}
    </nav>
  );
};

export default Navbar;
