import React, { useState } from "react";
import CardSelection from "../components/CardSelection";
import CerchiAltro from "../components/CerchiAltro";
import PiattiPreferiti from "../components/PiattiPreferiti";
import RicercaIndirizzo from "../components/RicercaIndirizzo";

const Home = () => {
  return (
    <div>
      <header>
        <RicercaIndirizzo />
      </header>

      <main>
        <div>
          <CardSelection />
        </div>
        <div>
          <PiattiPreferiti />
        </div>
        <div>
          <CerchiAltro/>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
