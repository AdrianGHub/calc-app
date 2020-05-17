import React from 'react';
import { inject, observer } from 'mobx-react';
import { default as BemCssModules } from 'bem-css-modules';
import { Button } from '../../components/Button/Button';
import { CalculatorStore } from '../../stores/CalculatorStore';
import { default as MemoryContainerStyles } from './MemoryContainer.module.scss';


interface MemoryContainerProps {
    calculatorStore?: CalculatorStore;
}

const style = BemCssModules(MemoryContainerStyles);

const MemoryContainer: React.FC<MemoryContainerProps> = ({calculatorStore}) => {
    if (!calculatorStore) {
        return null;
    }
    return (
        <div className={style()}>
            <Button content="MC" isMemeory onClick={calculatorStore.memoryClear}/>
            <Button content="MR" isMemeory onClick={calculatorStore.memoryRead}/>
            <Button content="M+" isMemeory onClick={calculatorStore.memoryAdd}/>
            <Button content="M-" isMemeory onClick={calculatorStore.memoryMinus}/>
            <Button content="MS" isMemeory onClick={calculatorStore.memorySet}/>
        </div>
    )
}

const MemoryContainerConsumer = inject('calculatorStore')(observer(MemoryContainer));

export { MemoryContainerConsumer as MemoryContainer };
