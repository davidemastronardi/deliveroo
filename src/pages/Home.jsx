import React from "react";
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
        <div className="px-[16px] md:px-[24px] py-[40px]">
          
          <CardSelection />
        </div>
        <div className="">
          <PiattiPreferiti/>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
