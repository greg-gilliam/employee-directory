import React from 'react';
import Header from '../../components/layout/Header';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
