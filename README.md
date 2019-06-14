# react-use-websockets
React Hooks + WebSockets API

## Install

### Node

NPM

```sh
npm i use-websockets
```

Yarn

```sh
yarn add use-websockets
```

### Browser

> This requires the React CDN

jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/use-websockets/dist/index.min.js"></script>
```

unpkg

```html
<script src="https://unpkg.com/use-websockets/dist/index.min.js"></script>
```

## Usage

```jsx
import React from 'react';
import useWebSockets from 'use-websockets';

const wss = new WebSocket('ws://localhost:8080');

function App() {
  const onMessageData = useWebSockets.onMessage(wss);
  const onErrorData = useWebSockets.onError(wss);
  const onCloseData = useWebSockets.onClose(wss);
  const onOpenData = useWebSockets.onOpen(wss);

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

## Build


## Build

Clone the repo first, then run the following to install the dependencies

```sh
npm install
```

or 

```sh
yarn install
```

To build the distributable modules:

```sh
npm run build
```

or

```sh
yarn build
```
