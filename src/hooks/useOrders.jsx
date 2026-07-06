import { useContext, useEffect, useState } from "react";
import { getOrders } from "../services/orderServices";
import GlobalContext from "../context/Context";

const useOrders = (user) => {
  const [loading, setLoading] = useState(true);
  const { orders, setOrders } = useContext(GlobalContext);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const { data, error } = await getOrders(user.id);

      if (error) {
        console.log(error);
        return;
      }

      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, [user]);

  return {
    orders,
    loading,
    setOrders
  }
};

export default useOrders;
