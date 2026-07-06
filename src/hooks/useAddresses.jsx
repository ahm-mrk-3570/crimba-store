import { useContext, useEffect } from "react";
import GlobalContext from "../context/Context";
import { getAddresses } from "../services/addressServices";
import { toast } from "react-toastify";

const useAddresses = (user) => {
  const { addresses, setAddresses } = useContext(GlobalContext);

  useEffect(() => {
    if (!user) return;

    const fetch = async () => {
      const { data, error } = await getAddresses(user.id);
      if (error) {
        toast.error("Failed to load addresses");
        return;
      }
      setAddresses(data || []);
    };

    fetch();
  }, [user]);

  return {
    addresses,
    setAddresses
  };
};

export default useAddresses;
