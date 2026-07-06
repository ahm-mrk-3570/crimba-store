import { supabase } from "../lib/supabase";

export const getAllCards = async (user) => {
  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("user_id", user.id);

  if (error) return;

  return { data, error };
};

export const addCard = async (card) => {
  const { data, error } = await supabase
    .from("cards")
    .insert(card)
    .select()
    .single();

  if (error) return;

  return { data, error };
}

export const removeCard = async (cardId) => {
  const { error } = await supabase
    .from("cards")
    .delete()
    .eq("id", cardId);

  if(error) return;

  return { error };
};
