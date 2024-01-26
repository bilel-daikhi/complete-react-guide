import { useEffect,useState } from "react";
import classes from './Login.module.css'; 



const Login  = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

 
  
    useEffect(() => {
      console.log('EFFECT RUNNING');
  
      return () => {
        console.log('EFFECT CLEANUP');
      };
    }, []);
  
    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
        setFormIsValid(
          enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
      }, 500);
  
      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [enteredEmail, enteredPassword]);
  
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
    };
  
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
    };
  
    const validateEmailHandler = () => {
      setEmailIsValid(enteredEmail.includes('@'));
    };
  
    const validatePasswordHandler = () => {
      setPasswordIsValid(enteredPassword.trim().length > 6);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      props.onLogin(enteredEmail, enteredPassword);
    };
  
    return (
      <div className={classes.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ''
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ''
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit" className='btn btn-primary' disabled={!formIsValid}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  };
  
export default Login;