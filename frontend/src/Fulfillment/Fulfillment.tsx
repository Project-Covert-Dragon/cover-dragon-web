import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return(
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table2">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>PAID</th>
                            <th>PAID AT</th>
                            <th>DELIVERED</th>
                            <th>DELIVERED AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillment.map((fulfillment) => (
                            <tr key={fulfillment._id}>
                                <td>{fulfillment._id}</td>
                                <td>{fulfillment.createdAt}</td>
                                <td>{fulfillment.totalPrice}</td>
                                <td>{fulfillment.user.name}</td>
                                <td>{fulfillment.isPaid}</td>
                                <td>{fulfillment.paidAt}</td>
                                <td>{fulfillment.isShipped.toString()}</td>
                                <td>{fulfillment.deliveredDate}</td>
                            </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        </div>);
};

export default Fulfillment;