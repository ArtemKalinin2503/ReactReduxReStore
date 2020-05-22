import React, {Component} from "react";
import {Link} from "react-router-dom";

class HearderShop extends Component {
    render() {
        return (
            <div className="headerShop__wrapper">
                <Link className="logo text-dark" to="/">ReStoreTickets</Link>
                <Link to="/cart">
                    <div>
                        <i className="cart-icon fa fa-shopping-cart"/>
                        5 items ($210)
                    </div>
                </Link>
            </div>
        )
    }

}

export default HearderShop