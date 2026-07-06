/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { chunking } from '../../../../../helpers/chunk';

const PaymentCardContainer = ({ card, setCard, cardNumber : c }) => {
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    if (!card) return;

    const card_number = chunking(card.card_number);
    setCardNumber(card_number);
  }, [card]);

  return (
    <div className="card-container-payment">
      <div className="cart-title-name">
        <div>
          <input onChange={(e) => {e.target.checked && setCard(card.card_number)}} checked={card.card_number === c} type="radio" name="card" id={`card-${card.card_name}`} />
          <label htmlFor={`card-${card.card_name}`}>
            Card Name: <span>{card.card_name}</span>
          </label>
        </div>
        <p className="card-type-payment">{card.card_type}</p>
      </div>
      <p>{cardNumber}</p>
    </div>
  );
};

export default PaymentCardContainer;
