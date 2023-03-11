import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardRestaurant from "../components/CardRestaurant";
import NavFilters from "../components/NavFilters";

const Restaurant = () => {
  const ristoranti = [
    {
      name: "All'Antico Vinaio",
      img: "//rs-menus-api.roocdn.com/images/8e9d3ca5-1a3e-41e7-a187-53356ade8c5f/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.4 Molto buono",
      recensioni: "(500+)",
      distanza: "0.4 km",
      categoria: "italiano",
      time: "15 - 30",
      consegna: "Consegna gratuita"
    },
    {
      name: "Bun Burger",
      img: "//rs-menus-api.roocdn.com/images/1570b2e5-40d4-40d7-a8a1-f841424615ce/image.jpeg?width=640&height=360&auto=webp&format=jpg&fit=crop",
      location: "milano",
      voto: "4.5 Molto buono",
      recensioni: "(500+)",
      distanza: "0.6 km",
      categoria: "hamburger",
      time: "10 - 20",
      consegna: "Consegna gratuita"
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
          ristorante.categoria.toLocaleLowerCase() ==
            filtro.toLocaleLowerCase() &&
          filtri[filtro]
        ) {
          newRistorantiFiltrati.push(ristorante);
        }
      });
    }

    if (flag) {
      setRestaurantFiltrati(newRistorantiFiltrati);
    } else {
      setRestaurantFiltrati(restaurantFiltratiPerCitta);
    }
  };

  const renderRestaurant = () => {
    return restaurantFiltrati.map((dati, i) => {
      return <CardRestaurant key={i} dati={dati} />;
    });
  };

  return (
    <div>
      <div>
        <NavFilters
          restaurantFiltratiPerCitta={restaurantFiltratiPerCitta}
          setFiltri={setFiltri}
          filtri={filtri}
        />
        {renderRestaurant()}
      </div>
    </div>
  );
};

export default Restaurant;
