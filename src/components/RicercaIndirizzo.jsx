import React from "react";
import Panino from "../img/Livello 1.png";

const RicercaIndirizzo = () => {
  function searchIndirizzo() {
    fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/novi%20li.json?proximity=ip&access_token=pk.eyJ1IjoibWFzdHJvbmFyZGk5MiIsImEiOiJjbGVzc2hoOWQxOWhwNDFvMWlyczJvcmw5In0.MB-mYrWQnxsHeyxDWSVi4Q"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="w-full bg-black p-[16px] pb-[104px] lg:py-[150px] imgbg1 imgbg2 lg:flex lg:justify-center ">
        <div className=" lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center lg:w-[1240px]">
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
                className="text-black rounded-[50px] w-full h-[48px] lg:w-[600px] lg:h-[64px] p-5 lg:text-center"
                type="search"
                placeholder="Inserisci il tuo indirizzo completo"
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
            className="border-[1px] w-full p-3 rounded-[3px]"
            type="search"
            placeholder="Inserisci il tuo indirizzo completo"
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
