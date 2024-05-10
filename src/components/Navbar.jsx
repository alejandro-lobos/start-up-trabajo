import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBusqueda from './NavBusqueda';
import IconButton from './IconButton';
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

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full h-1/6 z-10 flex flex-col justify-between py-5">
        <div className='flex flex-row justify-between text-center mx-64 '> 
            <div className='w-48 h-16 flex text-center justify-center'>
                <Image
                    src="/images/logonav.jpg" // Asegúrate de que la ruta es correcta
                    alt="Davit logo empresarial"
                    width={200} // Establece el ancho del logo
                    height={100} // Establece la altura del logo
                    className="cursor-pointer w-36 "
                />
            </div>
            <div className='w-1/4 h-10 '>
                <NavBusqueda/>
            </div>
            <div className='w-32 h-10 '>
                <button className='w-32 h-full   flex  items-center px-3 border border-gray-300 shadow-md text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verde-dark1'>
                    <MdAccountCircle className='w-full h-full'/>
                    <p className='ml-1 text-lg'>Acceder</p>
                </button>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <IconButton
                    icon={FaHome}
                    label="Hogar"
            />
           <IconButton
                icon={RiHeartAdd2Line}
                label="Salud"
            />
            <IconButton
                icon={SiMdbook}
                label="Clases"
            />
            <IconButton
                    icon={IoHardwareChipOutline}
                    label="Tecnología"
            />
           <IconButton
                icon={TiDropbox}
                label="Otros"
            />
            <IconButton
                icon={IoCarSport}
                label="Vehiculos    "
            />
            <IconButton
                    icon={ImSpoonKnife}
                    label="Cocina"
            />
           <IconButton
                icon={MdOutlinePets}
                label="Mascota"
            />
            <IconButton
                icon={LuDumbbell}
                label="Deportes"
            />
        </div>


      
    </nav>
  );
};

export default Navbar;
