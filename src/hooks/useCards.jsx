import { useContext, useEffect } from "react";
import GlobalContext from "../context/Context";
import { getAllCards } from "../services/cardServices";

const useCards = (user) => {
  const { cards, setCards } = useContext(GlobalContext);

  useEffect(() => {
    if (!user) return;

    const fetchCards = async () => {
      const { data, error } = await getAllCards(user);

      if (error) return;

      setCards(data);
    };

    fetchCards();
  }, [user]);

  return {
    cards,
    setCards
  }
};

export default useCards;
