import { useContext } from "react";
import "./PaymentSummery.css";
import GlobalContext from "../../../context/Context";
import CheckoutContext from "../../../context/CheckoutContext";
import AuthContext from "../../../context/AuthContext";
import { CreateOrder } from "../../../services/orderServices";
import { useLocation, useNavigate } from "react-router-dom";
import handlePlaceOrder from "../../../helpers/placeOrder";

export default function PaymentSummery({ buttonText, setOpenPortal, step }) {
  const { totalPriceDiscount, totalPrice, cartItems, addresses } =
    useContext(GlobalContext);
  const { checkoutData } = useContext(CheckoutContext);
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const address = addresses?.find((a) => a.id === checkoutData.addressId);

  return (
    <div className="payment-summery-container">
      <div className="payment-summery">
        <div className="top-section-payment">
          <h3>Order Summery</h3>
          <div className="subtotal-price">
            <h5>Subtotal</h5>
            <h5>${totalPrice?.toFixed(2) || 0.0}</h5>
          </div>
          <div className="discount-size">
            <h5>Discount</h5>
            <h5>
              -${totalPriceDiscount > 0 ? totalPriceDiscount.toFixed(2) : 0}
            </h5>
          </div>
          <div className="delivery-fee">
            <h5>Delivery Fee</h5>
            <h5>$15.00</h5>
          </div>
        </div>
        <div className="bottom-section-payment">
          <div className="total-finally">
            <span>Total</span>
            <span>${(totalPrice - totalPriceDiscount + 15).toFixed(2)}</span>
          </div>
          <div className="promo-code">
            <div className="enter-promo-code">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 24 24"
              >
                <path d="M10.839,1.003l11.747,11.747-9.836,9.836L1.002,10.837V1.003h9.837M11.25,0l-.003.003H.002v11.245l-.002.002,12.75,12.75,11.25-11.25L11.25,0h0Z" />
                <rect x="2.315" y="2.315" width="3.505" height="3.505" />
              </svg>
              <input type="text" placeholder="Add promo code" />
            </div>
            <div className="apply-promo-code">Apply</div>
          </div>
          <button
            disabled={
              (location.pathname === "/checkout" && step !== 3) ||
              cartItems.length === 0
            }
            className="go-to-checkout"
            onClick={() =>
              location.pathname === "/cart" ? navigate("/checkout") : handlePlaceOrder(navigate, user, totalPriceDiscount, address, cartItems, setOpenPortal)
            }
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
