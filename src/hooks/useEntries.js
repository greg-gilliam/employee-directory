import { useContext } from 'react';

const useEntries = () => {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error('useEntries must be used within an EntryContext Provider');
  }
  return context;
};

export { useEntries };
