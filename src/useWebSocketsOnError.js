import { useState, useEffect } from 'react';

export default (ws) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const listener = (event) => {
      setState(event);
    };
    ws.addEventListener('error', listener);

    return () => {
      ws.removeEventListener('error', listener);
    };
  });

  return state;
};
