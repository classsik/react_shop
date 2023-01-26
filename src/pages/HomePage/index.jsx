import React from "react";
import "./style.scss";

const HomePage = ({ authState, products, setCart, cart }) => {
  const addToCart = (item) => {
    if (cart.find((x) => x.product.id === item.id) !== undefined) {
      const cartItem = cart.find((x) => x.product.id === item.id);
      let newCartItem = {
        ...cartItem,
        price: +cartItem.price + +item.price,
        quantity: +cartItem.quantity + 1,
      };
      setCart(
        cart.map((x) =>
          x.product.id === cartItem.product.id ? newCartItem : x
        )
      );
    } else {
      const cartItem = { product: item, quantity: 1, price: item.price };
      setCart([...cart, cartItem]);
    }
  };

  return (
    <div className="home">
      <div className="home__inner">
        {products.map((item) => {
          return (
            <div className="product" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price} руб.</p>
              {authState.authenticated && (
                <button onClick={() => addToCart(item)}>Add to cart</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
