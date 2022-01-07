import React from 'react';
import { render } from 'react-dom';
import App from './App';
import EntryProvider from './context/EntryContext';
import UserProvider from './context/UserContext';

render(
  <React.StrictMode>
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
