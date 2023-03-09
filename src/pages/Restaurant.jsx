import React from "react";
import { useLocation } from "react-router-dom";
import NavFilters from "../components/NavFilters";
import ResturantMilano from "../components/ResturantMilano";

const Restaurant = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <NavFilters/>
      </div>
    </div>
  );
};

export default Restaurant;
