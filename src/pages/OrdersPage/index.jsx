import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const OrdersPage = ({ orders }) => {
  return (
    <div className="orders">
      <div className="orders__inner">
        <Link to="/">На главную</Link>
        {orders.map((item) => {
          return (
            <div className="orders__item">
              <h2>{item.title}</h2>
              <p>{item.price} руб.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersPage;
