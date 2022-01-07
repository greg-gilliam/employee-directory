import { useEffect, useState } from 'react';

export default function Home() {
  const [myState, setMyState] = useState('');

  if (myState) {
    console.log('myState is set!');
  } else {
    console.log('no myState :(');
  }

  useEffect(() => {
    setMyState('Hello!');
  }, []);

  return (
    <>
      <h1>Home</h1>
      <p>{myState}</p>
    </>
  );
}
