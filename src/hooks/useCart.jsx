/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/Context";
import { getCart, getTotalPrice } from "../services/cartServices";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const useCart = (user) => {
  const { setTotalPrice, setTotalPriceDiscount, cartItems, setCartItems } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      const { data, error } = await getCart(user.id);

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      setCartItems(data);
      setLoading(false);
    };

    fetchCart();
  }, [user]);

  useEffect(() => {
    if (!user || !cartItems) return;

    const fetchCart = async () => {
      const { data: total_price, error: totalPriceErrors } =
        await getTotalPrice(user.id);

      if (totalPriceErrors) {
        setLoading(false);
        return;
      }

      setTotalPrice(total_price?.total_price ?? 0);
      setTotalPriceDiscount(total_price?.discount_total_price ?? 0);
      setLoading(false);
    };

    fetchCart();
  }, [cartItems]);

  return {
    cartItems,
    setCartItems,
    loading,
  };
};

export default useCart;
