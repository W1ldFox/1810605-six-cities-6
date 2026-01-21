function Spinner(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      </main>
    </div>
  );
}

export default Spinner;
