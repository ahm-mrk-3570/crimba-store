import { useNavigate } from "react-router-dom";
import "./OrderConfirmed.css";

export default function OrderConfirmed() {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/orders");
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="order-confirmed">
      <div className="order-confirmed-img">
        <svg
          height={35}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
          <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
        </svg>
      </div>
      <div className="order-confirmed-texts">
        <h2>Your order is confirmed</h2>
        <p>
          Thanks for shopping! your order hasn't shipped yet, but we will send
          you and email when it done.
        </p>
      </div>
      <div className="order-confirmed-buttons">
        <button onClick={handleOrder}>View Order</button>
        <button onClick={handleBackHome}>Back to Home</button>
      </div>
    </div>
  );
}
