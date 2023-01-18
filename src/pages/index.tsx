import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import button360 from "../assets/360.png";
import close from "../assets/close.png";
import sofagif from "../assets/sofa.gif";
import sofa from "../assets/sofa.png";

export default function Home() {
  const [is360active, setIs360Active] = useState(false);
  return (
    <>
      <Head>
        <title>Bora Codar #2</title>
        <meta name="description" content="Desafio do #BoraCodar nº 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex align-center justify-center bg-background">
        <div className="container grid grid-cols-2 gap-5 self-center">
          <div className="flex align-center justify-end relative">
            <button
              className="absolute top-0 right-2 flex align-center justify-center "
              onClick={() => setIs360Active(!is360active)}
            >
              <Image src={is360active ? close : button360} alt="" />
            </button>
            {is360active ? (
              <Image
                src={sofagif}
                alt="Sofá Margot II - Rosé"
                className="w-[28rem] self-center"
              />
            ) : (
              <Image
                src={sofa}
                alt="Sofá Margot II - Rosé"
                className="w-[28rem] self-center"
              />
            )}
          </div>
          <div className="flex flex-col gap-3 aling-center justify-start">
            <span className="font-Lato text-[10px] text-purple]">
              CÓDIGO: 42404
            </span>
            <h1 className="text-[32px] font-CrimsonPro text-purple">
              Sofá Margot II - Rosé
            </h1>
            <h2 className="font-Lato text-purple">R$ 4.000</h2>

            <button className="mt-2 w-fit border border-purple px-4 py-2 rounded-full text-purple hover:text-purpleLight">
              ADICIONAR À CESTA
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
