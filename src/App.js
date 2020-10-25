import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import AppStore from './mobx/AppStore';

const App = observer(() => {
  const { count, newNumber, handleDecrease, handleIncrease } = AppStore;

  return (
    <div className="App">
      <div>{count}</div>
      <div>{newNumber}</div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
});

export default App;
