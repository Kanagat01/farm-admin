import React, { createContext, Dispatch, SetStateAction } from "react";
import { API_URL } from "~/shared/config";

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
    let initialSocket = null;
    const token = localStorage.getItem("access_token");
    if (token) {
      let domain =
        API_URL.replace("http", "ws") + `/ws/admin_socket//?token=${token}`;
      initialSocket = new WebSocket(domain);
    }
    const [socket, setSocket] = React.useState<WebSocket | null>(initialSocket);

    return (
      <WebSocketContext.Provider value={{ socket, setSocket }}>
        {component()}
      </WebSocketContext.Provider>
    );
  };
