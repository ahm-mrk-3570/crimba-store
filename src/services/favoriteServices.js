import { supabase } from "../lib/supabase";

export const getWishlists = async (userId) => {
  const { data, error } = await supabase
    .from("favorites")
    .select("*, products(*)")
    .eq("user_id", userId);

  if (error) return;
  return { data, error };
};

export const addToWishlists = async (favorite) => {
  const { data, error } = await supabase
    .from("favorites")
    .insert(favorite)
    .select()
    .single();

  return { data, error };
};

export const removeWishlist = async (favoriteId) => {
  return supabase.from("favorites").delete().eq("product_id", favoriteId);
};
