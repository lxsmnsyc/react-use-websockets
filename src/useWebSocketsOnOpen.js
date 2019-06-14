import { useState, useEffect } from 'react';

export default (ws) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const listener = (event) => {
      setState(event);
    };
    ws.addEventListener('open', listener);

    return () => {
      ws.removeEventListener('open', listener);
    };
  });

  return state;
};
