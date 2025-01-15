import React from "react";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = () => {
  const users = [
    {
      photo: "https://via.placeholder.com/80",
      name: "María García",
      dob: "10/04/1990",
      description: "Desarrolladora Frontend apasionada por React.",
      company: "Tech Solutions Inc."
    },
    {
      photo: "https://via.placeholder.com/80",
      name: "Juan Pérez",
      dob: "15/08/1985",
      description: "Analista de datos con experiencia en Big Data.",
      company: "Data Insights LLC"
    },
    {
      photo: "https://via.placeholder.com/80",
      name: "Ana López",
      dob: "20/11/1992",
      description: "Diseñadora UX/UI enfocada en crear experiencias únicas.",
      company: "Creative Studio Co."
    }
  ];

  return (
    <div className="user-list">
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

export default UserList;
