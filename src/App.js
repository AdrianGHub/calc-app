import React, { Component } from "react";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ClearButton from "./components/ClearButton/ClearButton";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
      value: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
		};
  }
  
  inputValueHandler = (value) => {

  }

	render() {
		return (
			<div className={classes.App}>
				<div className={classes.CalcWrapper}>
					<div className={classes.Row}>
						<Input></Input>
					</div>
					<div className={classes.Row}>
						<Button>7</Button>
						<Button>8</Button>
						<Button>9</Button>
						<Button>/</Button>
					</div>
					<div className={classes.Row}>
						<Button>4</Button>
						<Button>5</Button>
						<Button>6</Button>
						<Button>*</Button>
					</div>
					<div className={classes.Row}>
						<Button>3</Button>
						<Button>2</Button>
						<Button>1</Button>
						<Button>+</Button>
					</div>
					<div className={classes.Row}>
						<Button>.</Button>
						<Button>0</Button>
						<Button>=</Button>
						<Button>-</Button>
					</div>
					<div className={classes.Row}>
						<ClearButton>Clear</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
