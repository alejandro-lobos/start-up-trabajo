import Navbar from "@/components/Navbar";
import Head from "next/head"; // Para definir elementos en el <head> de tu documento HTML


export default function Home() {
  return (
    <div>
        <Head>
            <title>PegApp</title>
            <link rel="icon" sizes="16x16" href="/images/pegaic.jpg" type="image/png" />
            <link rel="icon" sizes="32x32" href="/images/pegaic.jpg" type="image/png" />
            <link rel="icon" sizes="96x96" href="/images/pegaic.jpg" type="image/png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/pegaic.jpg" />
        </Head>
        <Navbar />
      <main >
      </main>
    </div>
  );
} 