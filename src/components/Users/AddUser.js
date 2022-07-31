import React, {useRef, useState} from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({onAddUser}) => {
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const enteredUsernameRef = useRef();
    const enteredAgeRef = useRef();


    const addUserHandler = (e) => {
        e.preventDefault();
        // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        //     setError({
        //         title: 'Invalid name or age.',
        //         message: 'Invalid name or age. Please enter valid name & age.',
        //     })
        //     return;
        // }
        const enteredUsernameRefValue = enteredUsernameRef.current.value;
        const enteredAgeRefValue = enteredAgeRef.current.value;
        if (enteredUsernameRefValue.trim().length === 0 || enteredAgeRefValue.trim().length === 0) {
            setError({
                title: 'Invalid name or age.',
                message: 'Invalid name or age. Please enter valid name & age.',
            })
            return;
        }

        if (+enteredAgeRefValue < 1) {
            setError({
                title: 'Invalid  age.',
                message: 'Invalid age. Please enter valid age (Age > 0)',
            })
            return;
        }
        onAddUser(enteredUsernameRefValue, enteredAgeRefValue);
        console.log(enteredUsernameRefValue, enteredAgeRefValue);
        enteredUsernameRef.current.value = '';
        enteredAgeRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    }
    // const usernameChangeHandler = (e) => {
    //     setEnteredUsername(e.target.value);
    // }
    // const ageChangeHandler = (e) => {
    //     setEnteredAge(e.target.value);
    // }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username </label>
                    {/*<input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />*/}
                    <input id="username" type="text" ref={enteredUsernameRef}/>
                    <label htmlFor='age'>Age (Years) </label>
                    {/*<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />*/}
                    <input id="age" type="number" ref={enteredAgeRef}/>
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </>
    )
};

export default AddUser;