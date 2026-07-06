import { toast } from "react-toastify";
import { getCart, updateQuantity } from "../services/cartServices";

export const handleIncrement = async (cartItem, user, setCartItems) => {
  await updateQuantity("increment", cartItem, user.id);

  const { data, error } = await getCart(user.id);

  if (error) {
    toast.error(error.message);
    return;
  }

  setCartItems(data);
};

export const handleDecrement = async (cartItem, user, setCartItems) => {
  const { data: updateData } = await updateQuantity(
    "decrement",
    cartItem,
    user.id,
  );

  if (updateData.quantity === 0) {
    await handleRemove(user, cartItem, setCartItems);
  }

  const { data, error } = await getCart(user.id);

  if (error) {
    console.log(error.message);
    return;
  }

  setCartItems(data);
};