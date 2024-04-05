import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div
        className="accordion-header flex gap-4 items-center	"
        onClick={toggleAccordion}
      >
        <div className="accordion-title">{title}</div>
        <div className="accordion-icon text-white	">
          {isExpanded ? "➖" : "➕"}
        </div>
      </div>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
