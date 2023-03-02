import React from "react";
import CardSelection from "../components/CardSelection";
import RicercaIndirizzo from "../components/RicercaIndirizzo";

const Home = () => {
  return (
    <div>
      <header>
        <RicercaIndirizzo />
      </header>

      <main className="px-[16px] py-[40px]">
        <div>
          <h1 className="text-[25px] font-bold">La selezione di Deliveroo</h1>
          <CardSelection />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
