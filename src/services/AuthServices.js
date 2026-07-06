import { supabase } from "../lib/supabase";

export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      },
    },
  });

  if (error) throw error;

  return { data, error };
};

export const signIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;

  return { error };
};

export const resetPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) throw error;

  return { error };
};

export const updatePassword = async (password) => {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.log(error);
    return;
  }

  return { error };
};

export const forgetPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo:
      "http://localhost:5173/react-ecommerce-project/enter-new-password/",
  });

  if (error) {
    console.log(error.message);
  }

  return { error };
};

export const getCurrentSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) return;

  return session;
};

export const subscribeToAuthChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback);
};
