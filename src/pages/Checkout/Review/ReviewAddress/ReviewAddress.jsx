import { useContext } from "react";
import "./ReviewAddress.css";
import CheckoutContext from "../../../../context/CheckoutContext";
import GlobalContext from "../../../../context/Context";

export default function ReviewAddress({ setStep }) {
  const { checkoutData } = useContext(CheckoutContext);
  const { addresses } = useContext(GlobalContext);

  const address = addresses.find((a) => a.id === checkoutData.addressId) || [];
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
    <div className="review-address">
      <h4>Shipping Address</h4>
      <div className="selected-address">
        <div className="detail-selected-address">
          <h3>{address.full_name}</h3>
          <p>{formattedAddress}</p>
        </div>
        <div className="edit-address" onClick={() => setStep(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
