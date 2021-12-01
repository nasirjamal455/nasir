import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     hello
    </div>
    </Router>
  );
}

export default App;
