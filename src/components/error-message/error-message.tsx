interface ErrorMessageProps {
  onRetry: () => void;
}

function ErrorMessage({ onRetry }: ErrorMessageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
          <p>Server is unavailable.</p>
          <button
            className="button"
            type="button"
            onClick={onRetry}
            style={{ marginTop: '10px' }}
          >
            Retry
          </button>
        </div>
      </main>
    </div>
  );
}

export default ErrorMessage;
