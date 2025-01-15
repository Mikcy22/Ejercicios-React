import React from "react";
import AccordionGroup from "./components/AccordionGroup";

const App = () => {
  const accordionItems = [
    { title: "Primer Item", content: "Este es el contenido del primer item." },
    { title: "Segundo Item", content: "Este es el contenido del segundo item." },
    { title: "Tercer Item", content: "Este es el contenido del tercer item." },
    { title: "Cuarto Item", content: "Este es el contenido del cuarto item." }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion Group Example</h1>
      <AccordionGroup items={accordionItems} />
    </div>
  );
};

export default App;
