import "./App.css";
import React, { useState } from "react";
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
const dummy = [];

const App = () => {
  const [userInputList, setUserInputList] = useState(dummy);
  const onUserDataInput = (dataInput) => {
    setUserInputList((prevData) => {
      return [dataInput, ...prevData];
    });
  };
  let userDisplay = (
    <div className="user-list">
      <h2>No User Data Found!</h2>
    </div>
  );

  if (userInputList.length > 0) {
    userDisplay = userInputList.map((user) => (
      <UserList
        totalUserData={userInputList}
        uName={user.name}
        key={user.id}
        uAge={user.age}
      />
    ));
  }

  return (
    <div>
      <div>
        <NewUser userInput={onUserDataInput} />
      </div>
      <div>{userDisplay};</div>
    </div>
  );
};

export default App;
