import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▶</span>
      </div>
      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
        {isOpen && children} {/* Aquí solo mostramos el contenido si está abierto */}
      </div>
    </div>
  );
};

export default AccordionItem;
