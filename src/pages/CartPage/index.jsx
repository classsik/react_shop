import React from "react";
import { useNavigate, useNavigation } from "react-router";
import { Link } from "react-router-dom";

import "./style.scss";

const CartPage = ({ cart, setCart, orders, setOrders }) => {
  const removeItem = (item) => {
    setCart(cart.filter((x) => x.product.id !== item.product.id));
  };

  const navigate = useNavigate();

  const getPrice = () => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }
    return price;
  };

  const makeOrder = () => {
    const id = orders.length === 0 ? 0 : orders.at(-1).id + 1;
    setOrders([
      ...orders,
      { title: `Order ${id + 1}`, id: id, price: getPrice() },
    ]);
    setCart([]);
    navigate("/orders");
  };

  return (
    <div className="cart">
      <div className="cart__inner">
        <Link to="/">На главную</Link>

        {cart.map((item) => {
          return (
            <div className="cart__item">
              <div>
                <h2>{item.product.title}</h2>
                <p>Кол-во: {item.quantity}</p>
                <p>Цена: {item.price} руб.</p>
              </div>
              <button
                className="cart__item-button"
                onClick={() => removeItem(item)}
              >
                X
              </button>
            </div>
          );
        })}
        {cart.length == 0 && <p>Корзина пуста</p>}
        {cart.length > 0 && (
          <button className="cart__make" onClick={makeOrder}>
            Make order
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
