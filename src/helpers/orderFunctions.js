export const handleOpen = (orderId, setSelectedOrder, setOpenOrderView) => {
  setSelectedOrder(orderId);
  setOpenOrderView(true);
};

export const handleClose = (setOpenOrderView, setSelectedOrder) => {
  setOpenOrderView(false);
  setSelectedOrder(null);
};

export const handleOverlayClick = (e) => {
  if (e.target === e.currentTarget) handleClose();
};
