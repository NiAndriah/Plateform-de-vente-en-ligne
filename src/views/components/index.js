import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../../components';
import { list } from '../../components/data';
import { Home } from './home'; 
import { CartPage } from './cart';
import { Checkout } from './checkout';

const App = props => {
  const { items, saveToLocalStorage } = props;
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [Filtered, setFiltered] = useState(false);
  const loadCategory = (i) => {
      setCategory(i);
  }
  const filterResults = input => {
      let fullList = list.flat();
      let results = fullList.filter(item => {
      let name = item.name.toLocaleLowerCase();
      let term = input.toLowerCase();
      return name.indexOf(term) > -1;
      });
      setFiltered(results);
  }
  useEffect(()=> {
      saveToLocalStorage(items);
  }, [items]);
  return(
    <Fragment>
      <Router>
        <Navbar filterResults={filterResults} setFiltering={setFiltering}/>
        <Switch>
          <Route exact path='/' component={() => <Home 
                category={category} 
                loadCategory={loadCategory} 
                list={list}
                isFiltering={isFiltering}
                Filtered={Filtered}/>
              }/>
          <Route path='/cart' component={CartPage}/>
          <Route path='/checkout' component={Checkout}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;