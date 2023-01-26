import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";

import HomePage from "./pages/HomePage";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import OrdersPage from "./pages/OrdersPage";

import initProducts from "./products.json";

function App() {
  const [authState, setAuthState] = useState({
    authenticated: false,
  });
  const [products] = useState(initProducts);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header authState={authState} setAuthState={setAuthState} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                authState={authState}
                products={products}
                setCart={setCart}
                cart={cart}
              />
            }
          />
          <Route
            path="/register"
            element={<RegisterScreen setAuthState={setAuthState} />}
          />
          <Route
            path="/login"
            element={<LoginScreen setAuthState={setAuthState} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                setCart={setCart}
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
          <Route path="/orders" element={<OrdersPage orders={orders} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
