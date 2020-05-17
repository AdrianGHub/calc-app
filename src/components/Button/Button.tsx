import React from 'react';
import { default as BemCssModules} from 'bem-css-modules';
import { default as ButtonStyles} from './Button.module.scss';

type TCalculatorFunction = () => void;
type TConcatenateFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

const style = BemCssModules(ButtonStyles);
interface BUttonProps {
    content: string;
    isEqual?: boolean;
    isLighter?: boolean;
    isMemeory?: boolean;
    onClick: TCalculatorFunction | TConcatenateFunction;
}


export const Button: React.FC<BUttonProps> = (props) => {
    const modifiers = {
        'is-equal': props.isEqual,
        'is-lighter': props.isLighter,
        'is-memory': props.isMemeory
    }

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        props.onClick(event);
    }

    return (
        <button 
            className={style(modifiers)}
            onClick={onClickHandler}
        >
            {props.content}
        </button>
    )
}
