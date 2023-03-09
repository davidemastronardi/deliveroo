import React, { useEffect, useState } from "react";
import CardSelection from "../components/CardSelection";
import CardWork from "../components/CardWork";
import CerchiAltro from "../components/CerchiAltro";
import Novità from "../components/Novità";
import PiattiPreferiti from "../components/PiattiPreferiti";
import RicercaIndirizzo from "../components/RicercaIndirizzo";

const Home = () => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      focus && setFocus(false);
      console.log(focus);
    });
  }, [focus]);

  return (
    <div>
      <header>
        <RicercaIndirizzo focus={focus} />
      </header>

      <main>
        <CardSelection setFocus={setFocus} />
        <PiattiPreferiti setFocus={setFocus} />
        <CerchiAltro />
        <Novità />
        <CardWork />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
