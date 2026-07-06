import { supabase } from "../lib/supabase";

export const uploadAvatar = async (userId, avatar) => {
  const filePath = `avatars/${userId}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, avatar, { upsert: true });

  if (error) throw error;

  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return data.publicUrl;
};