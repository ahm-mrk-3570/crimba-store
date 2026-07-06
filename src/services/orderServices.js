import { supabase } from "../lib/supabase";

export const CreateOrder = async (data) => {
  const { data: orderData, error } = await supabase
    .from("orders")
    .insert(data)
    .select()
    .single();

  return {
    data: orderData,
    error,
  };
};

export const addOrderItems = async (data) => {
  const { data: result, error } = await supabase
    .from("order_items")
    .insert(data)
    .select();

  return {
    data: result,
    error,
  };
};

export const getOrders = async (userId) => {
  const { data, error } = await supabase
    .from("orders")
    .select(
      `
            *,
            order_items (*)
          `,
    )
    .eq("user_id", userId).order("updated_at", { ascending : false })

  if (error) return;

  return { data, error };
};

export const cancelOrder = async (orderId) => {
  const { data, error } = await supabase
    .from("orders")
    .update({
      payment_status: "Cancelled",
      status: "Cancelled",
    })
    .eq("id", orderId)
    .select()
    .single();

  if (error) throw error;

  return data;
};