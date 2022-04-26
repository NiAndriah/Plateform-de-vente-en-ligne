import React from "react";
import { SideMenu, List } from '../components';

export const Home = props => {
    const {isFiltering, Filtered, list, loadCategory, category, addToCart, count } = props;
    return(
        <div className="container">
            <div className="row">
                <SideMenu loadCategory={loadCategory} category={category}/>  
            <div className="col-sm">
                <List data={ isFiltering ? Filtered : list[category] } addToCart={addToCart} count={count}/>
            </div>
            </div>  
        </div>
    );
}