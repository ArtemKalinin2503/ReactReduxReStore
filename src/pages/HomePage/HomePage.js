import React, {Component} from "react";
import TicketList from "../../components/TicketList/TicketList";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage__wrapper">
                <TicketList/>
            </div>
        )
    }
}

export default HomePage