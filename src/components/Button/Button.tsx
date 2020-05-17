import React from 'react';
import { default as BemCssModules} from 'bem-css-modules';
import { default as ButtonStyles} from './Button.module.scss';

type TCalculatorFunction = () => void;
type TConcatenateFunction = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

interface BUttonProps {
    content: string;
    isEqual?: boolean;
    isLighter?: boolean;
    isMemeory?: boolean;
    onClick: TCalculatorFunction | TConcatenateFunction;
}


const style = BemCssModules(ButtonStyles);

export const Button: React.FC<BUttonProps> = (props) => {
    return (
        <button className={style()}>
            {props.content}
        </button>
    )
}
