import React from 'react';
import { default as BemCssModules} from 'bem-css-modules';
import { default as ButtonStyles} from './Button.module.scss';

type TCalculatorFunction = () => void;
type TConcatenateFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
interface ButtonProps {
    content: string;
    isEqual?: boolean;
    isLighter?: boolean;
    isMemeory?: boolean;
    onClick: TCalculatorFunction | TConcatenateFunction;
}

const style = BemCssModules(ButtonStyles);


export const Button: React.FC<ButtonProps> = ({isEqual, isLighter, isMemeory, onClick, content}) => {
    const modifiers = {
        'is-equal': isEqual,
        'is-lighter': isLighter,
        'is-memory': isMemeory
    }

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        onClick(event);
    }

    return (
        <button 
            className={style(modifiers)}
            onClick={onClickHandler}
        >
            {content}
        </button>
    )
}
