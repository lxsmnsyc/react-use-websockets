'use strict';

var react = require('react');

var useWebSocketsOnOpen = (ws) => {
  const [state, setState] = react.useState(null);

  react.useEffect(() => {
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

var useWebSocketsOnClose = (ws) => {
  const [state, setState] = react.useState(null);

  react.useEffect(() => {
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

var useWebSocketsOnError = (ws) => {
  const [state, setState] = react.useState(null);

  react.useEffect(() => {
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

var useWebSocketsOnMessage = (ws) => {
  const [state, setState] = react.useState(null);

  react.useEffect(() => {
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

var index = {
  onOpen: useWebSocketsOnOpen,
  onClose: useWebSocketsOnClose,
  onError: useWebSocketsOnError,
  onMessage: useWebSocketsOnMessage,
};

module.exports = index;
