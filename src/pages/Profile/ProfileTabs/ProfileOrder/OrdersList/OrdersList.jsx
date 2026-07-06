import OrderShow from "./OrderShow/OrderShow";
import "./OrdersList.css";
import ProfileContext from "../../../../../context/ProfileContext";

export default function OrdersList({ orders, setOpenOrderView, setSelectedOrder }) {
  return (
    <div className="order-list-profile">
      {orders &&
        orders.map((order) => (
          <OrderShow
            key={order.id}
            order={order}
            setOpenOrderView={setOpenOrderView}
            setSelectedOrder={setSelectedOrder}
          />
        ))}
    </div>
  );
}
