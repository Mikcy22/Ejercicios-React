import React from "react";
import AccordionItem from "./components/AccordionItem";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion Example</h1>
      <AccordionItem title="Primer Item">
        <p>Este es el contenido detallado del primer item. Aquí se puede añadir cualquier texto o información relevante.</p>
      </AccordionItem>
      <AccordionItem title="Segundo Item">
        <p>Este es el contenido detallado del segundo item. Aquí se puede incluir más texto o información específica.</p>
      </AccordionItem>
      <AccordionItem title="Tercer Item">
        <p>Este es el contenido detallado del tercer item. Puedes incluir cualquier detalle adicional que desees mostrar.</p>
      </AccordionItem>
    </div>
  );
};

export default App;
