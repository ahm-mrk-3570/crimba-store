import dayjs from "dayjs";
import "./OrderView.css";
import { handleClose } from "../../../../../helpers/orderFunctions";

const STATUS_STYLES = {
  Delivered: { bg: "rgba(16,185,129,0.12)", color: "#10b981" },
  Processing: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24" },
  Shipped: { bg: "rgba(99,102,241,0.14)", color: "#818cf8" },
  Cancelled: { bg: "rgba(239,68,68,0.12)", color: "#ef4444" },
};

const BackIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M10 12L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
             15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    />
  </svg>
);

const OrderView = ({ order, setOpenOrderView, setSelectedOrder }) => {

  const statusStyle = STATUS_STYLES[order?.status] || STATUS_STYLES.Processing;
  const stop = (e) => e.stopPropagation();

  return (
    <div className="ov-card" onClick={stop}>
      <div className="ov-header">
        <button
          className="ov-back-btn"
          onClick={() => handleClose(setOpenOrderView, setSelectedOrder)}
        >
          <BackIcon />
          Back
        </button>

        <div className="ov-header-center">
          <span className="ov-order-eyebrow">Order</span>
          <span className="ov-order-id">{order?.id}</span>
        </div>

        <span
          className="ov-status-badge"
          style={{ background: statusStyle.bg, color: statusStyle.color }}
        >
          <span
            className="ov-status-dot"
            style={{ background: statusStyle.color }}
          />
          {order?.status}
        </span>
      </div>

      <div className="ov-body">
        <div className="ov-meta-strip">
          <div className="ov-meta-cell">
            <span className="ov-meta-label">Date</span>
            <span className="ov-meta-val">
              {dayjs(order?.updated_at).format("MMM, DD YYYY")}
            </span>
          </div>
          <div className="ov-meta-sep" />
          <div className="ov-meta-cell">
            <span className="ov-meta-label">Products</span>
            <span className="ov-meta-val">
              {order?.order_items.length} items
            </span>
          </div>
          <div className="ov-meta-sep" />
          <div className="ov-meta-cell">
            <span className="ov-meta-label">Total</span>
            <span className="ov-meta-val ov-meta-price">
              ${order?.total_price.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="ov-section">
          <p className="ov-section-title">Order Items</p>
          <div className="ov-items-row">
            {order?.order_items.map((item) => (
              <div key={item.id} className="ov-item">
                <div className="ov-thumb">
                  {item.product_image ? (
                    <img src={item.product_image} alt={item.product_name} />
                  ) : (
                    <div className="ov-thumb-placeholder" />
                  )}
                </div>
                <span className="ov-item-name">{item.product_name}</span>
              </div>
            ))}
          </div>
        </div>

        {order?.status === "Delivered" && (
          <div className="ov-section ov-delivery-section">
            <p className="ov-section-title">Delivery Details</p>

            <div className="ov-delivery-row">
              <div className="ov-delivery-icon">
                <PinIcon />
              </div>
              <div className="ov-delivery-text">
                <span className="ov-delivery-label">Shipping Address</span>
                <span className="ov-delivery-val">
                  {order?.shipping_city + order?.shipping_country}
                </span>
              </div>
            </div>

            <div className="ov-delivery-row">
              <div className="ov-delivery-icon">
                <GlobeIcon />
              </div>
              <div className="ov-delivery-text">
                <span className="ov-delivery-label">Location</span>
                <span className="ov-delivery-val">
                  {order?.shipping_city}, {order?.shipping_country}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="ov-footer">
        <button
          className="ov-footer-back-btn"
          onClick={() => handleClose(setOpenOrderView, setSelectedOrder)}
        >
          <BackIcon />
          Back to Orders
        </button>
      </div>
    </div>
  );
};

export default OrderView;
