import React from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <header className="header">
          <h2>Invalid Input</h2>
        </header>
        <div className="content">
          <p>Please Enter correct Values!</p>
        </div>
        <footer className="actions">
          <button onClick={props.onOkHandler}>OK</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
