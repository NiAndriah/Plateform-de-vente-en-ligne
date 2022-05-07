import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateToCart } from "../../lib/actions";

const Row = props => {
    const {id, details, quantity} = props.item;
    const item = details;
    const [qty, setQty] = useState(quantity);
    const dispatch = useDispatch()
    const update = (item, quantity) => {
        dispatch(updateToCart(item, quantity))
    }
    const remove = (id) => {
        dispatch(removeFromCart(id));
    }
    return(
        <tr>
            <td>
                <img
                    width="50"
                    height="50" 
                    src={`assets/${item.category}/${item.image}`}
                    alt={item.name}
                />
            </td>
            <td>{item.ref}</td>
            <td>€{item.price}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={()=>{
                            setQty(qty>1? qty-1: qty);
                            update(item, qty);
                        }
                    }
                >
                -
                </button>
                <span className="btn btn-light">{qty}</span>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={()=>{
                            setQty(qty+1);
                            update(item, qty);
                        }
                    }
                >
                +
                </button>
            </td>
            <td>€{(quantity * item.price).toFixed(2)}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger remove"
                    onClick={()=>remove(id)}
                >
                    x
                </button>
            </td>
        </tr>
    );
}

const Table = ({ items }) => {
    return(
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="200">Reference</th>
                <th width="200">Price</th>
                <th width="200">Quantity</th>
                <th width="150">Total</th>
            </tr>
            {items.map(item=>
                <Row item={item}/>
            )}
        </table>
    );
}

export const CartPage = () => {
    const items = useSelector(state => state.items);
    const [subTotal, setSubTotal] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    const shipping = 10.00;
    useEffect(()=>{
        let totals = items.map(item => {
            return item.details.price * item.quantity;
        })
        setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
        setTotal(subTotal + shipping);
    })
    return(
        <Fragment>
            <body className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Table items={items}/>
                        </div>
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className="list-group-item">Order Summary</li>
                                <li className="list-group-item bg-light">
                                    <ul className="flex">
                                        <li className="text-left">SubTotal</li>
                                        <li className="text-right">€{subTotal.toFixed(2)}</li>
                                    </ul>
                                    <ul className="flex">
                                        <li className="text-left">Shipping</li>
                                        <li className="text-right">€{shipping.toFixed(2)}</li>
                                    </ul>
                                    <ul className="flex">
                                        <li className="coupon">
                                            <small>{'>>'}Add coupon code</small>
                                        </li>
                                    </ul>
                                    <ul className="flex">
                                        <li className="text-left">Total</li>
                                        <li className="text-right">€{total.toFixed(2)}</li>
                                    </ul>
                                    <button 
                                        type="button"
                                        className="checkButton"
                                        disabled="true"
                                        >
                                        <Link to="/cart" className="link white">
                                            Checkout
                                        </Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </body>
       </Fragment>
    );
}