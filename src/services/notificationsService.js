import { supabase } from "../lib/supabase";

export const getNotifications = async (user) => {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return {
    data,
    error,
  };
};

export const readAllNotifications = async (user) => {
  return await supabase
    .from("notifications")
    .update({ is_read: true })
    .eq("user_id", user.id);
};

export const readNotification = async (id) => {
  return await supabase
    .from("notifications")
    .update({ is_read: true })
    .eq("id", id);
};
