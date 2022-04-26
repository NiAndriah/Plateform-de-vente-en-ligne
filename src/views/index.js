import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components';
import { list } from '../components/data';
import { Home } from './home';
import { Cart } from './cart';

const App = () => {
  const [category, setCategory] = useState(0);
  const [count, setCount] = useState(1);
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
      console.log(isFiltering);
  });
  return(
    <Fragment>
      <Router>
        <Navbar filterResults={filterResults} setFiltering={setFiltering} count={count} />
        <Switch>
          <Route exact path='/' component={() => <Home 
                category={category} 
                loadCategory={loadCategory} 
                addToCart={setCount} 
                count={count}
                list={list}
                isFiltering={isFiltering}
                Filtered={Filtered}/>
              }/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;