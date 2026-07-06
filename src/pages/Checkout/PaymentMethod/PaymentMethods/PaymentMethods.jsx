/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import "./PaymentMethods.css";
import GlobalContext from "../../../../context/Context";
import PaymentCardContainer from "./PaymentCardContainer/PaymentCardContainer";
import CheckoutContext from "../../../../context/CheckoutContext";
import { toast } from "react-toastify";
import AuthContext from "../../../../context/AuthContext";
import useCards from "../../../../hooks/useCards";
import { handleSubmitCard } from '../../../../helpers/submitAddCard';

const _form = {
  card_type: "",
  card_name: "",
  card_number: "",
};

export default function PaymentMethods({ setStep }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [noneStyle, setNoneStyle] = useState(false);
  const [card, setCard] = useState(null);
  const [form, setForm] = useState(_form);
  const [errors, setErrors] = useState({});

  const { setCards } = useContext(GlobalContext);
  const { user } = useContext(AuthContext);
  const { cards } = useCards(user);
  const { checkoutData, setCheckoutData } = useContext(CheckoutContext);

  useEffect(() => {
    if (!cards) return;
    if (cards.length % 2 === 0) {
      setNoneStyle(true);
    } else {
      setNoneStyle(false);
    }
  }, [cards]);

  useEffect(() => {
    if (!checkoutData) return;

    if (paymentMethod !== "card") {
      setCheckoutData((prev) => ({
        ...prev,
        cardId: null,
        shippingMethod: paymentMethod,
      }));
    } else {
      setCheckoutData((prev) => ({
        ...prev,
        cardId: card,
        shippingMethod: paymentMethod,
      }));
    }
  }, [card, paymentMethod]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="payment-methods-main">
      <h3>Select Payment Method</h3>
      <ul className="payment-methods">
        <li>
          <div className="payment-title">
            <input
              onChange={(e) => setPaymentMethod(e.target.checked && "card")}
              checked={paymentMethod === "card"}
              type="radio"
              id="payment-credit-card"
              name="payment-method"
            />
            <label htmlFor="payment-credit-card">Debit/Credit Card</label>
          </div>
          <div
            className="cards"
            style={{ display: paymentMethod === "card" ? "grid" : "none" }}
          >
            {cards &&
              cards.map((c) => {
                return (
                  <PaymentCardContainer
                    key={c.id}
                    card={c}
                    cardNumber={card}
                    setCard={setCard}
                  />
                );
              })}
            <div
              className={`card-container-payment card-none ${noneStyle === true && "column-2"}`}
            >
              <div>
                <label style={{ cursor: "pointer" }} htmlFor="none-payment">
                  None
                </label>
                <input
                  onChange={(e) => e.target.checked && setCard("")}
                  checked={card === ""}
                  type="radio"
                  id="none-payment"
                  name="card"
                />
              </div>
            </div>
          </div>
          <div
            className="payment-credit-body"
            style={{
              display:
                paymentMethod === "card"
                  ? card === ""
                    ? "flex"
                    : "none"
                  : "none",
            }}
          >
            <div className="card-detail-box">
              <label htmlFor="card_type">Card Type</label>
              <input
                type="text"
                id="card_type"
                name="card_type"
                placeholder="Enter your Card type"
                required
                value={form.card_type}
                onChange={handleChange}
              />
              {errors.card_type && (
                <span className="ap-error-msg">{errors.card_type}</span>
              )}
            </div>
            <div className="card-detail-box">
              <label htmlFor="card_name">Card Name</label>
              <input
                type="text"
                id="card_name"
                name="card_name"
                placeholder="Enter your Card name"
                required
                value={form.card_name}
                onChange={handleChange}
              />
              {errors.card_name && (
                <span className="ap-error-msg">{errors.card_name}</span>
              )}
            </div>
            <div className="card-detail-box">
              <label htmlFor="card_number">Card Number</label>
              <input
                type="text"
                id="card_number"
                name="card_number"
                placeholder="Enter your Card number"
                required
                value={form.card_number}
                onChange={handleChange}
              />
              {errors.card_number && (
                <span className="ap-error-msg">{errors.card_number}</span>
              )}
            </div>
            <div onClick={() => handleSubmitCard(form, setErrors, user, setCards, setCard)} className="add-card">
              Add Card
            </div>
          </div>
        </li>
        <li>
          <div className="payment-title">
            <input
              onChange={(e) =>
                setPaymentMethod(e.target.checked && "google play")
              }
              checked={paymentMethod === "google play"}
              type="radio"
              id="payment-google-play"
              name="payment-method"
            />
            <label htmlFor="payment-google-play">Google Play</label>
          </div>
        </li>
        <li>
          <div className="payment-title">
            <input
              onChange={(e) => setPaymentMethod(e.target.checked && "paypal")}
              checked={paymentMethod === "paypal"}
              type="radio"
              id="payment-paypal"
              name="payment-method"
            />
            <label htmlFor="payment-paypal">PayPal</label>
          </div>
        </li>
        <li>
          <div className="payment-title">
            <input
              onChange={(e) => setPaymentMethod(e.target.checked && "cash")}
              checked={paymentMethod === "cash"}
              type="radio"
              id="payment-cash"
              name="payment-method"
            />
            <label htmlFor="payment-cash">Cash on delivery</label>
          </div>
        </li>
      </ul>

      <div
        className="add-card proccessed"
        onClick={() => {
          if (paymentMethod !== "card") {
            setStep(3);
          } else if (paymentMethod === "card" && card !== "" && card) {
            setStep(3);
          } else {
            toast.error("Select Payment Method");
          }
        }}
      >
        Continue
      </div>
    </div>
  );
}
