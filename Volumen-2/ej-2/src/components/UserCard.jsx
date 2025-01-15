import React from "react";
import "./UserCard.css";

const UserCard = ({ photo, name, dob, description, company }) => {
  return (
    <div className="user-card">
      <img src={photo} alt={`${name}'s photo`} className="user-card__photo" />
      <div className="user-card__info">
        <h2 className="user-card__name">{name}</h2>
        <p className="user-card__dob">Fecha de nacimiento: {dob}</p>
        <p className="user-card__description">{description}</p>
        <p className="user-card__company">Empresa actual: {company}</p>
      </div>
    </div>
  );
};

export default UserCard;
