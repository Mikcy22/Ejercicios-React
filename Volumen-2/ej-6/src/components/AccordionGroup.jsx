import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./AccordionGroup.css";

const AccordionGroup = ({ items }) => {
  const [openedIndex, setOpenedIndex] = useState(0);

  const handleAccordionClick = (index) => {
    if (index === openedIndex) {
      setOpenedIndex(null);
    } else {
      setOpenedIndex(index);
    }
  };

  return (
    <div className="accordion-group">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openedIndex === index}
          onClick={() => handleAccordionClick(index)}
        >
          <p>{item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
};

export default AccordionGroup;
