import React, { useState } from "react";
import CardSelection from "../components/CardSelection";
import CardWork from "../components/CardWork";
import CerchiAltro from "../components/CerchiAltro";
import Novità from "../components/Novità";
import PiattiPreferiti from "../components/PiattiPreferiti";
import RicercaIndirizzo from "../components/RicercaIndirizzo";

const Home = () => {
  return (
    <div>
      <header>
        <RicercaIndirizzo />
      </header>

      <main>
        <CardSelection />
        <PiattiPreferiti />
        <CerchiAltro />
        <Novità />
        <CardWork />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
