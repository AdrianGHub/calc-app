import React from 'react';
import { default as BemCssModules} from 'bem-css-modules';
import { default as MainKeyboardStyles} from './MainKeyboard.module.scss';
import { Button } from '../Button/Button';

const style = BemCssModules(MainKeyboardStyles);

export const MainKeyboard: React.FC = () => {
    return (
        <div className={style()}>
            <Button content="%" onClick={() => console.log('keyboard klik')} />
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