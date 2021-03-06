import React, { useRef, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { default as bemCssModules } from 'bem-css-modules';
import { CalculatorStore } from "../../stores/CalculatorStore";
import { default as DisplayStyles } from './Display.module.scss';

interface DisplayProps {
    calculatorStore?: CalculatorStore;
}


const style = bemCssModules(DisplayStyles);

const Display: React.FC<DisplayProps> = ({calculatorStore}) => {

    const displayRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            if(displayRef.current && calculatorStore) {
                calculatorStore.displayElement = displayRef.current;
            }
        },
        [displayRef, calculatorStore]
    )

    return (
        <div 
            className={style()}
            ref={displayRef}
        >    
            0
        </div>
    )
}

const DisplayConsumer = inject('calculatorStore')(observer(Display));

export { DisplayConsumer as Display };