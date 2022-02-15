import React from "react";
import "./UserList.css";

const NewUser = (props) => {
  return (
    <ul className="user-list">
      <h2>{`${props.uName} (${props.uAge} Years old)`}</h2>
    </ul>
  );
};

export default NewUser;
