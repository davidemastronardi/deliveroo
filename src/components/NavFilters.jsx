import React, { useState } from "react";
import Rider from "../img/rider.png";
import Arrowbelow from "../img/arrowbelow.svg";
import Filter from "../img/filter.svg";
import Exit from "../img/exit.svg";
import Arrowpd from "../img/arrowpd.svg";
import ArrowRight from "../img/rightarrow.svg";
import Carota from "../img/carota.svg";
import Cartellino from "../img/cartellino.svg";

const categoryList = [
  { name: "Americano", disponibili: "?" },
  { name: "Cinese", disponibili: "?" },
  { name: "Giapponese", disponibili: "?" },
  { name: "Hamburger", disponibili: "?" },
  { name: "Indiano", disponibili: "?" },
  { name: "Italiano", disponibili: "?" },
  { name: "Poke", disponibili: "?" },
  { name: "Sushi", disponibili: "?" },
];

const NavFilters = ({ setFiltri, restaurantFiltratiPerCitta, filtri, location }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const renderCategory = () => {
    return categoryList.map((dati, i) => {
      return (
        <li
          key={i}
          className="w-full border-b-[1px] md:border-none flex items-center justify-between"
        >
          <div className="flex py-[12px] px-[16px]">
            <p>
              {dati.name}
              <span className="text-slate-400 ml-[10px]">
                {
                  restaurantFiltratiPerCitta.filter((restaurant) =>
                    restaurant.categoria.includes(dati.name.toLocaleLowerCase())
                  ).length
                }
              </span>
            </p>
          </div>
          <div className="px-[16px] flex">
            <input
              checked={!!filtri[dati?.name?.toLocaleLowerCase()]}
              name={dati.name}
              onChange={(e) =>
                setFiltri((state) => {
                  return {
                    ...state,
                    [e.target.name.toLocaleLowerCase()]: e.target.checked,
                  };
                })
              }
              className="w-[18px] h-[18px]"
              type="checkbox"
            />
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="w-full bg-white py-[12px] px-[16px] flex flex-col ">
        <div className="flex">
          <div className=" pr-[8px]">
            <img className="w-[36px]" src={Rider} alt="rider" />
          </div>
          <div>
            <p className="text-[14px] md:hidden">Consegna - Adesso</p>
            <p className="text-[14px] md:block">Adesso</p>
            <div className="flex ">
              <p className="text-[16px] font-bold ">{location.state}</p>
              <img className="w-[25px]" src={Arrowbelow} alt="arrowbelow" />
            </div>
          </div>
        </div>
        <div className="mt-[16px] flex gap-3 justify-between md:hidden">
          <input
            className="h-[46px] px-[16px]  bg-slate-100 w-full border-[1px] border-slate-200 rounded-[3px]"
            type="search"
            placeholder="Ristoranti,spesa,piatti"
          />
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="w-[55px] h-[46px] flex justify-center items-center border-[1px] border-slate-200 rounded-[3px]"
          >
            <img className="w-[25px]" src={Filter} alt="filter" />
          </button>
        </div>
        {/* menu filtri md */}
        <div className="hidden md:w-full   md:flex md:flex-col md:justify-between md:mt-[10px] md:border-t-[1px]">
          <div className=" w-full">
            <div></div>
            <div className="p-[16px]">
              <h1 className="text-[18px] font-bold">Categorie</h1>
            </div>
            <ul className="md:w-full md:border-t-[1px] md:bg-white md:flex md:flex-col">{renderCategory()}</ul>
          </div>
          <div className="w-full bg-slate-100"></div>
        </div>
        {/* menu filter -open- */}
        {openFilter && (
          <div className="fixed z-10 top-0 left-0 w-full h-screen bg-slate-100 flex flex-col justify-between  ">
            <div className="flex p-[16px] border-b-[1px] bg-white">
              <div className="w-full text-center">
                <h1 className="font-bold text-[16px]">Filtra</h1>
              </div>
              <div className="absolute right-0">
                <img
                  onClick={() => setOpenFilter(!openFilter)}
                  className="w-[20px] mr-[16px]"
                  src={Exit}
                  alt=""
                />
              </div>
            </div>

            <div className=" w-full overflow-y-auto">
              <div className="bg-white">
                <ul className="border-t-[1px] mt-[12px]">
                  <li className="w-full border-b-[1px] flex items-center justify-between">
                    <div className="flex py-[12px] px-[16px]">
                      <img
                        className="w-[25px] mr-[10px]"
                        src={Arrowpd}
                        alt="arrowpd"
                      />
                      <p>Ordina</p>
                    </div>
                    <div className="px-[16px] flex">
                      <p>???</p>
                      <img
                        className="w-[25px] ml-[10px]"
                        src={ArrowRight}
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="w-full border-b-[1px] flex items-center justify-between">
                    <div className="flex py-[12px] px-[16px]">
                      <img
                        className="w-[30px] mr-[7px]"
                        src={Cartellino}
                        alt="arrowpd"
                      />
                      <p>Offerte</p>
                    </div>
                    <div className="px-[16px] flex">
                      <img className="w-[25px]" src={ArrowRight} alt="" />
                    </div>
                  </li>
                  <li className="w-full border-b-[1px] flex items-center justify-between">
                    <div className="flex py-[12px] px-[16px]">
                      <img
                        className="w-[25px] mr-[10px]"
                        src={Carota}
                        alt="arrowpd"
                      />
                      <p>Regimi alimentari</p>
                    </div>
                    <div className="px-[16px] flex">
                      <img
                        className="w-[25px] ml-[10px]"
                        src={ArrowRight}
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-[16px]">
                <h1 className="text-[18px] font-bold">Categorie</h1>
              </div>
              <ul className="border-t-[1px] bg-white">{renderCategory()}</ul>
            </div>
            <div className="w-full bg-slate-100">
              <div className="w-full p-[16px]">
                <button
                  onClick={() => setOpenFilter(!openFilter)}
                  className="w-full text-center text-[16px] text-white font-bold bg-deliveroo rounded-[3px] px-[24px] py-[12px]"
                >
                  <p>Fatto</p>
                </button>
                <button
                  onClick={() => setOpenFilter(!openFilter)}
                  className="mt-[10px] w-full text-center text-[16px] text-deliveroo border-[1px] border-slate-300 rounded-[3px] px-[24px] py-[12px]"
                >
                  <p>Elimina tutti</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavFilters;
