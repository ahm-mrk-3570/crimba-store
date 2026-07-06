import { toast } from "react-toastify";
import { deleteAddress } from "../../../../services/addressServices";
import "./PastAddress.css";
import { useContext } from "react";
import GlobalContext from "../../../../context/Context";
import useAddresses from "../../../../hooks/useAddresses";
import AuthContext from "../../../../context/AuthContext";
import { handleDelete, handleOpenEdit } from "../../../../helpers/addressFunctions";

export default function PastAddress({
  address,
  addressId,
  setAddressId,
  setEditAddress,
  setOpenPortal
}) {
  const formattedAddress = [
    address.address,
    address.city,
    address.state,
    address.postal_code,
    address.country,
  ]
    .filter(Boolean)
    .join(", ");

  const { user } = useContext(AuthContext);
  const { setAddresses } = useAddresses(user);

  return (
    <div className="past-address">
      <div className="top-address">
        <label htmlFor={`address-${address.id}`}>
          <h4>{address.full_name}</h4>
        </label>
        <input
          onChange={() => setAddressId(address.id)}
          checked={addressId === address.id}
          type="radio"
          name="address-selector"
          id={`address-${address.id}`}
        />
      </div>
      <div className="middle-address">
        <p>{formattedAddress}</p>
      </div>
      <div className="bottom-address">
        <button onClick={() => handleOpenEdit(address, setEditAddress, setOpenPortal)}>
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
          Edit
        </button>
        <button onClick={() => handleDelete(address.id, setAddresses)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="red"
            className="bi bi-trash text-white"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
