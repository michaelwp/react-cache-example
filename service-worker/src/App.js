import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      });
    }
  }, []);

  return (
      <div>
        <h1>My App</h1>
      </div>
  );
}

export default App;
