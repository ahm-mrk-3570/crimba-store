import { useContext, useState } from "react";
import FormField from "../../../../../components/FormField/FormField";
import "./PortalCard.css";
import { handleClose, handleSubmitAddCard } from "../../../../../helpers/cardsFunctions";
import AuthContext from "../../../../../context/AuthContext";
import useCards from "../../../../../hooks/useCards";
import validate from '../../../../../helpers/validateEmpty';
import { toast } from "react-toastify";

const BackIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M10 12L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const _form = {
  card_type: "",
  card_name: "",
  card_number: "",
};

export default function PortalCard({ setOpenPortal }) {
  const [form, setForm] = useState(_form);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const { setCards } = useCards(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if(form.card_number.length !== 16) {
      toast.error("You Card is incorrect.");
      return;
    }
    const err = validate(form, ["card_type", "card_name", "card_number"]);
    if(Object.keys(err).length) { setErrors(err); return; }
    setLoading(true);
    await handleSubmitAddCard(form, user, setCards);
    setLoading(false)
    handleClose(setOpenPortal);
  }

  return (
    <div className="card-add-portal" onClick={(e) => e.stopPropagation()}>
      <div className="header-card-add-portal">
        <button onClick={() => handleClose(setOpenPortal)}>
          <BackIcon />
          Back
        </button>
        <div className="card-portal-header-middle">
          <span>NEW ADDRESS</span>
          <span>Add a new card</span>
        </div>
        <div style={{ width: "64px" }}></div>
      </div>
      <div className="body-card-add-portal">
        <FormField
          label="Card Type"
          name="card_type"
          placeholder="Enter your Card type"
          required
          value={form.card_type}
          onChange={handleChange}
          error={errors.card_type}
        />
        <FormField
          label="Card Name"
          name="card_name"
          placeholder="Enter your Card name"
          required
          value={form.card_name}
          onChange={handleChange}
          error={errors.card_name}
        />
        <FormField
          label="Card Number"
          name="card_number"
          placeholder="Enter your Card number"
          required
          value={form.card_number}
          onChange={handleChange}
          error={errors.card_number}
        />
      </div>
      <div className="footer-card-add-portal">
        <button onClick={() => handleClose(setOpenPortal)} className="ap-btn-cancel">
          Cancel
        </button>
        <button onClick={handleSubmit} className="ap-btn-submit">{loading ? "Saving..." : "Add Card"}</button>
      </div>
    </div>
  );
}
