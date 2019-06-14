import useWebSocketsOnOpen from './useWebSocketsOnOpen';
import useWebSocketsOnClose from './useWebSocketsOnClose';
import useWebSocketsOnError from './useWebSocketsOnError';
import useWebSocketsOnMessage from './useWebSocketsOnMessage';

export default {
  onOpen: useWebSocketsOnOpen,
  onClose: useWebSocketsOnClose,
  onError: useWebSocketsOnError,
  onMessage: useWebSocketsOnMessage,
};
