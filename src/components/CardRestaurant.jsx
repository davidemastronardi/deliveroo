import React from "react";

const CardRestaurant = ({ dati }) => {
  return (
    <div className="px-[16px] flex flex-col gap-5 my-[16px]">
      <div className="w-full border-[2px] border-slate-300 rounded-[5px]">
        <div className="relative">
          <img className="object-cover w-full h-full" src={dati.img} />
          <p className="absolute top-0 p-[3px] bg-red-700 text-white text-[14px] font-semibold m-[10px]">
            {dati.consegna}
          </p>
        </div>
        <div className="p-[12px]">
          <h1 className="text-[16px] font-bold">{dati.name}</h1>
          <div className="text-overlay_delivero">
            ★{" "}
            <span className="text-[14px] font-normal">
              {dati.voto}
              <span className="text-black"> {dati.recensioni}</span>
            </span>
          </div>
          <p>
            Distanza: {dati.distanza} - {dati.consegna}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
