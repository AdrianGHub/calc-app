import React from "react";
import { Provider } from 'mobx-react';
import { default as bemCssModules } from 'bem-css-modules';
import { Display } from "./components/Display/Display";
import { MainKeyboard } from "./components/MainKeyboard/MainKeyboard";
import { MemoryContainer } from "./containers/MemoryContainer/MemoryContainer";
import { default as AppStyles } from "./App.module.scss";
import { getRootStores } from "./stores/getRootStores";

bemCssModules.setSettings({
  modifierDelimiter: '--'
});

const style = bemCssModules(AppStyles);

function App() {
  return (
    <Provider {...getRootStores()}>
      <div className={style()}>
        <Display />
        <MemoryContainer />
        <MainKeyboard />
      </div>
    </Provider>
  );
}

export default App;
