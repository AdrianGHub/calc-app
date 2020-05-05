import React, { Component } from "react";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ClearButton from "./components/ClearButton/ClearButton";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
		};
  }
  
  inputValueHandler = (value) => {
    this.setState({input: this.state.input + value})
  }

  inputDecValueHandler = (value) => {
    if(this.state.input.indexOf(".") === -1) {
      this.setState({input: this.state.input + value})
    }
  }

  clearButtonHandler = () => {
    this.setState({input: ""});
  }

  inputZeroValueHandler = (value) => {
    if (this.state.input !== "") {
      this.setState({input: this.state.input + value})
    }
  }

  addValueHandler = () => {
      this.state.previousNumber = this.state.input;
      this.setState({input: ""})
      this.state.operator = "plus"
  }

  subtractValueHandler = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""})
    this.state.operator = "minus"
  }

  multiplyValueHandler = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""})
    this.state.operator = "multiply"
  }

  divideValueHandler = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""})
    this.state.operator = "divide"
  }


  evalValueHandler = () => {
      this.state.currentNumber = this.state.input;

    switch(this.state.operator) {
      case "plus": 
      this.setState({
        input: (parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)).toFixed(2)})
        break;
        case "minus": 
      this.setState({
        input: (parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)).toFixed(2)})
        break;
        case "multiply": 
      this.setState({
        input: (parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)).toFixed(2)})
        break;
        case "divide": 
      this.setState({
        input: (parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)).toFixed(2)})
        break;
        default:
        this.setState({
          input: "Invalid operation"})
        break;
    
    } 

  }

	render() {
		return (
			<div className={classes.App}>
				<div className={classes.CalcWrapper}>
					<div className={classes.Row}>
						<Input>
            {this.state.input}
            </Input>
					</div>
					<div className={classes.Row}>
						<Button handleClick={this.inputValueHandler}>7</Button>
						<Button handleClick={this.inputValueHandler}>8</Button>
						<Button handleClick={this.inputValueHandler}>9</Button>
						<Button handleClick={this.divideValueHandler}>/</Button>
					</div>
					<div className={classes.Row}>
						<Button handleClick={this.inputValueHandler}>4</Button>
						<Button handleClick={this.inputValueHandler}>5</Button>
						<Button handleClick={this.inputValueHandler}>6</Button>
						<Button handleClick={this.multiplyValueHandler}>*</Button>
					</div>
					<div className={classes.Row}>
						<Button handleClick={this.inputValueHandler}>3</Button>
						<Button handleClick={this.inputValueHandler}>2</Button>
						<Button handleClick={this.inputValueHandler}>1</Button>
						<Button handleClick={this.addValueHandler}>+</Button>
					</div>
					<div className={classes.Row}>
						<Button handleClick={this.inputDecValueHandler}>.</Button>
						<Button handleClick={this.inputZeroValueHandler}>0</Button>
						<Button handleClick={this.evalValueHandler}>=</Button>
						<Button handleClick={this.subtractValueHandler}>-</Button>
					</div>
					<div className={classes.Row}>
						<ClearButton handleClear={this.clearButtonHandler}>Clear</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
