import React, { Component, ComponentType, ErrorInfo } from "react";

type ErrorWithStatus = Error & {
  status?: number;
  statusText?: string;
  data?: string;
};

type ErrorContainerProps = {
  error: ErrorWithStatus | null;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: ErrorWithStatus | null;
};

function ErrorContainer({ error }: ErrorContainerProps) {
  return (
    <div className="error-container">
      <h1 className="display-1 error-heading">
        {error?.status ? error.status : "404"}
      </h1>
      <h2 className="error-code">
        {error?.statusText ? error.statusText : "Not found"}
      </h2>
      <p className="error-message">
        {error?.data
          ? error.data
          : "The page you are looking for might have been removed had its name changed or is temporarily unavailable."}
      </p>
      <a href="/" className="btn btn-primary">
        Вернуться на главную
      </a>
    </div>
  );
}

class ErrorBoundary extends Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorContainer error={this.state.error} />;
    }

    return this.props.children;
  }
}

export const withErrorBoundary = (Component: ComponentType) => (props: any) =>
  (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
