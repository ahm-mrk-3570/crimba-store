import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { updateEmail, updateProfile } from "../services/profileServices";

export const handleChangeData = async (values, userData) => {
  try {
    const { error: profileError } = await updateProfile(values, userData);

    if (profileError) return;

    if (values.email !== userData.email) {
      const { error: emailError } = await updateEmail(values);

      if (emailError) return;
    }

    await supabase.auth.refreshSession();

    toast.success("Profile Updated Successfully");
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};
