import React from "react";
import UserList from "./components/UserList";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Lista de Usuarios</h1>
      <ThemeSwitcher>
        <UserList />
      </ThemeSwitcher>
    </div>
  );
};

export default App;
