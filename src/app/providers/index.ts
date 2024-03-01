import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withAuthContext } from "./withAuthContext";
import { withWebSocketContext } from "./withSocket";
import { withErrorBoundary } from "./withErrorBoundary";

export const withProviders = compose(withRouter, withAuthContext, withWebSocketContext, withErrorBoundary);
export * from "./withAuthContext";
export * from "./withSocket";