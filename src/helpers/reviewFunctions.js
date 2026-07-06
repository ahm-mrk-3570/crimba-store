import { toast } from "react-toastify";
import { createReview } from "../services/reviewServices";

export const handleCommitReview = async (values, resetForm, user, product, profile, setReviews, setRatingStar) => {
  if (!user) {
    toast.error("Login First....");
    return;
  }
  const { data, error } = await createReview(
    values,
    user.id,
    product.id,
    profile.avatar,
  );

  if (error) toast.error(error.message);

  setReviews((prev) => [...prev, data]);

  toast.success("Review Submitted");
  resetForm();
  setRatingStar(null);
};
