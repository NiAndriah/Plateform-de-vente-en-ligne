import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfilContext } from "../../lib/userProfilContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import { resetCart } from "../../lib/actions";
import { useDispatch } from "react-redux";

export const Confirm = ()=> {
    const userProfil = useContext(UserProfilContext);
    const dispatch = useDispatch()
    const reset = ()=> {
        dispatch(resetCart())
    }
    return(
        <Fragment>
            <div className="jumbotron text-center confirm">
                <h1 className="display-3">Thank you!</h1>
                <hr/>
                <p className="lead">
                    <strong>Your order is on its way to your home</strong>
                    <br/><br/>
                    <Link className="btn btn-primary btn-sm" to="/" onClick={()=>reset()}>
                        Continue to homepage
                    </Link>
                </p>
                <br/>
                {userProfil.address &&
                    <ul className="list">
                        <li>{(userProfil.lastName).toUpperCase()} {userProfil.firstName}</li>
                        <li>{userProfil.address}</li>
                        <li>{userProfil.zipCode}</li>
                        <li>{userProfil.city}</li>
                    </ul>
                }
            </div>
            <FontAwesomeIcon icon={faTruckArrowRight} className="col-sm-12 fa-3x iconTruck"></FontAwesomeIcon>
        </Fragment>
    );
}