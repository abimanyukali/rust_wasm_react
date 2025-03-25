import React, { useEffect, useState } from 'react';
import { loadWasm } from './wasm-loader';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const greetWasm = async () => {
      const wasm = await loadWasm();
      setMessage(wasm.greet());
    };
    greetWasm();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}
export default App;
