import { supabase } from "../lib/supabase";

export const getProfile = async (user) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.log(error);
    return;
  }

  return { data, error };
};

export const updateProfile = async (values, userData) => {
  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: values.phone_number,
    })
    .eq("id", userData.id);

  if (error) return;

  return { error };
};

export const updateEmail = async (values) => {
  const { error } = await supabase.auth.updateUser({
    email: values.email,
  });

  if (error) return;

  return { error };
};

export const updateAvatar = async (userId, avatarUrl) => {
  const { error } = await supabase
    .from("profiles")
    .update({ avatar: avatarUrl })
    .eq("id", userId);

  if (error) throw error;
};
