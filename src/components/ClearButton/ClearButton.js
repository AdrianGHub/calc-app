import React from 'react';
import classes from './ClearButton.module.css';

const clearButton = (props) => {
    return (
        <div className={classes.ClearButton}>
            {props.children}
        </div>
    );
};

export default clearButton;