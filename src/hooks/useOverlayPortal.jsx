/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";

const useOverlayPortal = (portalEl) => {
  const [openPortal, setOpenPortal] = useState(false);

  useEffect(() => {
    if (!portalEl.current) return;
    portalEl.current.style.display = openPortal ? "flex" : "none";
    document.body.style.overflow = openPortal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openPortal]);

  return {
    openPortal,
    setOpenPortal
  }
};

export default useOverlayPortal;
