import { supabase } from "../lib/supabase";

export const getAddresses = async (userId) => {
  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("user_id", userId)
    .order("is_default", { ascending: false });

  return { data, error };
};

export const addAddress = async (address) => {
  const { data, error } = await supabase
    .from("addresses")
    .insert(address)
    .select()
    .single();

  return { data, error };
};

export const updateAddress = async (id, fields) => {
  const { error } = await supabase
    .from("addresses")
    .update(fields)
    .eq("id", id);

  return { error };
};

export const deleteAddress = async (id) => {
  const { error } = await supabase.from("addresses").delete().eq("id", id);

  return { error };
};

export const setDefaultAddress = async (id, userId) => {
  const { error: resetError } = await supabase
    .from("addresses")
    .update({ is_default: false })
    .eq("user_id", userId);

  if (resetError) return { error: resetError };

  const { error } = await supabase
    .from("addresses")
    .update({ is_default: true })
    .eq("id", id);

  return { error };
};
