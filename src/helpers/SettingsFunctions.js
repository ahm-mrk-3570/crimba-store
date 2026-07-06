import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { resetPassword, signOut } from "../services/AuthServices";

export const saveSettings = async (updated, setSaving) => {
  setSaving(true);
  const { error } = await supabase.auth.updateUser({ data: updated });
  setSaving(false);
  if (error) toast.error("Failed to save settings");
};

export const handleToggle = async (key, settings, setSettings) => {
  const updated = { ...settings, [key]: !settings[key] };
  setSettings(updated);
  await saveSettings(updated);
};

export const handleChangePassword = async (user) => {
  if (!user?.email) return;
  const { error } = await resetPassword(user.email);
  if (error) toast.error(error.message);
  else toast.success("Password reset link sent to your email");
};

export const logout = async (setUser, navigate) => {
  const { error } = await signOut();

  if (error) {
    toast.error(error.message);
    return;
  }

  localStorage.removeItem("checkout");
  setUser(null);
  navigate("/login");
};