/* eslint-disable react-hooks/rules-of-hooks */
import logo from './logo.svg';
import './App.css';
import Home from './staticAPI';
//import Employee from './staticAPI/employee';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to dashboard</h1>

        <Home />
        {/* <Employee /> */}

      </header>
    </div>
  );
}

export default App;
