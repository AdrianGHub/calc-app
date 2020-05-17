import React from "react";
import { default as bemCssModules } from 'bem-css-modules';
import { Display } from "./components/Display/Display";
import { MainKeyboard } from "./components/MainKeyboard/MainKeyboard";
import { MemoryContainer } from "./containers/MemoryContainer/MemoryContainer";
import { default as AppStyles } from "./App.module.scss";

bemCssModules.setSettings({
  modifierDelimiter: '--'
});

const style = bemCssModules(AppStyles);

function App() {
  return (
    <div className={style()}>
      <Display />
      <MemoryContainer />
      <MainKeyboard />
    </div>
  );
}

export default App;
