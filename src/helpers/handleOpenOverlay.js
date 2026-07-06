export const handleClose = (setOpenPortal) => {
  setOpenPortal(false);
};

export const handleOverlayClick = (e, setOpenPortal) => {
  if (e.target === e.currentTarget) handleClose(setOpenPortal);
};
