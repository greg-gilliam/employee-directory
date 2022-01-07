import React from 'react';
import { useUser } from '../../hooks/useUser';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <p>You are signing the employee directory as {user}</p>
      ) : (
        <p>Please sign in!</p>
      )}
    </header>
  );
}
