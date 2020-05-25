import React, {Component} from "react";
import TicketList from "../../components/TicketList/TicketList";
import ShoppingCartTable from "../../components/ShoppingCartTable/ShoppingCartTable";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage__wrapper">
                <TicketList/>
                <ShoppingCartTable/>
            </div>
        )
    }
}

export default HomePage