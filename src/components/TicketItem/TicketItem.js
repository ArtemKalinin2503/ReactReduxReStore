import React, {Component} from "react";

//Компонень с даннми о билете
class TicketItem extends Component {
    render() {
        return (
            <div className="ticketItem_wrapper">
                <ul className="ticketItem__list">
                    <li className="ticketItem__item">
                        <p className="ticketItem__item">
                            Стоимость перелета: {this.props.price}
                        </p>
                        <p className="ticketItem__item">
                            Пункт отправления: {this.props.departure}
                        </p>
                        <p className="ticketItem__item">
                            Пункт назначения: {this.props.destination}
                        </p>
                        <p className="ticketItem__item">
                            Дата отправления: {this.props.departData}
                        </p>
                        <p className="ticketItem__item">
                            Дата возвращения: {this.props.returnData}
                        </p>
                        <p className="ticketItem__item">
                            Кто продает: <a href={`http://www.${this.props.gate}`}>{this.props.gate}</a>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TicketItem