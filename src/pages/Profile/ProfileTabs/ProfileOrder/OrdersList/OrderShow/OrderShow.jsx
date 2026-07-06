/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import "./OrderShow.css";
import dayjs from "dayjs";
import ProfileContext from "../../../../../../context/ProfileContext";
import {
  cancelOrder,
  getOrders,
} from "../../../../../../services/orderServices";
import { toast } from "react-toastify";
import AuthContext from "../../../../../../context/AuthContext";
import GlobalContext from "../../../../../../context/Context";
import { handleOpen } from "../../../../../../helpers/orderFunctions";

const status_styles = {
  Delivered: { bg: "rgba(16,185,129,0.12)", color: "#10b981" },
  Processing: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24" },
  Shipped: { bg: "rgba(99,102,241,0.14)", color: "#818cf8" },
  Cancelled: { bg: "rgba(239,68,68,0.12)", color: "#ef4444" },
};

export default function OrderShow({ order, setOpenOrderView, setSelectedOrder }) {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const statusStyle = status_styles[order?.status] || status_styles.Processing;
  const orderId = order?.id.split("").slice(0, 13).join("");

  const { user } = useContext(AuthContext);
  const { setOrders } = useContext(GlobalContext);

  const handleCancell = async (orderId) => {
    try {
      const order = await cancelOrder(orderId);
      const { data, error } = await getOrders(user.id);

      if (error) {
        console.log(error);
        return;
      }

      setOrders(data);

      toast.success("Order cancelled.");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    switch (order.status) {
      case "Pending":
      case "Progressing":
        setPaymentStatus(["View", "Cancel"]);
        break;
      case "Shipped":
        setPaymentStatus(["View", "Track"]);
        break;

      case "Delivered":
        setPaymentStatus(["View", "Review"]);
        break;

      case "Cancelled":
        setPaymentStatus(["View", "Buy Again"]);
        break;

      case "Refunded":
        setPaymentStatus(["View"]);
        break;
    }
  }, [order]);

  return (
    <div
      className="order-show-profile"
      style={{ height: isShow === true ? "373px" : "100px" }}
    >
      <div
        className="order-show-header"
        onClick={() => setIsShow(!isShow)}
        style={{
          borderBottom: isShow && "1px solid var(--bg-secondary-color)",
        }}
      >
        <div
          className="order-show-detail"
          style={{ justifyContent: isShow === true ? "start" : "space-evenly" }}
        >
          <p>
            <span className="order-title">Order Id:</span> {orderId}...
          </p>
          <p>
            {dayjs(order.created_at).format("DD MMM YYYY")}{" "}
            <span style={{ color: "var(--warning)" }}>•</span>{" "}
            {order.order_items.length} Products{" "}
            <span style={{ color: "var(--warning)" }}>•</span> $
            {order.total_price}
          </p>
        </div>
        <span
          className="ov-status-badge"
          style={{
            background: statusStyle.bg,
            color: statusStyle.color,
            alignSelf: "top",
          }}
        >
          <span
            className="ov-status-dot"
            style={{ background: statusStyle.color }}
          />
          {order?.status}
        </span>
      </div>
      <div
        className="order-show-body"
        style={{ display: isShow ? "flex" : "none" }}
      >
        <ul className="image-slider-gallery">
          {order.order_items &&
            order.order_items.slice(0, 3).map((p, i) => {
              return (
                <div key={i} className="order-item-container">
                  <img src={p.product_image} alt="Product" />
                  <p>{p.product_name}</p>
                </div>
              );
            })}

          {order.order_items && order.order_items.length > 3 && (
            <li className="more-gallery-images">
              +{order.order_items.length - 3}
            </li>
          )}
        </ul>
      </div>
      <div
        className="order-show-footer"
        style={{ display: isShow ? "flex" : "none" }}
      >
        {order.status === "Delivered" && (
          <div className="shipping-address">
            <p>Shipping Address</p>
            <p>{`${order.shipping_city}, ${order.shipping_country}`}</p>
          </div>
        )}
        <div className="buttons-order-control-container">
          {paymentStatus?.map((p, i) => (
            <button
              style={{
                backgroundColor: p === "View" && "#f59e0b",
                color: p === "View" && "#1a1a1a",
                border: p === "View" && "none",
              }}
              key={i}
              className="button-order-control"
              onClick={(e) => {
                e.stopPropagation();
                if (p === "View")
                  handleOpen(order.id, setSelectedOrder, setOpenOrderView);
                if (p === "Cancel") handleCancell(order.id);
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
