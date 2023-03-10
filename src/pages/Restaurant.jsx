import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardRestaurant from "../components/CardRestaurant";
import NavFilters from "../components/NavFilters";

const Restaurant = () => {
  const ristoranti = [
    {
      name: "ristoirante",
      img: "",
      location: "milano",
      voto: "",
      distanza: "",
      categoria: "giapponese",
    },
    {
      name: "cattanietta",
      img: "",
      location: "milano",
      voto: "",
      distanza: "",
      categoria: "americano",
    },
    {
      name: "terrazza",
      img: "",
      location: "milano",
      voto: "",
      distanza: "",
      categoria: "americano",
    },
    {
      name: "da pino",
      img: "",
      location: "milano",
      voto: "",
      distanza: "",
      categoria: "americano",
    },
    {
      name: "cavour",
      img: "",
      location: "milano",
      voto: "",
      distanza: "",
      categoria: "poke",
    },

    {
      name: "fisting",
      img: "",
      location: "milano",
      voto: "",
      distanza: "",
      categoria: "giapponese",
    },
    {
      name: "ristoirante roma",
      img: "",
      location: "roma",
      voto: "",
      distanza: "",
      categoria: "giapponese",
    },
    {
      name: "cattanietta roma",
      img: "",
      location: "roma",
      voto: "",
      distanza: "",
      categoria: "americano",
    },
    {
      name: "terrazza roma",
      img: "",
      location: "roma",
      voto: "",
      distanza: "",
      categoria: "cinese",
    },
    {
      name: "da pino roma",
      img: "",
      location: "roma",
      voto: "",
      distanza: "",
      categoria: "cinese",
    },
    {
      name: "cavour roma",
      img: "",
      location: "roma",
      voto: "",
      distanza: "",
      categoria: "poke",
    },

    {
      name: "fisting roma",
      img: "",
      location: "roma",
      voto: "",
      distanza: "",
      categoria: "indiano",
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
