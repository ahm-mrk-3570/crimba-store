import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const useProducts = (page = 1) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  /* SearchParams */
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const size = searchParams.get("size");
  const color = searchParams.get("colors");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  /* SearchParams */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, totalPages } = await getProducts({ category, size, color, page, minPrice, maxPrice });

        setProducts(data);
        setTotalPages(totalPages);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        toast.error("Something went wrong....");
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, size, color, page, minPrice, maxPrice]);

  return {
    products,
    totalPages,
    loading,
    setLoading
  };
};

export default useProducts;
