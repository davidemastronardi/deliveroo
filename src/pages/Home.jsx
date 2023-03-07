import React, { useState } from "react";
import CardSelection from "../components/CardSelection";
import PiattiPreferiti from "../components/PiattiPreferiti";
import RicercaIndirizzo from "../components/RicercaIndirizzo";

const Home = () => {


  return (
    <div>
      <header>
        <RicercaIndirizzo />
      </header>

      <main>
        <div className="">
          <CardSelection />
        </div>
        <div className="">
          <PiattiPreferiti />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
