import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./ProfileNotifications.css";
import { useContext, useState } from "react";
import AuthContext from "../../../../context/AuthContext";
import useNotifications from "../../../../hooks/useNotifications";
import { readAllNotifications, readNotification } from "../../../../services/notificationsService";
import { FILTERS, FILTER_TYPES } from '../../../../constants/filters';

dayjs.extend(relativeTime);

export default function ProfileNotifications() {
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState("All");

  const { notifications, setNotifications, loading } = useNotifications(user);

  const handleRead = async (id) => {
    await readNotification(id);
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)),
    );
  };

  const handleReadAll = async () => {
    await readAllNotifications(user);
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => FILTER_TYPES[filter]?.includes(n.type));

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <div className="pn-page">
      <title>Notifications</title>
      <div className="pn-header">
        <div>
          <h2 className="pn-title">Notifications</h2>
          <p className="pn-subtitle">
            {unreadCount > 0 ? `${unreadCount} unread` : "All caught up"}
          </p>
        </div>
        {unreadCount > 0 && (
          <button className="pn-read-all-btn" onClick={handleReadAll}>
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="pn-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`pn-filter-btn ${filter === f ? "pn-filter-btn--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="pn-list">
        {loading ? (
          <div className="pn-empty">Loading…</div>
        ) : filtered.length === 0 ? (
          <div className="pn-empty">
            <i className="ti ti-bell-off" aria-hidden="true" />
            <p>No notifications here</p>
          </div>
        ) : (
          filtered.map((n) => (
            <NotifItem key={n.id} notif={n} onRead={handleRead} />
          ))
        )}
      </div>
    </div>
  );
}
