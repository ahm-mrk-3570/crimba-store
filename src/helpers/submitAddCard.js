import { toast } from "react-toastify";
import { addCard } from "../services/cardServices";
import validate from "./validateEmpty";

export const handleSubmitCard = async (form, setErrors, user, setCards, setCard) => {
  const err = validate(form, ["card_type", "card_name", "card_number"]);
  if (Object.keys(err).length) {
    setErrors(err);
    return;
  }

  const { data, error } = await addCard({ ...form, user_id: user?.id });

  if (error) {
    toast.error(error.message);
    return;
  }

  setCards((prev) => [...prev, data]);
  toast.success("Card Added");
  setCard(data.card_number);
};
