import React from 'react';
import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";

const ErrorModal = ({title, message, onConfirm}) => {
    return (
        <>
            <div className={classes.backdrop} onClick={onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <section className={classes.content}>
                    <p>{message}</p>
                </section>
                <footer className={classes.actions}>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    )
};

export default ErrorModal;