import React, { PropsWithChildren } from "react";
import { Link } from "@reach/router";

type Props = PropsWithChildren<Record<string, unknown>>;

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="global-error" role="alert">
          <h1>Something went very wrong.</h1>
          <Link to="/">Click here to go back to homepage</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export function withErrorBoundary<T>(Component: React.ComponentType<T>) {
  return function WithErrorBoundary(props: T): JSX.Element {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default ErrorBoundary;
