import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Categories from './components/Categories/Categories';
import { createContext, useState } from 'react';

export const CategoriesContext = createContext();
function App() {
  const [category, setCategory] = useState('All');
  return (
    <CategoriesContext.Provider value={[category, setCategory]}>
      
      <Router>
        <Header></Header>
        
        <Switch>          
          <Route path="/shop">
            <Categories></Categories>
            <Shop></Shop> 
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Shop></Shop> 
          </Route>
          <Route path="/product/:Productkey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </CategoriesContext.Provider>
  );
}

export default App;
