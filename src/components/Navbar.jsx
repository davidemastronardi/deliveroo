import React, { useState } from "react";
import "animate.css";
import Logo from "../img/logo.png";
import Menu from "../img/menu.svg";
import Exit from "../img/exit.svg";
import FoodGrey from "../img/foodgrey.svg";
import Shop from "../img/shop.svg";
import Faq from "../img/faq.svg";
import RightArrow from "../img/rightarrow.svg";
import ArrowUp from "../img/arrowup.svg";
import ArrowBelow from "../img/arrowbelow.svg";
import ShopDeliveroo from "../img/shopdeliveroo.svg";
import WorkDeliveroo from "../img/workdeliveroo.svg";
import FoodDeliveroo from "../img/fooddeliveroo.svg";
import HomeDeliveroo from "../img/homedeliveroo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(true);
  const [openCollConNoi, setOpenColConNoi] = useState(true);

  return (
    <div className="xl:flex xl:justify-center">
      <div className="xl:max-w-[1246px] flex justify-between items-center h-[70px] w-full px-[15px] gap-2 border-b-[1px]">
        <Link to="/">
          <img className="w-[120px] h-[32px] " src={Logo} alt="logo" />
        </Link>
        <div className="flex gap-[10px]">
          <button
            onClick={() => setOpenColConNoi(!openCollConNoi)}
            className="hidden border-[1px] bg-white h-[40px] rounded-[3px] md:flex md:flex-col items-center justify-center px-[15px] py-[px] gap-2 "
          >
            <div className="flex items-center ">
              {openCollConNoi ? (
                <img className="w-[30px]" src={ArrowBelow} alt="arrow_below" />
              ) : (
                <img className="w-[30px]" src={ArrowUp} alt="arrow_below" />
              )}
              <p>Collabora con noi</p>
            </div>
            {!openCollConNoi && (
              <div className="p-[10px] bg-white  rounded-[3px] absolute top-[60px]">
                <div className="px-[12px] py-[10px] flex flex-col gap-3 text-[15px]">
                  <div className="flex gap-4">
                    <img className="w-[15px]" src={FoodDeliveroo} alt="Food" />
                    <p>Ristoranti</p>
                  </div>
                  <div className="flex gap-4">
                    <img className="w-[15px]" src={WorkDeliveroo} alt="work" />
                    <p>Lavora con noi</p>
                  </div>
                  <div className="flex gap-4">
                    <img className="w-[15px]" src={ShopDeliveroo} alt="shop" />
                    <p>Deliveroo for Work</p>
                  </div>
                </div>
              </div>
            )}
          </button>
          <Link to="/login">
            <button className="hidden border-[1px] bg-white h-[40px] rounded-[3px] md:flex items-center px-[15px] gap-2">
              <img className="w-[18px]" src={HomeDeliveroo} alt="home" />
              <p>Registrati o accedi</p>
            </button>
          </Link>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="bg-white h-[40px] border-[1px] rounded-[3px] flex items-center px-[15px] py-[px] gap-2"
          >
            <img className="w-[18px]" src={Menu} alt="hamburgher_menu" />
            <p>Menu</p>
          </button>
        </div>
      </div>
      {!openNav && (
        <div className="w-full h-full overlay fixed">
          <div className=" w-full h-screen bg-grigio fixed top-0 md:w-[375px] md:right-0 md:border-l-[1px] ">
            <div className="flex justify-between items-center h-[70px] w-full px-[15px] border-b-[1px] bg-white">
              <img className="w-[120px] h-[32px] " src={Logo} alt="logo" />
              <img
                onClick={() => setOpenNav(!openNav)}
                className="w-[18px]"
                src={Exit}
                alt="exit"
              />
            </div>
            <div className="p-[16px] pt-[30px] flex justify-center border-b-[1px] pb-[40px]">
              <button className="w-full h-[48px] bg-deliveroo hover:bg-overlay_delivero rounded-[3px] text-white font-semibold">
                Registrati o accedi
              </button>
            </div>
            <div className="bg-white p-[4px] border-b-[1px] hover:text-deliveroo md:hidden">
              <div className="px-[12px] py-[8px] flex items-center">
                <span className="pr-[16px]">
                  <img className="w-[30px]" src={FoodGrey} alt="FoodGrey" />
                </span>
                <span className="w-full">
                  <p>Aggiungi il tuo ristorante</p>
                </span>
                <img className="w-[25px]" src={RightArrow} alt="RightArrow" />
              </div>
            </div>
            <div className="bg-white p-[4px] border-b-[1px] hover:text-deliveroo md:hidden">
              <div className="px-[12px] py-[8px] flex items-center">
                <span className="pr-[16px]">
                  <img className="w-[30px]" src={Shop} alt="shop" />
                </span>
                <span className="w-full">
                  <p>Crea un account aziendale</p>
                </span>
                <img className="w-[25px]" src={RightArrow} alt="RightArrow" />
              </div>
            </div>
            <div className="bg-white p-[4px] border-b-[1px] hover:text-deliveroo">
              <div className="px-[12px] py-[8px] flex items-center">
                <span className="pr-[16px]">
                  <img className="w-[35px]" src={Faq} alt="faq" />
                </span>
                <span className="w-full">
                  <p>FAQ</p>
                </span>
                <img className="w-[25px]" src={RightArrow} alt="RightArrow" />
              </div>
            </div>
            <div className="w-full absolute bottom-0 py-[16px]">
              <div className="p-[16px]">
                <div>
                  <select
                    className="w-full px-[16px] py-[8px] border-[1px] rounded-[3px] text-black"
                    name="Linguage"
                    id=""
                  >
                    <option value="Italiano">Italiano</option>
                    <option value="Inglese">Inglese</option>
                  </select>
                </div>
              </div>
              <div className="px-[16px]">
                <div>
                  <select
                    className="w-full px-[16px] py-[8px] border-[1px] rounded-[3px] text-black"
                    name="Linguage"
                    id=""
                  >
                    <option value="Italia">Italia</option>
                    <option value="Inglese">Autralia</option>
                    <option value="Inglese">Belgio</option>
                    <option value="Inglese">Emirati rabi Uniti</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
