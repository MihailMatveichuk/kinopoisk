import React, { ReactNode, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState(false);
  try {
    if (error) {
      return <ErrorMessage />;
    }

    return children;
  } catch (error) {
    setError(true);
  }
};

export default ErrorBoundary;
