import React from "react";
import { default as bemCssModules } from 'bem-css-modules';
import { default as AppStyles } from "./App.module.scss";
import { Display } from "./Display/Display";

const style = bemCssModules(AppStyles);

function App() {
  return (
    <div className={style()}>
      <Display />
    </div>
  );
}

export default App;
