import React, { useMemo } from "react";

const PiattiPreferiti = () => {
  const arrayImg = useMemo(
    () => [
      {
        img: "https://f.roocdn.com/images/menus/64574/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1547634455",
        name: "McDonald's",
      },
      {
        img: "https://f.roocdn.com/images/menus/213898/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1573558821",
        name: "Nima Sushi",
      },
      {
        img: "https://f.roocdn.com/images/menus/71232/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1615219760",
        name: "Pokèria by NIMA",
      },
      {
        img: "https://f.roocdn.com/images/menus/14480/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1537967434",
        name: "Daruma Kosher",
      },
      {
        img: "https://f.roocdn.com/images/menus/67494/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1610355421",
        name: "Temakinho",
      },
      {
        img: "https://f.roocdn.com/images/menus/63776/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1556873766",
        name: "Berberè Pizzeria",
      },
      {
        img: "https://f.roocdn.com/images/menus/225238/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1585830197",
        name: "Old Wild West",
      },
      {
        img: "https://f.roocdn.com/images/menus/188980/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1588261235",
        name: "Roadhouse",
        text: "Ordina il tuo piatto preferito a casa tua da Roadhouse grazie alla consegna a domicilio di Deliveroo."
      },
      {
        img: "https://f.roocdn.com/images/menus/257876/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1586357552",
        name: "KFC",
      },
      {
        img: "https://f.roocdn.com/images/menus/207109/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1602487666",
        name: "La piadineria",
        text: "Ordina la tua piadina preferita a casa tua da La Piadineria grazie alla consegna a domicilio di Deliveroo."
      },
      {
        img: "https://f.roocdn.com/images/menus/41027/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1598626967",
        name: "Burger King",
      },
      {
        img: "https://f.roocdn.com/images/menus/17074/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1505479292",
        name: "Grom",
      },
    ],
    []
  );

  const renderPreferiti = () => {
    return arrayImg.map((card, i) => {
      return (
        <li key={i} className="w-full pb-[30px]  md:w-1/3 md:pl-[16px] md:pb-[30px]">
          <div className=" object-cover">
            <img
              className="w-full h-full object-cover "
              src={card.img}
              alt="mcdonald"
              />
          </div>
          <p className="text-[18px] font-bold">{card.name}</p>
          <p className="text-[14px]">{card.text}</p>
        </li> 
                 
      );
    });
  };

  return (
    <div className="w-full bg-preferiti flex justify-center">
      <div className="xl:max-w-[1246px] pr-[16px] pl-[16px] md:pl-0 ">
        <h1 className="text-[26px] md:text-[32px] font-bold py-[30px] md:pl-[16px]">
          I tuoi piatti preferiti, consegnati da noi.
        </h1>
        <ul className=" flex flex-wrap">
          {renderPreferiti()}
        </ul>
      </div>
    </div>
  );
};

export default PiattiPreferiti;
