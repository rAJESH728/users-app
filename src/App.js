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
  

  return (
    <div>
      <div>
        <NewUser userInput={onUserDataInput} />
      </div>
      <UserList onUserInputList={userInputList}/>
    </div>
  );
};

export default App;
