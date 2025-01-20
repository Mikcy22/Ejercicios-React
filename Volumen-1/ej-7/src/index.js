import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//aqui llamamos a APP y ejecutamos el doom

//index.js siempre va a ser igual(mayoria de veces)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
