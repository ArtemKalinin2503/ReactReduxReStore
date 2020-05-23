import React, {Component} from "react";
import {connect} from "react-redux";
import {addTicketCart} from "../../actions";

//Компонень с даннми о билете
class TicketItem extends Component {

    //Кнопка купить билет
    onAddedToCart = () => {
        this.props.onAddTicketCart(this.props.id); //Передадим выбраный билет
    }

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
                        <button
                            className="btn btn-info add-to-cart"
                            onClick={this.onAddedToCart}
                        >
                            Add to cart
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

//Здесь импортируем actions
function mapDispatchToProps(dispatch, payload) {
    return {
        onAddTicketCart: () => dispatch(addTicketCart(payload)) //Получили action addTicketCart и записали его в props onAddTicketCart
    }
}

export default connect(mapDispatchToProps,mapDispatchToProps)(TicketItem)