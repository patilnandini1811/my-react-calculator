import React from 'react';
import './App.css';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <div className='container'>
      {/* Title placed outside of the Wrapper component */}
      <div className='title'>
        <h1>React Calculator</h1>
      </div>
      
      
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </div >
  );
}

export default App;
