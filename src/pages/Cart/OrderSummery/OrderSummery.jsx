import OrderProduct from "./OrderProduct/OrderProduct";
import "./OrderSummery.css";
import GlobalContext from "../../../context/Context";
import AuthContext from "../../../context/AuthContext";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";

export default function OrderSummery() {
  const { user } = useContext(AuthContext);
  const { cartItems, loading } = useCart(user);

  return (
    <div className="order-summery-container">
      <div className="order-summery">
        {!loading ? (
          cartItems &&
          cartItems.map((item, i) => {
            return <OrderProduct key={i} cartItem={item} />;
          })
        ) : (
          <>Loading</>
        )}
      </div>
    </div>
  );
}
