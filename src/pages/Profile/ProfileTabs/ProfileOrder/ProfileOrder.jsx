/* eslint-disable react-hooks/refs */
import OrdersList from "./OrdersList/OrdersList";

import "./ProfileOrder.css";

import AuthContext from "../../../../context/AuthContext";
import { useContext, useRef, useState } from "react";
import ProfileContext from "../../../../context/ProfileContext";
import { createPortal } from "react-dom";
import OrderView from "./OrderView/OrderView";
import useOrders from "../../../../hooks/useOrders";
import useOverlayPortal from "../../../../hooks/useOverlayPortal";
import { handleOverlayClick } from "../../../../helpers/orderFunctions";

export default function ProfileOrder() {
  const { user } = useContext(AuthContext);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { orders, loading } = useOrders(user);

  const order = orders.find((o) => o.id === selectedOrder);

  const portalEl = useRef(document.querySelector(".portal-order-view"));

  const { openPortal, setOpenPortal } = useOverlayPortal(portalEl);

  return (
    <>
      <title>Orders</title>
      {loading ? (
        <p style={{ width: "100%", textAlign: "center" }}>Loading...</p>
      ) : (
        <OrdersList
          orders={orders}
          setOpenOrderView={setOpenPortal}
          setSelectedOrder={setSelectedOrder}
        />
      )}
      {openPortal &&
        createPortal(
          <div
            className="portal-overlay"
            onClick={(e) => handleOverlayClick(e)}
          >
            <OrderView
              order={order}
              setOpenOrderView={setOpenPortal}
              setSelectedOrder={setSelectedOrder}
            />
          </div>,
          portalEl.current,
        )}
    </>
  );
}
