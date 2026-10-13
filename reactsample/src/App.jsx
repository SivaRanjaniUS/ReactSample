import { useState } from 'react';
import './App.css';

function Header({ title }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
    </header>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const username = 'Developer';

  const handleIncrement = () => {
    setCount((current) => current + 1);
  };

  return (
    <div className="app-container">
      <Header title="My React Application" />

      <main className="app-content">
        <h2>Welcome back, {username}!</h2>

        <div className="card">
          <p>
            Current Count: <strong>{count}</strong>
          </p>

          <button onClick={handleIncrement}>Click Me</button>
        </div>

        {count >= 5 && (
          <p className="bonus-message">🎉 Nice job! You clicked 5 or more times!</p>
        )}
      </main>
    </div>
  );
}