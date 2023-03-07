import React from "react";
import appStore from "../img/appstore.png";
import googlePlay from "../img/googlestore.png";
import deliverooLogo2 from "../img/deliveroologo2.png";

const Novità = () => {
  return (
    <div className="xl:flex py-[50px] xl:justify-center px-[16px] bg-slate-100">
      <div className="w-full xl:max-w-[1246px]">
        <h1 className="text-[26px] md:text-[32px] font-bold">
          Novità della nostra cucina
        </h1>
        <div className="mt-[30px] bg-white flex ">
          <div className="w-[50%] max-h-[242px] bg-sushi relative">
            <div className="triangolo-verticale-t absolute top-[1px] right-0"></div>
          </div>

          <div className="w-[50%] flex flex-col items-start p-[10px] md:p-[40px]">
            <h1 className="text-[19px] font-bold ">Deliveroo for Work</h1>
            <p className="text-[15px] md:pt-[20px]">
              Clienti o colleghi affamati? il nostro team Corporate ti può
              aiutare.
            </p>
            <button className="mt-[5px] max-w-full py-[12px] px-[24px] font-bold bg-deliveroo rounded-[3px] text-white md:mt-[20px]">
              Contattaci
            </button>
          </div>
        </div>

        <div className="">
          <div className="mt-[16px] h-full bg-white flex flex-row-reverse">
            <div className="w-[50%] max-h-[242px] relative bg-pattern flex justify-center items-center">
              <img
                className="w-[50px] md:w-[80px] lg:w-[100px] "
                src={deliverooLogo2}
                alt=""
              />
              <div className="triangolo-verticale-b absolute top-[-1px] left-0"></div>
            </div>
            <div className="w-[50%] flex flex-col items-start p-[10px] md:p-[40px]">
              <h1 className="text-[19px] md:text-[24px] font-bold ">
                Hai già la nostra app?
              </h1>
              <p className="hidden md:block text-[16px]">
                Scarica ora - disponibile su App store e Google Play!
              </p>
              <div className="md:flex md:gap-1 mt-[10px]">
                <img className="md:h-[40px]" src={appStore} alt="" />
                <img className="md:h-[40px]" src={googlePlay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novità;
