import React from "react";
import { useLocation } from "react-router-dom";
import ResturantMilano from "../components/ResturantMilano";

const Restaurant = () => {
  const location = useLocation();

  return (
    <div>
      <ResturantMilano />
    </div>
  );
};

export default Restaurant;
