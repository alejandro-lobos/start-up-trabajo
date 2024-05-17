import IconsCarousel from "@/components/IconsCarousel";
import Navbar from "@/components/Navbar";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head"; // Para definir elementos en el <head> de tu documento HTML


export default function Home() {
  const size = useWindowSize();
  return (
    <div>
        <Head>
            <title>PegApp</title>
            <link rel="icon" sizes="16x16" href="/images/pegaic.jpg" type="image/png" />
            <link rel="icon" sizes="32x32" href="/images/pegaic.jpg" type="image/png" />
            <link rel="icon" sizes="96x96" href="/images/pegaic.jpg" type="image/png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/pegaic.jpg" />
        </Head>
        <Navbar size={size}/>
      <main className="w-full h-screen pt-56 md:pt-64 ">
      {size.width >= 768 ? (

        <></>
      ):(
        <div className=" w-full flex flex-row justify-center items-center text-center">
          <IconsCarousel/>
        </div>
      )}
     {/* <IconsCarousel/> */}

      </main>
    </div>
  );
} 