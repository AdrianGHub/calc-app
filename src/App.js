import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
            <div className="CalcWrapper">
              <div className="Row">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>/</Button>
              </div>
              <div className="Row">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>*</Button>
              </div>
              <div className="Row">
                <Button>3</Button>
                <Button>2</Button>
                <Button>1</Button>
                <Button>+</Button>
              </div>
              <div className="Row">
                <Button>.</Button>
                <Button>0</Button>
                <Button>=</Button>
                <Button>-</Button>
              </div>
              <div className="Row">
                <Button>Clear</Button>
              </div>
            </div>
            
    </div>
  );
}

export default App;
