import React from 'react';
import { observer, inject } from 'mobx-react';
import { default as BemCssModules } from 'bem-css-modules';
import { Button } from '../Button/Button';
import { CalculatorStore } from '../../stores/CalculatorStore';
import { default as MainKeyboardStyles } from './MainKeyboard.module.scss';

interface MainKeyboardProps {
    calculatorStore?: CalculatorStore;
}

const style = BemCssModules(MainKeyboardStyles);

const MainKeyboard: React.FC<MainKeyboardProps> = ({ calculatorStore }) => {
    if (!calculatorStore) {
        return null;
    }

    return (
        <div className={style()}>
            <Button content="%" onClick={calculatorStore.test} />
            <Button content="CE" onClick={() => console.log('keyboard klik')} />
            <Button content="C" onClick={() => console.log('keyboard klik')} />
            <Button content="&#8634;" onClick={() => console.log('keyboard klik')} />
            <Button content="1/x" onClick={() => console.log('keyboard klik')} />
            <Button content="x(2)" onClick={() => console.log('keyboard klik')} />
            <Button content="sqrt" onClick={() => console.log('keyboard klik')} />
            <Button content="/" onClick={() => console.log('keyboard klik')} />
            <Button content="7" onClick={() => console.log('keyboard klik')} />
            <Button content="8" onClick={() => console.log('keyboard klik')} />
            <Button content="9" onClick={() => console.log('keyboard klik')} />
            <Button content="X" onClick={() => console.log('keyboard klik')} />
            <Button content="4" onClick={() => console.log('keyboard klik')} />
            <Button content="5" onClick={() => console.log('keyboard klik')} />
            <Button content="6" onClick={() => console.log('keyboard klik')} />
            <Button content="-" onClick={() => console.log('keyboard klik')} />
            <Button content="1" onClick={() => console.log('keyboard klik')} />
            <Button content="2" onClick={() => console.log('keyboard klik')} />
            <Button content="3" onClick={() => console.log('keyboard klik')} />
            <Button content="+" onClick={() => console.log('keyboard klik')} />
            <Button content="+/-" onClick={() => console.log('keyboard klik')} />
            <Button content="0" onClick={() => console.log('keyboard klik')} />
            <Button content="." onClick={() => console.log('keyboard klik')} />
            <Button content="=" isEqual onClick={() => console.log('keyboard klik')} />

        </div>
    );
};

const MainKeyboardConsumer = inject('calculatorStore')(observer(MainKeyboard));

export { MainKeyboardConsumer as MainKeyboard };