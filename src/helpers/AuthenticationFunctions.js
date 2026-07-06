import { toast } from "react-toastify";
import {
  forgetPassword,
  signIn,
  signUp,
  updatePassword,
} from "../services/AuthServices";
import { uploadAvatar } from "../services/uploadServices";
import { updateAvatar } from "../services/profileServices";

export const handleLogin = async ({ email, password }, navigate) => {
  try {
    const { data, error } = await signIn({ email, password });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login Successfully..");
    navigate("/");
    return data;
  } catch (err) {
    console.log(err.message);
    toast.error(err.message || "Something went wrong..");
  }
};

export const handleSendForgetPassword = async (values) => {
  const { error } = await forgetPassword(values.email);

  if (error) {
    console.log(error.message);
    return;
  }

  toast.success("Email Recovery sent");
};

export const handleUpdatePassword = async (values, navigate) => {
  const { error } = await updatePassword(values.password);

  if (error) {
    toast.error(error.message);
    return;
  }

  toast.success("Password updated..");
  navigate("/login");
};

export const handleRegister = async (
  { firstName, lastName, avatar, email, password, phoneNumber },
  navigate,
) => {
  const formData = { firstName, lastName, email, password, phoneNumber };
  try {
    const { data, error } = await signUp(formData);

    if (error) return;

    if (avatar && data.session) {
      const avatarUrl = await uploadAvatar(data.user.id, avatar);
      await updateAvatar(data.user.id, avatarUrl);
    } else if (avatar && !data.session) {
      console.log("Avatar skipped — email confirmation required first");
    }

    toast.success("Account created!");
    navigate("/login", { replace: true });
    return data;
  } catch (err) {
    console.log(err.message);
    toast.error(err.message || "Something went wrong..");
  }
};
