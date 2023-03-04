import React, { useMemo } from "react";

const PiattiPreferiti = () => {
  const arrayImg = useMemo(
    () => [
      {
        img: "https://f.roocdn.com/images/menus/64574/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1547634455",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/213898/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1573558821",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/71232/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1615219760",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/14480/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1537967434",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/67494/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1610355421",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/63776/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1556873766",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/225238/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1585830197",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/188980/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1588261235",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/257876/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1586357552",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/207109/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1602487666",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/41027/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1598626967",
        name: "test",
      },
      {
        img: "https://f.roocdn.com/images/menus/17074/header-image.jpg?width=576&height=288&auto=webp&format=jpg&fit=crop&v=1505479292",
        name: "test",
      },
    ],
    []
  );

  const renderPreferiti = () => {
    return arrayImg.map((card,i) => {
      console.log(card,i);
      return ( 
        <li className="" key={i}>
          <img className="w-full h-[144px]" src={card.img}  alt="mcdonald" />
          <p>{card.name}</p>
        </li>
      );
    });
  };



  return (
    <div>
      <div className="w-full bg-preferiti p-[16px]">
        <h1 className="text-[26px] font-bold py-[30px]">
          Ituoi piatti preferiti, consegnati da noi.
        </h1>
        <ul className="flex flex-col text-[18px] font-bold">
          {renderPreferiti()}
        </ul>
      </div>
    </div>
  );
};

export default PiattiPreferiti;
