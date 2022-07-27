import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (e) => {
        e.preventDefault();
        console.log(enteredUsername, enteredAge)
    }
    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username </label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor='age'>Age (Years) </label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    )
};

export default AddUser;