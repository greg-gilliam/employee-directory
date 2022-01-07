import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useEntries } from '../../hooks/useUser';

export default function Directory() {
  const [employeeEntry, setEmployeeEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();
  function updateDirectoryList() {
    if (!employeeEntry) {
      alert('Please write an entry!');
    } else {
      setEntries([...entries, { name: user, message: guestEntry }]);
      setEmployeeEntry('');
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDirectoryList();
  };

  const displayMessage = user
    ? `Thanks for signing the employee directory ${user}!`
    : 'Please sign the employee directory!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="employeeEntry">Employee Entry</label>
          </div>
          <div>
            <textarea
              id="employeeEntry"
              value={employeeEntry}
              placeholder="Your entry!"
              onChange={(event) => setEmployeeEntry(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="button" type="submit">
            Click to sign!
          </button>
          {user && (
            <button
              onClick={() => {
                setUser('');
              }}
            >
              Not {user}? Click here!
            </button>
          )}
        </div>
      </form>
    </>
  );
}
