/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";

const useDriverMenu = (portalEl) => {
  const [isDriverPortalOpen, setIsDriverPortalOpen] = useState(false);

  useEffect(() => {
    if (!portalEl.current) return;
    portalEl.current.style.display = isDriverPortalOpen ? "flex" : "none";
    document.body.style.overflow = isDriverPortalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDriverPortalOpen]);

  return {
    isDriverPortalOpen,
    setIsDriverPortalOpen,
  };
};

export default useDriverMenu;
