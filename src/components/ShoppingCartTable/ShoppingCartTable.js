import React, {Component} from "react";
import {connect} from "react-redux";

//Компонент таблица с выбранными билетами
class ShoppingCartTable extends Component {

    render() {
        return (
            <div className="shoppingCartTable__wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Пункт отправления</th>
                            <th>Пункт назначения</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.propsCartItems.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.departure}</td>
                                    <td>{item.destination}</td>
                                    <td>{item.count}</td>
                                    <td>{item.price} руб.</td>
                                    <td>
                                        <button className="btn btn-outline-danger">
                                            <i className="fa fa-trash-o"/>
                                        </button>
                                        <button className="btn btn-outline-success">
                                            <i className="fa fa-plus-circle"/>
                                        </button>
                                        <button className="btn btn-outline-warning">
                                            <i className="fa fa-minus-circle"/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    Total: 1100
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        propsCartItems: state.ticketReducer.cartItems
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)