/* eslint-disable react-hooks/refs */
import { useContext, useRef, useState } from "react";
import AuthContext from "../../../../context/AuthContext";
import { createPortal } from "react-dom";
import "./ProfileAddresses.css";
import AddressPortal from "./AddressPortal/AddressPortal";
import AddressCard from "./AddressCard/AddressCard";
import GlobalContext from "../../../../context/Context";
import useAddresses from "../../../../hooks/useAddresses";
import useOverlayPortal from "../../../../hooks/useOverlayPortal";
import {
  handleOpenAdd,
  handleOpenEdit,
  handleOverlayClick,
} from "../../../../helpers/addressFunctions";

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

export default function ProfileAddresses() {
  const portalEl = useRef(document.querySelector(".portal-address-view"));

  const { user } = useContext(AuthContext);
  const { openPortal, setOpenPortal } = useOverlayPortal(portalEl);

  const [editAddress, setEditAddress] = useState(null);

  const { addresses } = useAddresses(user);

  return (
    <div className="manage-addr">
      <title>Addresses</title>
      <div className="manage-addr__header">
        <div>
          <h2 className="manage-addr__title">Manage Addresses</h2>
          <p className="manage-addr__subtitle">
            {addresses.length} address{addresses.length !== 1 ? "es" : ""} saved
          </p>
        </div>
        <button
          className="manage-addr__add-btn"
          onClick={() => handleOpenAdd(setEditAddress, setOpenPortal)}
        >
          <PlusIcon />
          Add New
        </button>
      </div>

      <div className="manage-addr__list">
        {addresses.length === 0 ? (
          <div className="manage-addr__empty">
            <p>No addresses yet</p>
            <button
              className="manage-addr__add-btn"
              onClick={() => handleOpenAdd(setEditAddress, setOpenPortal)}
            >
              <PlusIcon /> Add your first address
            </button>
          </div>
        ) : (
          addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              onEdit={() =>
                handleOpenEdit(address, setEditAddress, setOpenPortal)
              }
            />
          ))
        )}
      </div>

      {createPortal(
        openPortal ? (
          <div
            className="portal-overlay"
            onClick={(e) => handleOverlayClick(e, setOpenPortal, setEditAddress)}
          >
            <AddressPortal
              setEditAddress={setEditAddress}
              setOpenPortal={setOpenPortal}
              editAddress={editAddress}
            />
          </div>
        ) : null,
        portalEl.current,
      )}
    </div>
  );
}
