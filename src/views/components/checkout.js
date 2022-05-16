import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfilContext } from "../../lib/userProfilContext";

export const Checkout = () => {
    const [isValid, setIsValid] = useState(false);
    const value = useContext(UserProfilContext);
    const {
        firstName,
        lastName,
        email,
        address,
        zipCode,
        city,
        setUserProfilContext
    } = value
    const validate = ()=> {
        let errors = [];
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            !input.value ? errors.push(input) : errors.length && errors.pop();
        })
        setIsValid(!errors.length);
    }

    useEffect(()=>{
        validate();
    })

    return(
        <Fragment>
            <br/>
            <div className="col-sm-6 offset-3">
                <h2>Checkout</h2>
                <br/>
                <form>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="first name"
                                property=""
                                name="firstName"
                                defaultValue={firstName}
                                onChange={e =>{
                                        setUserProfilContext({[e.target.name]: e.target.value})
                                    }
                                }
                            />
                        </div>
                        <br/>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="last name"
                                property=""
                                name="lastName"
                                defaultValue={lastName}
                                onChange={e =>{
                                    setUserProfilContext({[e.target.name]: e.target.value})
                                    }
                                }
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                                property=""
                                name="email"
                                defaultValue={email}
                                onChange={e =>{
                                    setUserProfilContext({[e.target.name]: e.target.value})
                                    }
                                }
                            />
                        </div>
                    </div>
                    <br/>
                    <p className="text">
                        we'll never share your email with anyone else.
                    </p>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                property=""
                                name="address"
                                defaultValue={address}
                                onChange={e =>{
                                    setUserProfilContext({[e.target.name]: e.target.value})
                                    }
                                }
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Postal code"
                                property=""
                                name="zipCode"
                                defaultValue={zipCode}
                                onChange={e =>{
                                    setUserProfilContext({[e.target.name]: e.target.value})
                                    }
                                }
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                property=""
                                name="city"
                                defaultValue={city}
                                onChange={e =>{
                                    setUserProfilContext({[e.target.name]: e.target.value})
                                    }
                                }
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <Link to="/delivery" className={`${!isValid && 'disabled'} link btn btn-lg btn-crimson`}>
                                Confirm
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}