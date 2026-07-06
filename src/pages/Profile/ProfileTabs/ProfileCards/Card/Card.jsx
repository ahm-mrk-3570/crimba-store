/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import "./Card.css";
import { chunking } from '../../../../../helpers/chunk';

const BankIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-bank"
    viewBox="0 0 16 16"
  >
    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const Card = ({ cardDetail, handleRemove, setCards }) => {
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    const card_number = chunking(cardDetail.card_number);
    setCardNumber(card_number);
  }, []);

  return (
    <div className="card-detail-profile">
      <div className="right-side-card-detail">
        <div className="name-card">
          <BankIcon />
          <h5>{cardDetail.card_name}</h5>
        </div>
        <p className="card-number-text">{cardNumber}</p>
      </div>
      <button onClick={() => handleRemove(cardDetail.id, setCards)} className="button-delete-card">
        <TrashIcon />
        Delete
      </button>
    </div>
  );
};

export default Card;
