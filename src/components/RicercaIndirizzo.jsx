import React from "react";
import Panino from "../img/Livello 1.png";

const RicercaIndirizzo = () => {
  return (
    <div>
      <div className="w-full bg-black p-[16px] pb-[104px] lg:py-[150px] imgbg1 imgbg2 ">
        <div className="lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center lg:w-[1240px]">
          <div className="text-white pb-[16px] md:w-[420px] md:pt-[64px] lg:w-[1024px]">
            <h1 className="text-[28px] md:text-[40px] font-bold">
              I piatti dei ristoranti che ami e la spesa, a domicilio
            </h1>
          </div>
          <div className="hidden md:block text-white md:w-[50%]">
            <p>
              Inserisci un indirizzo per scoprire le opzioni disponibili nella
              tua zona
            </p>
            <div className="hidden md:block py-[16px]">
              <input
                className="text-black rounded-[50px] w-full h-[48px] lg:w-[600px] lg:h-[64px]"
                type="search"
              />
              <p className="py-[16px]">
                <span className="text-deliveroo">Accedi </span>per visualizzare
                i tuoi indirizzi recenti.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3px] px-[16px] py-[24px] md:hidden">
          <p className="pb-[8px]">
            Inserisci un indirizzo per scoprire le opzioni disponibili nella tua
            zona
          </p>
          <input
            className="border-[1px] w-full p-[10px] rounded-[3px]"
            type="search"
          />
          <button className="mt-[10px] h-[48px] bg-deliveroo w-full text-white font-bold rounded-[3px] md:hidden">
            Cerca
          </button>
          <div className="text-[13px] mt-[15px] md:text-white">
            <p>
              <span className="text-deliveroo">Accedi </span>per visualizzare i
              tuoi indirizzi recenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RicercaIndirizzo;
