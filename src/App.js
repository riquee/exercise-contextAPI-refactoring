import React, { useState, createContext } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

const INITIAL_CARS = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

const INITIAL_TRAFFIC = {
  signal: { color: 'red' },
};

const INITIAL_STATE = { ...INITIAL_CARS, ...INITIAL_TRAFFIC };

export const MyContext = createContext();

function App() {
  const [context, setContext] = useState(INITIAL_STATE);
  return (
    <MyContext.Provider value={{ context, setContext }}>
      <div className="container">
        {/* <Cars /> */}
        <TrafficSignal />
      </div>
    </MyContext.Provider>
  );
}

export default App;
