
type TSelectedFunction = (event?: React.MouseEvent, hasRepeatedValue?: boolean) => void;

export class CalculatorStore {
    private memoryValue = 0;
    private displayValue: string | null = "0";
    private previousValue: number | null = null;
    private selectedFunction: TSelectedFunction | null = null;
    private isFunctionDone = false;
    private repeatedValue = 0;
    private wasEqualClicked = false;
    private wasSpecialFunctionClicked = false;
    private display!: HTMLDivElement;

    public set displayElement(element: HTMLDivElement) {
        this.display = element;
    }

	public concatenateNumber = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		this.displayValue =
			this.displayValue === null ||
			this.displayValue === "0" ||
			this.wasSpecialFunctionClicked
				? (event.target as HTMLButtonElement).textContent
				: this.displayValue + (event.target as HTMLElement).textContent;

		if (this.wasEqualClicked) {
			this.previousValue = null;
			this.repeatedValue = 0;
			this.wasEqualClicked = false;
		}

        this.isFunctionDone = false;
		this.wasSpecialFunctionClicked = false;
		this.display.textContent = this.displayValue;
	}

	public memoryClear = (): void => {
		this.wasSpecialFunctionClicked = true;
		this.memoryValue = 0;
	}

	public memoryRead = (): void => {
		this.wasSpecialFunctionClicked = true;
		this.changeDisplayValue(this.memoryValue.toString());
	}

	public memoryAdd = (): void => {
		this.wasSpecialFunctionClicked = true;
		this.memoryValue = this.memoryValue + Number(this.displayValue);
	}

	public memoryMinus = (): void => {
		this.wasSpecialFunctionClicked = true;
		this.memoryValue = this.memoryValue - Number(this.displayValue);
	}

	public memorySet = (): void => {
		this.wasSpecialFunctionClicked = true;
		this.memoryValue = Number(this.displayValue);
	}

	public clear = (): void => {
		this.previousValue = null;
		this.selectedFunction = null;
		this.changeDisplayValue(null);
	}

	public cancel = (): void => {
		this.changeDisplayValue(null);
	}

	public addition = (event?: React.MouseEvent, hasRepeatedValue?: boolean): void => {
		this.callPreviousFunctionAndChangeIt(this.addition, hasRepeatedValue);

		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();
			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepeatedValue
		);
		const newValue = displayValue + Number(previousValue);

            this.setRepeatedValue(newValue, hasRepeatedValue);

		this.afterNewValueCalculation(newValue);
	}

	public subtraction = (event?: React.MouseEvent, hasRepeatedValue?: boolean): void =>  {
		this.callPreviousFunctionAndChangeIt(
			this.subtraction,
			hasRepeatedValue
		);

		if (this.isFunctionDone) {
            this.handleSecondClickOnFunction();
            
			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepeatedValue
		);
		let newValue;

		if (this.previousValue !== null) {
			newValue = hasRepeatedValue
				? displayValue - this.repeatedValue
				: Number(previousValue) - displayValue;

            this.setRepeatedValue(newValue, hasRepeatedValue)
		}

		this.afterNewValueCalculation(newValue ? newValue : null);
	}

	public multiplication = (event?: React.MouseEvent, hasRepeatedValue?: boolean): void => {
		this.callPreviousFunctionAndChangeIt(
			this.multiplication,
			hasRepeatedValue
		);

		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();
			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepeatedValue
		);
		const newValue = displayValue * Number(previousValue);

        this.setRepeatedValue(newValue, hasRepeatedValue);
		this.afterNewValueCalculation(newValue);
	}

	public division = (event?: React.MouseEvent, hasRepeatedValue?: boolean): void => {
		this.callPreviousFunctionAndChangeIt(this.division, hasRepeatedValue);

		if (this.isFunctionDone) {
			this.handleSecondClickOnFunction();
			return;
		}

		const [displayValue, previousValue] = this.getValuesToCalculations(
			hasRepeatedValue
		);
		const newValue = hasRepeatedValue
			? displayValue / this.repeatedValue
			: previousValue === 0
                ? displayValue

                    : Number(previousValue) / displayValue;

        this.setRepeatedValue(newValue, hasRepeatedValue);
		this.afterNewValueCalculation(newValue);
	}

	public equal = (): void => {
		this.isFunctionDone = false;
		if (!this.wasEqualClicked && this.selectedFunction) {
			this.selectedFunction(undefined, false);
		} else if (this.selectedFunction) {
			this.selectedFunction(undefined, true);
		}

		this.wasEqualClicked = true;
    }
    

	public undo = (): void => {
		this.changeDisplayValue(
			this.displayValue ? this.displayValue.slice(0, -1) : null
		);
	}

	public invertNumber = (): void => {
        const displayValue = Number(this.displayValue);
        const valueToDisplay = displayValue
				? (-Math.abs(displayValue)).toString()
                : (Math.abs(displayValue)).toString();
                
        this.changeDisplayValue(valueToDisplay);
	}

	public addComma = (): void => {
		if (!this.display.textContent?.includes(".")) {
			this.changeDisplayValue(
				`${this.displayValue ? this.displayValue : "0"}.`
			);
		}
    }
    
    public percent = (): void => {
        this.callSpecialFunction(Number(this.previousValue) * Number(this.displayValue) / 100);
    }

    public square = (): void => {
        this.callSpecialFunction(Math.sqrt(Number(this.displayValue)))
    }

    public power = (): void => {
        this.callSpecialFunction(Number(this.displayValue) ** 2)
    }

    public oneXth = (): void => {
        this.callSpecialFunction(1 / Number(this.displayValue))
    }

    private callSpecialFunction(value: number) {
        this.wasSpecialFunctionClicked = false;
        this.wasSpecialFunctionClicked = true;
        this.changeDisplayValue(value.toString());
    }

	private callPreviousFunctionAndChangeIt(previousFunction: TSelectedFunction | null, hasRepeatedValue?: boolean) {
		if (
			this.selectedFunction !== previousFunction &&
			this.selectedFunction
		) {
			this.selectedFunction(undefined, hasRepeatedValue);
		}
		this.selectedFunction = previousFunction;
	}

	private handleSecondClickOnFunction(): void {
		this.setRepeatedValue(this.previousValue, null);
		this.displayValue = "0";
		this.wasEqualClicked = false;
	}
    
    private afterNewValueCalculation(newValue: number | null): void {
		this.isFunctionDone = true;
		this.wasEqualClicked = false;
		this.displayValue = null;
		this.display.textContent =
			this.previousValue !== null ? Number(newValue).toString() : this.display.textContent;
		this.previousValue =
			this.previousValue !== null ? newValue : Number(this.display.textContent);
    }

	private setRepeatedValue(newValue: number | null, hasRepeatedValue?: boolean | null): void {
        if (hasRepeatedValue === null ) {
            this.repeatedValue = Number(newValue);

            return;
        }

        this.repeatedValue = hasRepeatedValue 
        ? this.repeatedValue 
        : this.wasEqualClicked 
            ? Number(newValue) 
            : Number(this.display.textContent);
	}

    private getValuesToCalculations(hasRepetedValue?: boolean): [number, (number | null)] {
        const displayValue = Number(this.display.textContent);
        const previousValue = hasRepetedValue ? this.repeatedValue : Number(this.previousValue);

        return [displayValue, previousValue];
    }

	private changeDisplayValue(value: string | null): void {
		const isNoValue = value === null || value === "";

		this.displayValue = isNoValue ? null : value;
        this.display.textContent = isNoValue ? "0" : value;
	}
}