import React, {Component} from "react";
import {addTickets} from "../../actions";
import {connect} from "react-redux";
import TicketItem from "../TicketItem/TicketItem";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/Error-indicator";

//Компонент с выводом списка билетов
class TicketList extends Component {

    componentDidMount() {
        this.props.onAddTickets(); //Вызов action (thunk) который получит данные
    }

    renderTicketsItem() {
        //Если произошла ошибка вызываем компонет ErrorIndicator
        if(this.props.propsError) {
            return <ErrorIndicator/>
        }
        //Когда данные пришли
        if (this.props.propsTickets.length) {
            return (
                <div>
                    {this.props.propsTickets[0].data.map((item, index) => {
                        return (
                            <div className="ticket__item">
                                <TicketItem
                                    key={index}
                                    id={index}
                                    price={item.value}
                                    departure={item.origin}
                                    destination={item.destination}
                                    departData={item.depart_date}
                                    returnData={item.return_date}
                                    gate={item.gate}
                                />
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return <Spinner/> //Если данных нет покажим компонент Preloader
        }
    }

    render() {
        return (
            <div className="ticketList__wrapper">
                {this.renderTicketsItem()}
            </div>
        )
    }
}

//Здеь получаем state из reducer (который передан в store)
function mapStateToProps(state) {
    return {
        propsTickets: state.ticketReducer.tickets,
        propsError: state.ticketReducer.error
    }
}

//Здесь получаем action
function mapDispatchToProps(dispatch) {
    return {
        onAddTickets: () => dispatch(addTickets()) //Получили action addTickets и записали его в props onAddTickets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)