import React, { useState } from "react";
import "./TabMenu.css";

const TabMenu = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="tab-menu">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={tab.id === selectedTab ? "tab-button active" : "tab-button"}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            tab.id === selectedTab && <div key={tab.id} dangerouslySetInnerHTML={{ __html: tab.content }} />
        )}
      </div>
    </div>
  );
};

export default TabMenu;
