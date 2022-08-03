import React, { useReducer, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  switch (action.type){
    case 'USER_INPUT':
      return {value: action.payload, isValid: action.payload.includes('@')}
    case 'INPUT_BLUR':
      return {value: state.value, isValid: state.value.includes('@')}
    default:
      return {value: '', isValid: false}
  }
}
const passReducer = (state, action) => {
  switch (action.type){
    case 'USER_PASS':
      return {value: action.payload, isValid: action.payload.trim().length > 6}
    case 'INPUT_BLUR':
      return {value: state.value, isValid: state.value.trim().length > 6}
    default:
      return {value: '', isValid: 'false'}
  }
}
const Login = (props) => {

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  })
  const [passState, dispatchPass] = useReducer(passReducer, {
    value: '',
    isValid: null
  })

  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', payload: event.target.value});
  };
  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
    setFormIsValid(passState.isValid)
    console.log(passState.isValid, 'pass')
  };
  const passwordChangeHandler = (event) => {
    dispatchPass({type: 'USER_PASS', payload: event.target.value});
  };
  const validatePasswordHandler = () => {
    dispatchPass({type: 'INPUT_BLUR'})
    setFormIsValid(emailState.isValid)
    console.log(emailState.isValid, 'email')
  };




  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
              emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
              passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
