import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/Context";
import { getReviews } from "../services/reviewServices";

const useReviews = () => {
  const { reviews, setReviews } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await getReviews();

      if (error) return;

      setReviews(data);
      setLoading(false);
    };

    fetchReviews();
  }, [reviews]);

  return {
    reviews,
    loading
  }
};

export default useReviews;
