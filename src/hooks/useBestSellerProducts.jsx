import { useEffect, useState } from "react";
import { getProductsBestSeller } from "../services/productServices";
import { toast } from "react-toastify";

const useBestSellerProducts = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellerProducts = async () => {
      setLoading(true);
      try {
        const { data } = await getProductsBestSeller();
        setBestSellerProducts(data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
        toast.error("Something Went Wrong...");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellerProducts();
  }, []);

  return {
    bestSellerProducts,
    loading
  }
};

export default useBestSellerProducts;
