import React from "react";

const CardWork = () => {
  return (
    <div className="xl:flex xl:flex-col xl:items-center">
      <div className="py-[50px] px-[16px] ">
        <h1 className="text-[26px] md:text-[32px] font-bold md:mb-[20px]">Lavora co Deliveroo</h1>
        <div className="xl:max-w-[1246px] md:flex md:items-stretch md:gap-4 ">
        {/* card 1 */}
          <div className="w-full md:w-1/3 flex flex-col text-white mt-[35px] md:mt-[16px]">
            <div className="w-full h-[50%]">
              <img
                className="object-cover h-full w-full"
                src="//cwa.roocdn.com/_next/static/riders.90e61988.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:h-full bg-orange-scuro p-[30px]">
              <h1 className="text-[26px] md:text-[32px] font-bold">Rider</h1>
              <p className="mt-[16px]">
                Diventa un rider: flessibilità, ottimi guadagni e un mondo di
                vantaggi per te.
              </p>
              <button className="py-[12px] px-[24px] bg-deliveroo font-bold rounded-[3px] mt-[16px]">
                Unisciti a noi
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full md:w-1/3 flex flex-col text-white mt-[16px]">
            <div className="w-full h-[50%]">
              <img
                className="object-cover h-full w-full"
                src="//cwa.roocdn.com/_next/static/riders.90e61988.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full bg-orange-chiaro p-[30px] ">
              <h1 className="text-[26px] md:text-[32px] font-bold">Ristoranti</h1>
              <p className="mt-[16px]">
                Diventa partner di Deliveroo e raggiungi sempre più clienti. Ci occupiamo noi della consegna, così che la tua unica preoccupazione sia continuare a preparare il miglio cibo.
              </p>
              <button className="py-[12px] px-[24px] bg-deliveroo font-bold rounded-[3px] mt-[16px]">
                Diventa nostro partner
              </button>
            </div>
          </div>

          {/* card 3 */}
          <div className="w-full md:w-1/3 flex flex-col justify-between text-white mt-[16px]">
            <div className="w-full h-[50%]">
              <img
                className="object-cover h-full w-full"
                src="//cwa.roocdn.com/_next/static/riders.90e61988.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full bg-oliva-chiaro p-[30px] ">
              <h1 className="text-[26px] md:text-[32px] font-bold">Rider</h1>
              <p className="mt-[16px]">
                Diventa un rider: flessibilità, ottimi guadagni e un mondo di
                vantaggi per te.
              </p>
              <button className="py-[12px] px-[24px] bg-deliveroo font-bold rounded-[3px] mt-[16px]">
                Scopri di più
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
