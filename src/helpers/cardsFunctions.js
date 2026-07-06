import { toast } from "react-toastify";
import { addCard, removeCard } from "../services/cardServices";

export const handleOpen = (setOpenPortal) => {
  setOpenPortal(true);
};

export const handleClose = (setOpenPortal) => {
  setOpenPortal(false);
};

export const handleSubmitAddCard = async (form, user, setCards) => {
  const { data, error } = await addCard({ ...form, user_id: user?.id });

  if (error) {
    toast.error(error.message);
    return;
  }

  setCards((prev) => [...prev, data]);
  toast.success("Card Added");
};

export const handleRemove = async (id, setCards) => {
  const { error } = await removeCard(id);

  if (error) {
    toast.error(error.message);
    return;
  }

  setCards((prev) => prev.filter((p) => p.id !== id));
  toast.success("Card Removed Successfully");
};

export const handleOverlayClick = (e) => {
  if (e.target === e.currentTarget) handleClose();
};
