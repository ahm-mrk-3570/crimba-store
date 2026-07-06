import { supabase } from "../lib/supabase";

export const getReviews = async () => {
  const { data, error } = await supabase.from("reviews").select("*");

  return { data, error };
};

export const getProductReviews = async (productId) => {
  const { data, error } = await supabase
    .from("reviews")
    .select(
      `
        *,
        profiles (
          first_name,
          last_name,
          avatar
        )
      `,
    )
    .eq("product_id", productId);

  return { data, error };
};

export const createReview = async (detail, userId, productId, avatar) => {
  const { data, error } = await supabase
    .from("reviews")
    .insert({
      name : detail.name,
      email : detail.email,
      review : detail.review,
      rating : detail.rating,
      user_id: userId,
      product_id: productId,
      avatar: avatar,
    })
    .select(
      `
          *,
          profiles (
            first_name,
            last_name,
            avatar
          )
        `,
    )
    .single();

  if (error) return;

  return { data, error };
};

// updateReview()

// deleteReview()
