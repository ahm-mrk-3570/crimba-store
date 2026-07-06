import { useContext, useEffect, useState } from "react";
import { getProductReviews } from "../services/reviewServices";
import GlobalContext from "../context/Context";

const useProductReviews = (product) => {
  const [productReviews, setProductReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { reviews } = useContext(GlobalContext);

  useEffect(() => {
    if (!product) return;
    const fetchReviews = async () => {
      const { data, error } = await getProductReviews(product.id);

      if (error) return;

      setProductReviews(data);
      setLoading(false);
    };

    fetchReviews();
  }, [product, reviews]);

  return {
    productReviews,
    loading
  }
};

export default useProductReviews;
