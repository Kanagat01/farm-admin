import axios, { AxiosError } from "axios";
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
  error: ErrorWithStatus | AxiosError | null;
};

function ErrorContainer({ error }: ErrorContainerProps) {
  const isAxiosError = axios.isAxiosError(error);

  return (
    <div className="error-container">
      <h1 className="display-1 error-heading">
        {isAxiosError ? error.response?.status : error?.status}
      </h1>
      <h2 className="error-code">
        {isAxiosError ? error.code : error?.statusText || "Неизвестная ошибка"}
      </h2>
      <p className="error-message">
        {isAxiosError ? error.message : error?.data}
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
