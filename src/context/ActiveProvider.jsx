/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [active, setIsActive] = useState(false);

  return (
    <ActiveContext.Provider value={{ active, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  )
}