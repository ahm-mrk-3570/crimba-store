import { useContext } from "react";
import "./FloatCart.css";
import CartFloatItem from "./component/CartFloatItem";
import { Link, useNavigate } from "react-router-dom";

import GlobalContext from "../../context/Context";
import useCart from "../../hooks/useCart";
import AuthContext from "../../context/AuthContext";

export default function FloatCart({ isCartOpen }) {
  const navigate = useNavigate();

  const { totalPrice, totalPriceDiscount } = useContext(GlobalContext);
  const { user } = useContext(AuthContext);
  const { cartItems } = useCart(user);

  return (
    <div style={{ display: isCartOpen === true ? "flex" : "none" }} className="float-cart">
      <span>
        You have <span className="cart-count">{cartItems?.length}</span>{" "}
        {cartItems?.length === 1 ? "item" : "items"} in your cart
      </span>
      <ul className="cart-items-float">
        {cartItems &&
          cartItems.map((item) => (
            <CartFloatItem
              key={item?.id}
              cartItem={item}
              product={item?.products}
            />
          ))}
      </ul>
      <div className="subtotal-float">
        <h5>Subtotal</h5>
        <h5>${totalPrice - totalPriceDiscount}</h5>
      </div>
      <div className="buttons-float">
        <button onClick={() => navigate("/cart")} className="go-to-cart-float">
          View Cart
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className="go-to-checkout-float"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
