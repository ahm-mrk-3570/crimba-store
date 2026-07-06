import "./NoneAddress.css";

export default function NoneAddress({ addressId, setAddressId }) {
  return (
    <div className="none-address">
      <label htmlFor="address-none">
        <h4>None</h4>
      </label>
      <input
        onChange={() => setAddressId("")}
        checked={addressId === ""}
        type="radio"
        name="address-selector"
        id="address-none"
      />
    </div>
  );
}
