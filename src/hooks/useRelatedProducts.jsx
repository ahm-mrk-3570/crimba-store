import { useEffect, useState } from "react";
import { getRelatedProducts } from "../services/productServices";

const useRelatedProducts = (product) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product) return;

    const fetchRelatedProducts = async () => {
      const { data, error } = await getRelatedProducts(product);

      if (error) return;

      const finallyData = data.filter(
        (p) => p.id !== product.id && p.count !== 0,
      );

      setRelatedProducts(finallyData);
      setLoading(false);
    };

    fetchRelatedProducts();
  }, [product]);

  return {
    relatedProducts,
    loading,
  }
};

export default useRelatedProducts;
