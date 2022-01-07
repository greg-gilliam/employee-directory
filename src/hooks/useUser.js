import React, { createContext, useContext } from 'react';

const UserContext = createContext();

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      'useUser hook must be called within a UserContext Provider'
    );
  }
  return context;
};

export { useUser };
