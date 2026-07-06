import { toast } from "react-toastify";
import {
  addAddress,
  deleteAddress,
  setDefaultAddress,
  updateAddress,
} from "../services/addressServices";
import validate from "./validateEmpty";

export const handleSubmit = async (
  form,
  id,
  setAddresses,
  user,
  setOpenPortal,
  setEditAddress,
) => {
  if (id) {
    const { error } = await updateAddress(id, form);
    if (error) {
      toast.error("Failed to update address");
      return;
    }
    setAddresses((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...form } : a)),
    );
    toast.success("Address updated");
  } else {
    const { id, ...addressData } = form;

    const { data, error } = await addAddress({ ...addressData, user_id: user.id });
    if (error) {
      toast.error("Failed to add address");
      console.log(error.message);
      return;
    }
    setAddresses((prev) => [...prev, data]);
    toast.success("Address added");
  }

  handleClose(setOpenPortal, setEditAddress);
};

export const handleDelete = async (id, setAddresses) => {
  const { error } = await deleteAddress(id);
  if (error) {
    toast.error("Failed to delete address");
    return;
  }
  setAddresses((prev) => prev.filter((a) => a.id !== id));
  toast.success("Address removed");
};

export const handleSetDefault = async (id, user, setAddresses) => {
  const { error } = await setDefaultAddress(id, user.id);
  if (error) {
    toast.error("Failed to set default");
    return;
  }
  setAddresses((prev) => prev.map((a) => ({ ...a, is_default: a.id === id })));
  toast.success("Default address updated");
};

export const handleOpenAdd = (setEditAddress, setOpenPortal) => {
  setEditAddress(null);
  setOpenPortal(true);
};
export const handleOpenEdit = (address, setEditAddress, setOpenPortal) => {
  setEditAddress(address);
  setOpenPortal(true);
};
export const handleClose = (setOpenPortal, setEditAddress) => {
  setOpenPortal(false);
  setEditAddress(null);
};
export const handleOverlayClick = (e, setOpenPortal, setEditAddress) => {
  if (e.target === e.currentTarget) handleClose(setOpenPortal, setEditAddress);
};

export const handleSubmitAddAddress = async (
  form,
  setForm,
  user,
  setErrors,
  setAddresses,
) => {
  const errs = validate(form, [
    "full_name",
    "address",
    "city",
    "state",
    "country",
  ]);
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  const { data, error } = await addAddress({ ...form, user_id: user.id });
  if (form.is_default === true) {
    const { error } = await setDefaultAddress(data.id, user.id);
    if (error) {
      toast.error("Failed to set default");
      return;
    }
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, is_default: a.id === data.id })),
    );
    toast.success("Default address updated");
  }
  if (error) {
    toast.error("Failed to add address");
    return;
  }
  setAddresses((prev) => [...prev, data]);
  toast.success("Address added");
  setForm({
    full_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    is_default: false,
  });
};
