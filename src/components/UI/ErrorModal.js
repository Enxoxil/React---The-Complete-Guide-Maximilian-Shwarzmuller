import React from 'react';
import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";

const ErrorModal = ({title, message}) => {
    return (
        <>
            <div className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <section className={classes.content}>
                    <p>{message}</p>
                </section>
                <footer className={classes.actions}>
                    <Button>Okay</Button>
                </footer>
            </Card>
        </>
    )
};

export default ErrorModal;