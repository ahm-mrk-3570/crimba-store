/* eslint-disable react-hooks/refs */
import RoadCheckout from "../RoadCheckout/RoadCheckout";
import PastAddress from "./PastAddress/PastAddress";
import AddAddress from "./AddAddress/AddAddress";
import "./ShippingAddress.css";
import NoneAddress from "./NoneAddress/NoneAddress";
import { useContext, useRef, useState } from "react";
import GlobalContext from "../../../context/Context";
import CheckoutContext from "../../../context/CheckoutContext";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import AddressPortal from "../../Profile/ProfileTabs/ProfileAddresses/AddressPortal/AddressPortal";
import AuthContext from "../../../context/AuthContext";
import useAddresses from "../../../hooks/useAddresses";
import useOverlayPortal from '../../../hooks/useOverlayPortal';
import { handleOverlayClick } from "../../../helpers/addressFunctions";

export default function ShippingAddress({ step, setStep }) {
  const [addressId, setAddressId] = useState(null);
  const [editAddress, setEditAddress] = useState(null);
  const { user } = useContext(AuthContext);
  const { addresses } = useAddresses(user);
  const { setCheckoutData } = useContext(CheckoutContext);

  const portalEl = useRef(document.querySelector(".portal-address-view"));
  const { openPortal, setOpenPortal } = useOverlayPortal(portalEl);

  return (
    <div
      style={{ display: step === 1 ? "flex" : "none" }}
      className="shipping-address"
    >
      <h4>Shipping Address</h4>
      <div className="shipping-main">
        <RoadCheckout step="home" setStep={setStep} />
        <div className="past-addresses-checkout">
          <div className="description-checkout">
            <h5>Select a delivery address</h5>
            <p>
              Is the address you'd like to use displayed below?
              <br />If so, click the
              corresponding "Deliver to this address" button. Or you can enter a
              new delivery address.
            </p>
          </div>
          <div className="past-address-contaoiner">
            {addresses &&
              addresses.map((address, i) => {
                return (
                  <PastAddress
                    address={address}
                    setAddressId={setAddressId}
                    addressId={addressId}
                    setEditAddress={setEditAddress}
                    setOpenPortal={setOpenPortal}
                  />
                );
              })}
            <NoneAddress addressId={addressId} setAddressId={setAddressId} />
          </div>
          <button className="deliver-here"
            onClick={() => {
              if (addressId !== "" && addressId !== null) {
                setCheckoutData((prev) => ({ ...prev, addressId }));
                setStep(2);
              } else {
                toast.error("Please Select an address")
              }
            }}
          >
            Deliver Here
          </button>
        </div>
        {addressId === "" ? <AddAddress /> : null}
      </div>
      {createPortal(
        openPortal ? (
          <div className="portal-overlay" onClick={(e) => handleOverlayClick(e, setOpenPortal, setEditAddress)}>
            <AddressPortal
              editAddress={editAddress}
              setEditAddress={setEditAddress}
              setOpenPortal={setOpenPortal}
            />
          </div>
        ) : null,
        portalEl.current,
      )}
    </div>
  );
}
