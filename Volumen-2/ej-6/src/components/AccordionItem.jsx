import React from "react";
import "./AccordionItem.css";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▶</span>
      </div>
      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
        {isOpen && children}
      </div>
    </div>
  );
};

export default AccordionItem;
