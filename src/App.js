import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index.js';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Inc = () => {
    dispatch(actions.increment());
  };
  const Dec = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Dec</button>
      <button onClick={addBy}>AddBy</button>
    </div>
  );
}
