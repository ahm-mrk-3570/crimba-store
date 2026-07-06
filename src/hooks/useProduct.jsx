import { useEffect, useState } from "react";
import { getProduct } from "../services/productServices";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const { data, error } = await getProduct(productId);
      if (error) return;

      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
    loading
  }
};

export default useProduct;
