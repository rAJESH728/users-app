import React, { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";

import "./NewUser.css";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    const enteredAge = ageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredAge <= 0 || enteredAge > 100
    ) {
      setError(true);
      return;
    }

    const usersData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.userInput(usersData);
    nameInputRef.current.value ='';
    ageInputRef.current.value ='';
  };
  const okHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && <ErrorModal onOkHandler={okHandler} />}
      <form className="new-user" onSubmit={submitHandler}>
        <div>
          <label>User Name</label>
        </div>
        <div>
          <input type="text" ref={nameInputRef}></input>
        </div>
        <div>
          <label>Age(Years)</label>
        </div>
        <div>
          <input
            type="number"
            ref={ageInputRef}
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
