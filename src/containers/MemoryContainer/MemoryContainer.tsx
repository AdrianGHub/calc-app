import React from 'react';
import { default as BemCssModules } from 'bem-css-modules';
import { default as MemoryContainerStyles } from './MemoryContainer.module.scss';
import { Button } from '../../components/Button/Button';


const style = BemCssModules(MemoryContainerStyles);

export const MemoryContainer: React.FC = () => {
    return (
        <div className={style()}>
            <Button content="MC" isMemeory onClick={() => console.log('memory klik')}/>
            <Button content="MR" isMemeory onClick={() => console.log('memory klik')}/>
            <Button content="M+" isMemeory onClick={() => console.log('memory klik')}/>
            <Button content="M-" isMemeory onClick={() => console.log('memory klik')}/>
            <Button content="MS" isMemeory onClick={() => console.log('memory klik')}/>
        </div>
    )
}
