import React, {useContext, useEffect, useReducer, useRef, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            return {value: action.payload, isValid: action.payload.includes('@')}
        case 'INPUT_BLUR':
            return {value: state.value, isValid: state.value.includes('@')}
        default:
            return {value: '', isValid: false}
    }
}
const passReducer = (state, action) => {
    switch (action.type) {
        case 'USER_PASS':
            return {value: action.payload, isValid: action.payload.trim().length > 6}
        case 'INPUT_BLUR':
            return {value: state.value, isValid: state.value.trim().length > 6}
        default:
            return {value: '', isValid: 'false'}
    }
}
const Login = (props) => {
    const emailInputRef = useRef();
    const passInputRef = useRef();
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    })
    const [passState, dispatchPass] = useReducer(passReducer, {
        value: '',
        isValid: null
    })

    const [formIsValid, setFormIsValid] = useState(false);

    const {isValid: emailIsValid} = emailState; // isValid: emailValid - псевжоним в деструктуризации
    const {isValid: passISValid} = passState;
    const authCtx = useContext(AuthContext);

    useEffect(() => {

        const timerId = setTimeout(() => {
            setFormIsValid(
                emailIsValid && passISValid
            )
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [emailIsValid, passISValid])

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', payload: event.target.value});
    };
    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };
    const passwordChangeHandler = (event) => {
        dispatchPass({type: 'USER_PASS', payload: event.target.value});
    };
    const validatePasswordHandler = () => {
        dispatchPass({type: 'INPUT_BLUR'})
    };



    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid){
        authCtx.onLogin(emailState.value, passState.value);
        } else if (!emailIsValid){
            console.log(emailInputRef.current)
            emailInputRef.current.focus();
        } else {
            passInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id='email'
                    type='email'
                    label='E-mail'
                    isValid='emailValid'
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    value={emailState.value}
                />
                <Input
                    ref={passInputRef}
                    id='pass'
                    type='password'
                    label='Password'
                    isValid='passValid'
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    value={passState.value}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
