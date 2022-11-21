import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/products';
import Product from './components/product';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products:/id" component={Product} />
        <Product />
      </Switch>
    </>
  );
}

export default App;
