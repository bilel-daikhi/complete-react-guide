import React from "react";
import useInputReducer from "./use-input-reducer";

const FormUsingCustomHookAndReducer = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInputReducer((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputReducer((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control is-invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control is-invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInputClasses}
          placeholder="Name..."
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p style={{ color: "red" }}>Name must not be empty.</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Your E-Mail</label>
        <input
          placeholder="Email..."
          className={emailInputClasses}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
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
export default FormUsingCustomHookAndReducer;
