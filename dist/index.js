'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
function useEvent(socket, event, listen, setState) {
    React.useEffect(function () {
        if (listen) {
            socket.addEventListener(event, setState);
            return function () { return socket.removeEventListener(event, setState); };
        }
        return function () { };
    }, [socket, event, listen]);
}
/**
 * A React Hook that listens to a WebSocket instance's WebSocket event.
 *
 * Re-renders the component whenever the event emits.
 *
 * @param socket a WebSocket instance
 * @param event a WebSocket event
 * @param listen conditionally listen to the event, defaults to true.
 */
function useWebSocketEvent(socket, event, listen) {
    if (listen === void 0) { listen = true; }
    var _a = React.useState(), state = _a[0], setState = _a[1];
    useEvent(socket, event, listen, setState);
    return state;
}
/**
 * Listens to a WebSocket instance's 'open' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true
 */
var useWebSocketOpen = function (socket, listen) {
    if (listen === void 0) { listen = true; }
    return useWebSocketEvent(socket, 'open', listen);
};
/**
 * Listens to a WebSocket instance's 'error' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true
 */
var useWebSocketError = function (socket, listen) {
    if (listen === void 0) { listen = true; }
    return useWebSocketEvent(socket, 'error', listen);
};
/**
 * Listens to a WebSocket instance's 'close' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true
 */
function useWebSocketClose(socket, listen) {
    if (listen === void 0) { listen = true; }
    var _a = React.useState(), state = _a[0], setState = _a[1];
    useEvent(socket, 'close', listen, setState);
    return state;
}
/**
 * Listens to a WebSocket instance's 'message' event
 * @param socket a WebSocket instance
 * @param listen conditionally listen to the event, defaults to true.
 */
function useWebSocketMessage(socket, listen) {
    if (listen === void 0) { listen = true; }
    var _a = React.useState(), state = _a[0], setState = _a[1];
    useEvent(socket, 'message', listen, setState);
    return state;
}

exports.default = useWebSocketEvent;
exports.useWebSocketOpen = useWebSocketOpen;
exports.useWebSocketError = useWebSocketError;
exports.useWebSocketClose = useWebSocketClose;
exports.useWebSocketMessage = useWebSocketMessage;
//# sourceMappingURL=index.js.map
