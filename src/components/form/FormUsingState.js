import React, { useState } from "react";

const FormUsingState = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control is-invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control is-invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInputClasses}
          type="text"
          id="name"
          placeholder="Name..."
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p style={{ color: "red" }}>Name must not be empty.</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Your E-Mail</label>
        <input
          className={emailInputClasses}
          placeholder="Email..."
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p style={{ color: "red" }}>Please enter a valid email.</p>
        )}
      </div>
      <div className="row">
        <button className="btn btn-primary" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormUsingState;
