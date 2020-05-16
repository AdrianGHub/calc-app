import React from 'react';
import { default as BemCssModules} from 'bem-css-modules';
import { default as ButtonStyles} from './Button.module.scss';

const style = BemCssModules(ButtonStyles);

export const Button: React.FC = (props) => {
    return (
        <button className={style()}>
        </button>
    )
}
