import React, { createContext, useState } from 'react';
import './App.css';
import Cars from './Cars';

export const MyContext = createContext();

const INITIAL_STATE = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function App() {
  const [carsColor, setCars] = useState(INITIAL_STATE);
  return (
    <MyContext.Provider value={{ carsColor, setCars }}>
      <Cars />
    </MyContext.Provider>
  );
}

export default App;
