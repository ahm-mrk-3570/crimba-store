import { useContext } from "react";
import AuthContext from "../../../../../context/AuthContext";
import {
  handleDelete,
  handleSetDefault,
} from "../../../../../helpers/addressFunctions";
import "./AddressCard.css";
import useAddresses from "../../../../../hooks/useAddresses";

const EditIcon = () => (
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
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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

const PinIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

export default function AddressCard({ address, onEdit }) {
  const isDefault = address.is_default;

  const { user } = useContext(AuthContext);
  const { setAddresses } = useAddresses(user);

  const formattedAddress = [
    address.address,
    address.city,
    address.state,
    address.postal_code,
    address.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className={`addr-card ${isDefault ? "addr-card--default" : ""}`}>
      {isDefault && <div className="addr-card__stripe" />}

      <div className="addr-card__body">
        <div className="addr-card__top">
          <div className="addr-card__name-row">
            <span className="addr-card__pin">
              <PinIcon />
            </span>
            <span className="addr-card__name">{address.full_name}</span>
            {isDefault && (
              <span className="addr-card__badge">
                <StarIcon />
                Default
              </span>
            )}
          </div>

          <div className="addr-card__actions">
            <button
              className="addr-card__btn addr-card__btn--edit"
              onClick={() => onEdit(address)}
            >
              <EditIcon />
              Edit
            </button>
            <button
              className="addr-card__btn addr-card__btn--delete"
              onClick={() => handleDelete(address.id, setAddresses)}
            >
              <TrashIcon />
              Delete
            </button>
          </div>
        </div>

        <p className="addr-card__address">{formattedAddress}</p>

        {!isDefault && (
          <button
            className="addr-card__set-default"
            onClick={() => handleSetDefault(address.id, user, setAddresses)}
          >
            Set as default address
          </button>
        )}
      </div>
    </div>
  );
}
