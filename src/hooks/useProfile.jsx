import { useEffect, useState } from "react";
import { getProfile } from "../services/profileServices";
import { toast } from "react-toastify";

const useProfile = (user) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      try {
        const { data, error } = await getProfile(user);

        if (error) return;

        if (!data) {
          console.log("No profile found for user:", user.id);
          return;
        }

        setProfile(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  return {
    profile,
    loading
  }
};

export default useProfile;
