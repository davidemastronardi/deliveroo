import React, { useState } from "react";

const CardSelection = () => {
  return (
    <div className="w-full lg:flex lg:flex-col lg:items-center">
      <div className="lg:w-[1240px]">
        <h1 className="text-[25px] md:text-[32px] lg:text-[40px] font-bold mb-[35px] md:mb-0">La selezione di Deliveroo</h1>
        <div className="md:flex md:flex-wrap md:justify-between md:items-baseline">
          <div className="md:w-[49%] lg:w-[39%]">
            <div className="w-full h-[150px] bg-confortfood text-white font-bold flex justify-center items-center text-[30px]">
              <h1>Confort food</h1>
            </div>
            <div className="text-[14px] mt-[10px] flex flex-col gap-1">
              <p>
                I grandi classici che scalano il cuore, perfetti in ogni
                momento.
              </p>
              <p className="text-deliveroo">Scopri Confort food</p>
            </div>
          </div>
          <div className="md:w-[49%] lg:w-[59%] pt-[40px]">
            
            <div className="w-full h-[150px] bg-lamponi text-white font-bold flex justify-center items-center text-[30px]">
              <h1>Dolci e dessert</h1>
            </div>
            <div className="text-[14px] mt-[10px] flex flex-col gap-1">
              <p>Dolci piaceri per rendere la giornata ancora più gustosa.</p>
              <p className="text-deliveroo">Scopri Dolci e dessert</p>
            </div>
          </div>
          <div className="md:w-[49%] lg:w-[59%] pt-[40px]">
            <div className="w-full h-[150px] bg-condividere text-white font-bold flex justify-center items-center text-[30px] text-center">
              <h1>Perfetti da condividere</h1>
            </div>
            <div className="text-[14px] mt-[10px] flex flex-col gap-1">
              <p>
                Serve una scusa per stare insieme? Ordina dai ristoranti che
                trasformeranno la tua serata in una vera festa.
              </p>
              <p className="text-deliveroo">Scopri Perfetti da condividere</p>
            </div>
          </div>
          <div className="md:w-[49%] lg:w-[39%] pt-[40px]">
            <div className="w-full h-[150px] bg-esclusiva text-white font-bold flex justify-center items-center text-[30px] text-center">
              <h1>Esclusiva Deliveroo</h1>
            </div>
            <div className="text-[14px] mt-[10px] flex flex-col gap-1">
              <p>
                I più famosi, i più buoni, i preferiti. Quelli che solo su
                Deliveroo.
              </p>
              <p className="text-deliveroo">Scopri Esclusiva Deliveroo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSelection;
