import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import Products from './Views/Products';


function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header></Header>
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/productsList">
              <Products></Products>
            </Route>
            <Route path="/products/:id">
              <Product></Product>
            </Route>
          </Switch>
        </div>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
