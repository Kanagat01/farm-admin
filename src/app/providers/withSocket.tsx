import React, { createContext, Dispatch, SetStateAction } from "react";

export type WebSocketContextType = {
  socket: WebSocket | null;
  setSocket: Dispatch<SetStateAction<WebSocket | null>>;
};

export const WebSocketContext = createContext<WebSocketContextType>({
  socket: null,
  setSocket: () => {},
});

export const withWebSocketContext =
  (component: () => React.ReactNode) => () => {
    const [socket, setSocket] = React.useState<WebSocket | null>(null);

    return (
      <WebSocketContext.Provider value={{ socket, setSocket }}>
        {component()}
      </WebSocketContext.Provider>
    );
  };
