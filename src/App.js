import logo from './logo.svg';
import './App.css';

import ComponentTest from './Component/ComponentTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentTest 
        title = "Hello from title"
        />
      </header>
    </div>
  );
}

export default App;
