import React from "react";
import classes from "../Button/Button.module.css";

const button = (props) => {
	const isOperator = (value) => {
		return !isNaN(value) || value === "." || value === "=";
	};

	return (
		<div
			className={[
				classes.Button,
				isOperator(props.children) ? "" : classes.Operator
			].join(' ')}
		>
			{props.children}
		</div>
	);
};

export default button;
