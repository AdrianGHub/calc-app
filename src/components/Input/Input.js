import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    return (
    <div className={classes.Input}>{props.children === "" ? 0 : props.children}</div>
    );
};

export default input;