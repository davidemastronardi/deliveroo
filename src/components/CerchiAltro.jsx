import React from "react";

const CerchiAltro = () => {
  return (
    <div className="xl:flex xl:justify-center">
      <div className="w-full xl:max-w-[1024px] py-[50px] px-[16px]">
        <h1 className="text-[26px] font-bold">Cerchi qualcos'altro?</h1>
        <ul className="text-[22px] font-bold flex flex-wrap gap-4 mt-[16px]">
            <li className="bg-slate-100 p-1 rounded-[5px]">Halal</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Colazione</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Vegetariano</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Messicano</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Dessert</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Indiano</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Greco</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Giapponese</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Cinese</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Libanese</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Americano</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Italiano</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Thailandese</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Suschi</li>
            <li className="bg-slate-100 p-1 rounded-[5px]">Pizza</li>
        </ul>
      </div>
    </div>
  );
};

export default CerchiAltro;
