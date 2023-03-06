import React, { useEffect, useState } from "react";

const RicercaIndirizzo = () => {
  const [value, setValue] = useState("");
  const [openForm, setOpenForm] = useState(false);

 

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
            <div className="hidden md:block py-[16px] text-black">
              <input onChange={(e)=>setValue(e.target.value)}
                className="text-black rounded-[50px] w-full h-[48px] lg:w-[600px] lg:h-[64px] p-5 lg:text-center"
                type="search"
                placeholder="Inserisci il tuo indirizzo completo"
              />
              <form action="#">
              <select  
                  className="md:w-full mt-[5px] p-[16px]"
                  name="languages"
                  id="lang"
                  multiple
                  size="5"
                >
                  <option className=" hover:bg-hover-blue font-semibold" value="Milano">Milano (MI)</option>
                  <option className="mt-[5px] hover:bg-hover-blue font-semibold" value="Torino">
                    Torino (TO)
                  </option>
                  <option className="mt-[5px] hover:bg-hover-blue font-semibold" value="Genova">
                    Genova (GE)
                  </option>
                  <option className="mt-[5px] hover:bg-hover-blue font-semibold" value="Roma">
                    Roma (RO)
                  </option>
                </select>
                <input type="submit" value="Submit" />
              </form>
              <p className="py-[16px] text-white">
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
