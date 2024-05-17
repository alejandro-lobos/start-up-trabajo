import React from 'react';
import Slider from 'react-slick';
import IconButton from './IconButton';
import { FaHome } from "react-icons/fa";
import { RiHeartAdd2Line } from "react-icons/ri";
import { SiMdbook } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { TiDropbox } from "react-icons/ti";
import { IoCarSport } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlinePets } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";

const iconData = [
  { icon: FaHome, label: 'Hogar' },
  { icon: RiHeartAdd2Line, label: 'Salud' },
  { icon: SiMdbook, label: 'Clases' },
  { icon: IoHardwareChipOutline, label: 'Tecnología' },
  { icon: TiDropbox, label: 'Otros' },
  { icon: IoCarSport, label: 'Vehículos' },
  { icon: ImSpoonKnife, label: 'Cocina' },
  { icon: MdOutlinePets, label: 'Mascota' },
  { icon: LuDumbbell, label: 'Deportes' },
];

const IconsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // Mostrar 6 iconos por vez en pantallas grandes
    slidesToScroll: 3,
    responsive: [
      
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,  // Mostrar 2 iconos por vez en pantallas pequeñas
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="py-4 w-[90%] flex flex-col ">
      <div className="w-full slider-container px-4">
        <Slider {...settings}>
          {iconData.map((item, index) => (
            <div key={index} >
              <div className=' flex flex-col justify-center items-center text-center'>
              <a
                href="/proyectos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton icon={item.icon} label={item.label} />
              </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default IconsCarousel;
