import React from 'react';
import { observer, inject } from 'mobx-react';
import { default as BemCssModules } from 'bem-css-modules';
import { Button } from '../../components/Button/Button';
import { CalculatorStore } from "../../stores/CalculatorStore";
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
            <Button content="%" onClick={calculatorStore.percent} />
            <Button content="CE" onClick={calculatorStore.cancel} />
            <Button content="C" onClick={calculatorStore.clear} />
            <Button content="&#8634;" onClick={calculatorStore.undo} />
            <Button content="1/x" onClick={calculatorStore.oneXth} />
            <Button content="x(2)" onClick={calculatorStore.square} />
            <Button content="sqrt" onClick={calculatorStore.square} />
            <Button content="/" onClick={calculatorStore.division} />
            <Button content="7" onClick={event => calculatorStore.concatenateNumber(event)} />
            <Button content="8" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="9" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="X" onClick={calculatorStore.multiplication} />
            <Button content="4" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="5" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="6" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="-" onClick={calculatorStore.subtraction}/>
            <Button content="1" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="2" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="3" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="+" onClick={calculatorStore.addition} />
            <Button content="+/-" onClick={calculatorStore.invertNumber} />
            <Button content="0" onClick={event => calculatorStore.concatenateNumber(event)}/>
            <Button content="." onClick={calculatorStore.addComma} />
            <Button content="=" isEqual onClick={calculatorStore.equal} />

        </div>
    );
};

const MainKeyboardConsumer = inject('calculatorStore')(observer(MainKeyboard));

export { MainKeyboardConsumer as MainKeyboard };