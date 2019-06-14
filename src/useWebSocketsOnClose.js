import { useState, useEffect } from 'react';

export default (ws) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const listener = (event) => {
      setState(event);
    };
    ws.addEventListener('close', listener);

    return () => {
      ws.removeEventListener('close', listener);
    };
  });

  return state;
};
