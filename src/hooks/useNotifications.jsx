import { useEffect, useState } from "react";
import { getNotifications } from '../services/notificationsService';

const useNotifications = (user) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!user) return;

    const fetch = async () => {
      const { data, error } = await getNotifications(user);

      if(error) return;

      setNotifications(data || []);
      setLoading(false);
    };

    fetch();
  }, [user]);

  return {
    notifications,
    setNotifications,
    loading
  }
};

export default useNotifications;
