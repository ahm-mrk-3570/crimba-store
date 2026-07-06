import dayjs from "dayjs";
import "./NotifItem.css";
import { TYPE_META } from "../../../../../constants/filters";



const NotifItem = ({ notif, onRead }) => {
  const meta = TYPE_META[notif.type] || TYPE_META.promo;

  return (
    <div
      className={`pn-item ${!notif.is_read ? "pn-item--unread" : ""}`}
      onClick={() => !notif.is_read && onRead(notif.id)}
    >
      <div className={`pn-icon pn-icon--${meta.color}`}>
        <i className={`ti ${meta.icon}`} aria-hidden="true" />
      </div>
      <div className="pn-item__body">
        <div className="pn-item__top">
          <span className="pn-item__title">{notif.title}</span>
          <span className="pn-item__time">
            {dayjs(notif.created_at).fromNow()}
          </span>
        </div>
        <p className="pn-item__msg">{notif.message}</p>
        <span className={`pn-item__label pn-item__label--${meta.color}`}>
          {meta.label}
        </span>
      </div>
      {!notif.is_read && <span className="pn-unread-dot" aria-label="Unread" />}
    </div>
  );
};

export default NotifItem;
