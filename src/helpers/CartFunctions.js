import { toast } from "react-toastify";
import { addToWishlists, removeWishlist } from "../services/favoriteServices";
import { addToCart, getCart, removeFromCart, updateQuantity } from "../services/cartServices";

export const handleAddToWishlists = async (id, user, setWishlists) => {
  if (!user) {
    toast.error("Login first...");
  }
  const { data, error } = await addToWishlists({
    product_id: id,
    user_id: user.id,
  });

  if (error) return;

  setWishlists((prev) => [...prev, data]);
  toast.success("Added Successfully");
};

export const handleRemoveFromWishlists = async (favoritesId, setWishlists) => {
  const { error } = await removeWishlist(favoritesId);
  if (error) {
    console.log(error.message);
    toast.error("Something went wrong..");
    return;
  }

  setWishlists((prev) =>
    prev.filter((item) => item.product_id !== favoritesId),
  );
  toast.success("Product deleted from your wishlists");
};

export const handleAddToCart = async (
  productSize,
  productColor,
  productId,
  user,
  cartItems,
  setCartItems,
  quantity = 1,
) => {
  if (!user) {
    toast.error("Please Login first.");
    return;
  }
  if (productSize === "") {
    toast.error("Please Enter Size..");
    return;
  }

  if (productColor === "") {
    toast.error("Please Enter Color..");
    return;
  }

  const isAvailable = cartItems.find((item) => item.product_id === productId);

  if (isAvailable) {
    await updateQuantity("increment", isAvailable, user.id, quantity);

    const { data, error } = await getCart(user.id);

    if (error) return;

    setCartItems(data);
    toast.success("Card Updated");
  } else {
    const cartItem = {
      user_id: user?.id,
      product_id: productId,
      quantity: quantity,
      selected_size: productSize,
      selected_color: productColor,
    };

    await addToCart(cartItem);

    const { data, error } = await getCart(user.id);

    if (error) return;

    setCartItems(data);
    toast.success("Product Added");
  }
};

export const handleRemove = async (user, cartItem, setCartItems) => {
  const { error } = await removeFromCart(user.id, cartItem.products.id);

  if (error) {
    console.log(error);
    return;
  }

  setCartItems((prev) =>
    prev.filter((item) => item.product_id !== cartItem.products.id),
  );
  toast.success("Item Removed");
};
