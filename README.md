# @lxsmnsyc/react-use-websockets

> React Hooks + WebSockets

[![NPM](https://img.shields.io/npm/v/@lxsmnsyc/react-use-websockets.svg)](https://www.npmjs.com/package/@lxsmnsyc/react-use-websockets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @lxsmnsyc/react-use-websockets
```

```bash
yarn add @lxsmnsyc/react-use-websockets
```

## Usage

```tsx
import React from 'react';

import {
  useWebSocketMessage,
  useWebSocketError,
  useWebSocketClose,
  useWebSocketOpen,
} from '@lxsmnsyc/react-use-websockets';

const wss = new WebSocket('ws://localhost:8080');

function App() {
  const onMessageData = useWebSocketMessage(wss);
  const onErrorData = useWebSocketError(wss);
  const onCloseData = useWebSocketClose(wss);
  const onOpenData = useWebSocketOpen(wss);

  if (onErrorData) {
    return (
      <h3>
        An error occured.
      </h3>
    );
  }
  if (onCloseData) {
    return (
      <h3>
        Connection closed.
      </h3>
    );
  }
  if (onMessageData) {
    return (
      <h3>
        Message received : { onMessageData }
      </h3>
    );
  }
  if (onOpenData) {
    return (
      <h3>
        Connection established.
      </h3>
    );
  }
  return (
    <h3>
      Waiting for a connection.
    </h3>
  );
}

export default App;
```

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
