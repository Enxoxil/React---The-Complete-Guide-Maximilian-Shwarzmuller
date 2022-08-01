import React, {useEffect, useState} from 'react';
// import AddUser from "./components/Users/AddUser";
// import UsersList from "./components/Users/UsersList";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
    // const [usersList, setUsersList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginHandler = (email, password) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1');
    }
    const logoutHandler = (email, password) => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    }
    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedIn === '1'){
            setIsLoggedIn(true);
        }
    }, [])
    // const addUserHandler = (userName, userAge) => {
    //     setUsersList((prevUsersList) => {
    //         return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    //     });
    // }


    return (
        <>
            {/*<AddUser onAddUser={addUserHandler}/>*/}
            {/*<UsersList users={usersList}/>*/}
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>
        </>
    );
}

export default App;
