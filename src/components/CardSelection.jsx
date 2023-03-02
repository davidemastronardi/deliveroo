import React, { useState } from "react";

const CardSelection = () => {

const [cardSelected, setCardSelected] = useState({img:"",descrizione:"",link:""})

  return (
    <div className="pt-[35px]">
      <div className="w-full h-[150px] bg-black"></div>
      <div className="text-[14px] mt-[10px] flex flex-col gap-1">
        <p>I grandi classici che scalano il cuore, perfetti in ogni momento.</p>
        <p className="text-deliveroo">Scopri Confort food</p>
      </div>
    </div>
  );
};

export default CardSelection;
