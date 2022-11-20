import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <>
        <Navbar />
        <Home />
      </>
    </>
  );
}

export default App;
