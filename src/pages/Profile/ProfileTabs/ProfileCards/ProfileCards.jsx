/* eslint-disable react-hooks/refs */
import { useContext, useRef } from "react";
import "./ProfileCards.css";
import Card from "./Card/Card";
import { createPortal } from "react-dom";
import PortalCard from "./PortalCard/PortalCard";
import GlobalContext from "../../../../context/Context";
import AuthContext from "../../../../context/AuthContext";
import useCards from "../../../../hooks/useCards";
import useOverlayPortal from "../../../../hooks/useOverlayPortal";
import { handleOpen, handleOverlayClick, handleRemove } from "../../../../helpers/cardsFunctions";

const PlusIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function ProfileCards() {
  const { user } = useContext(AuthContext);
  const { setCards } = useCards(user);
  const { cards } = useCards(user);

  const portalEl = useRef(document.querySelector(".portal-card-view"));
  const { openPortal, setOpenPortal } = useOverlayPortal(portalEl);

  return (
    <div className="profile-cards">
      <title>Cards</title>
      <div className="header-profile-cards">
        <div className="details-card-total">
          <h2>Manage Cards</h2>
          <p>{cards.length} cards saved</p>
        </div>
        <button
          onClick={() => handleOpen(setOpenPortal)}
          className="button-card-profile"
        >
          <PlusIcon />
          Add New
        </button>
      </div>
      {cards.length === 0 ? (
        <div className="no-card-container">
          <p>No Card Yet</p>
          <button
            onClick={() => handleOpen(setOpenPortal)}
            className="button-card-profile"
          >
            <PlusIcon />
            Add your first card
          </button>
        </div>
      ) : (
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              cardDetail={card}
              handleRemove={handleRemove}
              setCards={setCards}
            />
          ))}
        </div>
      )}

      {createPortal(
        openPortal ? (
          <div
            className="portal-overlay"
            onClick={(e) => handleOverlayClick(e)}
          >
            <PortalCard setOpenPortal={setOpenPortal} />
          </div>
        ) : null,
        portalEl.current,
      )}
    </div>
  );
}
