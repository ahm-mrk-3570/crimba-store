import { supabase } from "../lib/supabase";

export const getCart = async (userId) => {
  const { data, error } = await supabase
    .from("cart_items")
    .select(
      `
      *,
      products(*)
      `,
    )
    .eq("user_id", userId)
    .order("id", { ascending: true });

  return { data, error };
};

export const addToCart = async (values) => {
  const { data, error } = await supabase.from("cart_items").insert(values);

  if (error) return;

  return { data, error };
};

export const removeFromCart = async (userId, productId) => {
  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId);

  return {
    error,
  };
};

export const getTotalPrice = async (userId) => {
  const { data } = await supabase
    .from("cart_totals")
    .select("*")
    .eq("user_id", userId)
    .single();

  return { data };
};

export const updateQuantity = async (action, cartItem, userId, count = 1) => {
  const quantity = action === "increment" ? cartItem.quantity + count : cartItem.quantity - 1;

  const { data, error } = await supabase
    .from("cart_items")
    .update({ quantity })
    .eq("user_id", userId)
    .eq("id", cartItem.id)
    .select()
    .single();

  if (error) throw error;

  return { data, error };
};
