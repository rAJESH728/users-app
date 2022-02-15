import React from "react";
import "./UserList.css";

const UserList = (props) => {

  let userDisplay = (
    <div className="user-list">
      <h2>No User Data Found!</h2>
    </div>
  );

  if (props.onUserInputList.length > 0) {
    userDisplay = props.onUserInputList.map((user) => (
      <ul className="user-list">
      <h2>{`${user.name} (${user.age} Years old)`}</h2>
    </ul>
    ));
  }

  return (
    <div>
      {userDisplay}
    </div>
  );
};

export default UserList;
