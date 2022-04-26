import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ( {filerResults, setFiltering, count} ) => {
    return(
        <nav className="navbar navbar-light bg-orange">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <span className="title red">
                        <FontAwesomeIcon icon={faShoppingCart}/> Mes cours en lignes
                    </span>
                </Link>
                <form className="d-flex">
                    <input className="form-control" type="search" aria-label="Search" placeholder="Recherche"
                    onChange={
                        (e) => {
                            setFiltering(e.target.value.length > 0);
                            filerResults(e.target.value);
                        }
                    }
                    />
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingBag} className="iconRight fa-2x"/>
                    </Link>
                    <span className='badge rounded-pill bg-success'>{count}</span>
                </form>
            </div>
        </nav>
    );
}

export const SideMenu = ( {loadCategory, category} ) => {
    const Links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
    return(
      <div className="col-sm-2 list">
        <ul>
          { Links.map((link, index) => {
            return(<Link to="/" className='link'><li key={index} className={category === index && 'active'} onClick={ () => loadCategory(index)}>{ link }</li></Link>)
          }) }
        </ul>
      </div>
    );
  }

export const List = props => {
    const { data, addToCart, count } = props
    return(
        <div className="row">
            {data.map(item => <Card key={item.ref} item={ item } addToCart={addToCart} count={count}/>)}
        </div>
    );
}

export const Card = props => {
    const { item, addToCart, count } = props
    return(
        <div className="col-sm-4">
            <div className="card">
                <img
                    width="170"
                    height="170"
                    src= { `assets/${item.category}/${item.image}` }
                    alt={ item.name }
                />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>{ item.name }</h4>
                        </div>
                        <div className="col-sm-6">
                            <p>
                                €{item.price}/{item.unit}
                            </p>
                            <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target={`#${item.ref}`}>Voir produit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal item={item} addToCart={addToCart} count={count}/>
        </div>
    );
}

export const Modal = ({ item, count, addToCart }) => {
    const [qty, setQty] = useState(1);
    return(
        <div
            className="modal fade"
            id={item.ref}
            data-backdrop = "static"
            tabindex="-1"
            role="dialog"
            aria-aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
                        <button 
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>   
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    width="170"
                                    height="170"
                                    src= { `assets/${item.category}/${item.image}` }
                                    alt={ item.name }
                                />
                            </div>
                            <div className="col-sm">
                                <p className="lead">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>       
                                <h3 className="price">€{item.price}/{item.unit}</h3><br/>
                                <div 
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={()=>setQty(qty > 1 ? qty-1 : 1)}
                                    >
                                    -
                                    </button>
                                    <span className="btn btn-light qty">{qty}</span>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={()=>setQty(qty+1)}
                                    >
                                    +
                                    </button>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fermer
                        </button>
                        <button 
                            type="button"
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                            onClick={()=>addToCart(count+1)}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>   
            </div>
        </div>
    );
}