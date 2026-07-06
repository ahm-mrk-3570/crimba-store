import GlobalContext from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { getWishlists } from "../services/favoriteServices";

const useWishlists = (user) => {
  const { wishlists, setWishlists } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchWishlist = async () => {
      const { data, error } = await getWishlists(user.id);

      if (error) return;

      setWishlists(data);
      setLoading(false);
    };

    fetchWishlist();
  }, [user]);

  return {
    wishlists,
    setWishlists,
    loading,
  }
};

export default useWishlists;
