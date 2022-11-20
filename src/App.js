import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Product from './components/product';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
      </Switch>
    </>
  );
}

export default App;
