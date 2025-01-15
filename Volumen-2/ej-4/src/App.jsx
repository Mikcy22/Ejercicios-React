import React from "react";
import TabMenu from "./components/TabMenu";

const App = () => {
  const tabs = [
    { id: 1, title: "Primer Tab", content: "<p>Contenido del primer tab</p>" },
    { id: 2, title: "Segundo Tab", content: "<p>Contenido del segundo tab</p>" },
    { id: 3, title: "Tercer Tab", content: "<p>Contenido del tercer tab</p>" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Tab Menu</h1>
      <TabMenu tabs={tabs} />
    </div>
  );
};

export default App;
