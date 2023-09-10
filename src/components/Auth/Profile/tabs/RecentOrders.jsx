// Sidebar.js
import React, { Component } from 'react';
import './stylesheets/Sidebar.css';

class RecentOrders extends Component {
  state = {
    recentOrders: [],
  };

  componentDidMount() {
    // Fetch recent orders data from an API or a local data source.
    // For demonstration purposes, we'll use a static array.
    const recentOrdersData = [
      { id: 1, customer: 'Customer 1', status: "Pending" },
      { id: 2, customer: 'Customer 2', status: "Pending"},
      { id: 3, customer: 'Customer 3', status: "Pending" },
    ];

    this.setState({ recentOrders: recentOrdersData });
  }

  render() {
    const { recentOrders } = this.state;

    return (
        <div className="recent-orders">
        <ul className="order-list">
          {recentOrders.map((order) => (
            <li key={order.id} className="order-item">
              <div className="order-details">
              <img src={`${process.env.PUBLIC_URL}/assets/images/default.png`}  alt="Profile" className="breeder-profile" />
                <span className="customer-name">{order.customer}</span>
                
                <span className="order-date">{order.date}</span>
              </div>
              <span className="order-status">{order.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecentOrders;