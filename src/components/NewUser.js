import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

import "./NewUser.css";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredAge <= 0
    ) {
      setError(true);
      return;
    }

    const usersData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    setEnteredName("");
    setEnteredAge("");
    props.userInput(usersData);
  };
  const okHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && ( <ErrorModal onOkHandler={okHandler} />
      )}
      <form className="new-user" onSubmit={submitHandler}>
        <div>
          <label>User Name</label>
        </div>
        <div>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Age(Years)</label>
        </div>
        <div>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            min="1"
            step="1"
            max="100"
          ></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
