import { useState, useEffect } from 'react';

export default (ws) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const listener = (event) => {
      setState(event);
    };
    ws.addEventListener('message', listener);

    return () => {
      ws.removeEventListener('message', listener);
    };
  });

  return state;
};
