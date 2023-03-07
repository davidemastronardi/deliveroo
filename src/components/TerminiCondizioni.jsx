import React from "react";
import GoogleStore from "../img/googlestore.png";
import AppStore from "../img/appstore.png";
import LogoFacebook from "../img/facebooklogo.svg";
import LogoTwitter from "../img/twitterlogo.svg";
import LogoInstagram from "../img/instagramlogo.svg";

const TerminiCondizioni = () => {
  return (
    <div>
      <div className="bg-divgrey1 w-full px-[16px] py-[24px] lg:flex lg:justify-center">
        <div className="text-white flex flex-col md:flex-row md:flex-wrap md:justify-between w-full xl:max-w-[1024px]">
          <div className="mb-[16px] bg-divgrey2 p-[24px] md:w-[49%] lg:w-[24%]">
            <h1 className="text-[18px] font-bold pb-[16px]">
              Scopri Deliveroo
            </h1>
            <ul className="text-[14px] flex flex-col gap-2">
              <li>Investitori</li>
              <li>Chi siamo</li>
              <li>Ristoranti</li>
              <li>Altro</li>
              <li>Pressroom</li>
              <li>Programmazione</li>
              <li>Design</li>
              <li>Lavora con noi</li>
              <li>Diventa nostro partner</li>
            </ul>
          </div>
          <div className="mb-[16px] bg-divgrey2 p-[24px] md:w-[49%] lg:w-[24%]">
            <h1 className="text-[18px] font-bold pb-[16px]">Note legali</h1>
            <ul className="flex flex-col gap-2">
              <li>Termini e Condizioni</li>
              <li>Informativa sulla privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="mb-[16px] bg-divgrey2 p-[24px] md:w-[49%] lg:w-[24%]">
            <h1 className="text-[18px] font-bold pb-[16px]">Aiuto</h1>
            <ul className="flex flex-col gap-2">
              <li>Contatti</li>
              <li>FAQ</li>
              <li>Tipi di cucina</li>
            </ul>
          </div>
          <div className="mb-[16px] bg-divgrey2 p-[24px] md:w-[49%] lg:w-[24%]">
            <h1 className="text-[18px] font-bold pb-[16px]">
              Porta Deliveroo con te
            </h1>
            <ul className="flex flex-col gap-2">
              <li>
                <img className="h-[41px]" src={AppStore} alt="app_store" />
              </li>
              <li>
                <img
                  className="h-[40px]"
                  src={GoogleStore}
                  alt="google_store"
                />
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              <img className="w-[20px]" src={LogoFacebook} alt="facebook" />
              <img className="w-[20px]" src={LogoTwitter} alt="twitter" />
              <img className="w-[20px]" src={LogoInstagram} alt="instagram" />
            </div>
            <div>
              <p className="text-divgrey2">© 2023 Deliveroo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminiCondizioni;
