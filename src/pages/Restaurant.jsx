import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardRestaurant from "../components/CardRestaurant";
import NavFilters from "../components/NavFilters";

const Restaurant = () => {
  const ristoranti = [
    {
      id: 1,
      name: "All'Antico Vinaio",
      img: "//rs-menus-api.roocdn.com/images/8e9d3ca5-1a3e-41e7-a187-53356ade8c5f/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.4 Molto buono",
      recensioni: "(500+)",
      distanza: "0.4 km",
      categoria: ["italiano"],
      time: "15 - 30",
      consegna: "Consegna gratuita",
    },
    {
      id: 2,
      name: "Aldente Pastabar Cordusio",
      img: "//rs-menus-api.roocdn.com/images/e1d466c4-07a4-45e4-82b9-46cae6ab91f5/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.2 Buono",
      recensioni: "(500+)",
      distanza: "0.4 km",
      categoria: ["italiano"],
      time: "10 - 20",
      consegna: "Consegna gratuita",
    },
    {
      id: 3,
      name: "Erbert",
      img: "//rs-menus-api.roocdn.com/images/dc1914fd-dc28-4398-b8d9-969f7a9b9eeb/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.5 Eccellente",
      recensioni: "(206)",
      distanza: "0.3 km",
      categoria: ["italiano"],
      time: "10 - 20",
      consegna: "Consegna gratuita",
    },
    {
      id: 4,
      name: "Bun Burger",
      img: "//rs-menus-api.roocdn.com/images/1570b2e5-40d4-40d7-a8a1-f841424615ce/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.5 Eccellente",
      recensioni: "(500+)",
      distanza: "0.6 km",
      categoria: ["hamburger", "americano"],
      time: "10 - 20",
      consegna: "Consegna gratuita",
    },
    {
      id: 5,
      name: "Burgez",
      img: "//rs-menus-api.roocdn.com/images/ca07d749-7a5f-461a-bbb8-c470ea2f142a/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.4 Molto buono",
      recensioni: "(500+)",
      distanza: "0.9 km",
      categoria: ["hamburger"],
      time: "15 - 30",
      consegna: "Consegna gratuita",
    },
    {
      id: 6,
      name: "KFC",
      img: "//rs-menus-api.roocdn.com/images/e6f720fc-757f-42b1-a342-53bb8d5fec80/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.2 Buono",
      recensioni: "(500+)",
      distanza: "2.6 km",
      categoria: ["hamburger", "americano"],
      time: "25 - 45",
      consegna: "Consegna gratuita",
    },
    {
      id: 7,
      name: "Burger King",
      img: "//rs-menus-api.roocdn.com/images/66c21403-1f46-4bc6-b315-b9d3c07c9d55/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.2 Buono",
      recensioni: "(500+)",
      distanza: "0.1 km",
      categoria: ["hamburger", "americano"],
      time: "15 - 25",
      consegna: "Consegna gratuita",
    },
    {
      id: 8,
      name: "Wagamama",
      img: "//rs-menus-api.roocdn.com/images/af954a90-5a4c-4c77-bb3a-2716caaac6f8/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.2 Buono",
      recensioni: "(500+)",
      distanza: "0.5 km",
      categoria: ["cinese", "giapponese", "sushi"],
      time: "25 - 45",
      consegna: "Consegna gratuita",
    },
    {
      id: 9,
      name: "Shalimar Take Away",
      img: "//rs-menus-api.roocdn.com/images/1e20b866-a85d-4b3a-a99c-491e7181774b/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.3 Molto buono",
      recensioni: "(208)",
      distanza: "0.7 km",
      categoria: ["indiano"],
      time: "25 - 45",
      consegna: "Consegna gratuita",
    },
    {
      id: 10,
      name: "Shalimar Take Away",
      img: "//rs-menus-api.roocdn.com/images/3185d0a5-396c-417e-ba12-dd004ab0b514/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.5 Molto buono",
      recensioni: "(500+)",
      distanza: "0.5 km",
      categoria: ["poke"],
      time: "10 - 20",
      consegna: "Consegna gratuita",
    },
    {
      id: 11,
      name: "That's Vapore",
      img: "//rs-menus-api.roocdn.com/images/52b286b0-a1f0-4829-a1cf-cd826720a636/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.4 Molto buono",
      recensioni: "(500+)",
      distanza: "0.4 km",
      categoria: ["poke"],
      time: "10 - 20",
      consegna: "Consegna gratuita",
    },
  ];

  const location = useLocation();

  const [filtri, setFiltri] = useState({});

  const restaurantFiltratiPerCitta = ristoranti.filter(
    (value) => value.location.toUpperCase() === location.state.toUpperCase()
  );

  const [restaurantFiltrati, setRestaurantFiltrati] = useState(
    restaurantFiltratiPerCitta
  );

  useEffect(() => {
    getRestaurantFiltrati();
  }, [filtri]);

  const getRestaurantFiltrati = () => {
    let newRistorantiFiltrati = [];
    let flag = false;

    for (let filtro in filtri) {
      if (filtri[filtro]) {
        flag = true;
      }
    }

    for (let filtro in filtri) {
      restaurantFiltratiPerCitta.forEach((ristorante) => {
        if (
          ristorante.categoria.includes(filtro.toLocaleLowerCase()) &&
          filtri[filtro]
        ) {
          newRistorantiFiltrati.push(ristorante);
        }
      });
    }

    if (flag) {
      setRestaurantFiltrati(RemoveDuplicates(newRistorantiFiltrati, "id"));
    } else {
      setRestaurantFiltrati(restaurantFiltratiPerCitta);
    }
  };

  const renderRestaurant = () => {
    return restaurantFiltrati.map((dati, i) => {
      return <CardRestaurant key={i} dati={dati} />;
    });
  };

  const RemoveDuplicates = (array, key) => {
    return array.reduce((arr, item) => {
      const removed = arr.filter((i) => i[key] !== item[key]);
      return [...removed, item];
    }, []);
  };

  return (
    <div className="md:px-[16px] lg:px-[24px] xl:px-[50px]">
      <div className="md:w-full md:flex ">
        <div className="md:w-[300px] md:h-screen md:sticky  md:top-0">
          <NavFilters
            location={location}
            restaurantFiltratiPerCitta={restaurantFiltratiPerCitta}
            setFiltri={setFiltri}
            filtri={filtri}
          />
        </div>
        <div className="hidden md:w-full md:flex h-full md:flex-col">
          <div className="md:py-[24px]">
            <h1 className="text-[22px] font-semibold">
              Ristoranti che consegnano a {location.state}
            </h1>
          </div>
          <div className="md:w-full md:flex md:flex-wrap">
            {renderRestaurant()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
