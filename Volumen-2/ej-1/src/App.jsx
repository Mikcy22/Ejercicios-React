import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const users = [
    {
      photo: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg",
      name: "María García",
      dob: "10/04/2000",
      description: "Desarrolladora Frontend apasionada por React.",
      company: "Tech Solutions Inc."
    },
    {
      photo: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_4.jpg",
      name: "Juan Pérez",
      dob: "15/08/1985",
      description: "Analista de datos con experiencia en Big Data.",
      company: "Data Insights LLC"
    },
    {
      photo: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_3.jpg",
      name: "Ana López",
      dob: "20/11/1992",
      description: "Diseñadora UX/UI enfocada en crear experiencias únicas.",
      company: "Creative Studio Co."
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Usuarios</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          photo={user.photo}
          name={user.name}
          dob={user.dob}
          description={user.description}
          company={user.company}
        />
      ))}
    </div>
  );
};

export default App;
