import React from 'react';
import classes from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";
import ReactDOM from 'react-dom';

const Backdrop = ({onConfirm}) => {
    return <div className={classes.backdrop} onClick={onConfirm}/>;
}
const Modal = ({title, message, onConfirm}) => {
    return (
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
    )
}
const ErrorModal = ({title, message, onConfirm}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={title} message={message} onConfirm={onConfirm} />, document.getElementById('modal-root'))}
        </>
    )
};

export default ErrorModal;