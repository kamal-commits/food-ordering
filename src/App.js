import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasketItems from './components/BasketItems';
import FoodMenu from './components/FoodMenu';
import Navbar from './components/Navbar';
import { BasketContextProvider } from './context/basketContext';
import { FoodContextProvider } from './context/foodContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <FoodContextProvider>
        <BasketContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={FoodMenu} />
              <Route path="/basket" exact component={BasketItems} />
            </Switch>
          </Router>
        </BasketContextProvider>
      </FoodContextProvider>
    </div>
  );
}

export default App;
