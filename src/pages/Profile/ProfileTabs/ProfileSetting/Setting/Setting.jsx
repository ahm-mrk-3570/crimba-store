/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import ChangeThemeBoxHandling from "../../../../../components/ChangeThemeBoxHandling";
import "./Setting.css";
import AuthContext from "../../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../../../../context/Context";
import SettingRow from './SettingRow/SettingRow';
import { handleChangePassword, handleToggle, logout } from '../../../../../helpers/SettingsFunctions';

// ── Defined outside to avoid re-render / focus issues ──
const Toggle = ({ checked, onToggle }) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={onToggle}
    className={`ps-toggle ${checked ? "ps-toggle--on" : ""}`}
  >
    <span className="ps-toggle__thumb" />
  </button>
);

const DEFAULTS = {
  theme: "dark",
  two_factor: false,
  push_notifications: true,
  desktop_notifications: true,
  email_notifications: true,
};

export default function Setting() {
  const { user, setUser } = useContext(AuthContext);
  const [settings, setSettings] = useState(DEFAULTS);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { themeMode, toggleTheme } = useContext(GlobalContext);

  useEffect(() => {
    if (!user) return;
    const meta = user.user_metadata || {};
    setSettings((prev) => ({ ...prev, ...meta }));
  }, [user]);

  return (
    <div className="ps-page">
      <section className="ps-section">
        <h3 className="ps-section__title">Account & Security</h3>

        <SettingRow
          icon={<i className="ti ti-lock" aria-hidden="true" />}
          title="Change Password"
          description="Send a reset link to your email"
          right={
            <button className="ps-action-btn" onClick={() => handleChangePassword(user)}>
              Send link
            </button>
          }
        />

        <SettingRow
          icon={<i className="ti ti-shield-check" aria-hidden="true" />}
          title="Two-Factor Authentication"
          description="Add a second layer of protection via email OTP"
          right={
            <Toggle
              checked={settings.two_factor}
              onToggle={() => handleToggle("two_factor", settings, setSettings)}
            />
          }
        />
      </section>

      {/* ── Appearance ── */}
      <section className="ps-section">
        <h3 className="ps-section__title">Appearance</h3>

        <div className="ps-row">
          <div className="ps-row__icon">
            <i className="ti ti-palette" aria-hidden="true" />
          </div>
          <div className="ps-row__text">
            <p className="ps-row__title">Theme</p>
            <p className="ps-row__desc">
              Choose how Crimba looks on your device
            </p>
          </div>
          <div className="ps-theme-btns">
            {["dark", "light", "system"].map((t) => (
              <button
                key={t}
                className={`ps-theme-btn ${themeMode === t ? "ps-theme-btn--active" : ""}`}
                onClick={() => toggleTheme(t)}
              >
                <i
                  className={`ti ti-${t === "dark" ? "moon" : t === "light" ? "sun" : "device-laptop"}`}
                  aria-hidden="true"
                />
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notifications ── */}
      <section className="ps-section">
        <h3 className="ps-section__title">Notifications</h3>

        <SettingRow
          icon={<i className="ti ti-mail" aria-hidden="true" />}
          title="Email Notifications"
          description="Receive order updates and promotions by email"
          right={
            <Toggle
              checked={settings.email_notifications}
              onToggle={() => handleToggle("email_notifications", settings, setSettings)}
            />
          }
        />

        <SettingRow
          icon={<i className="ti ti-bell" aria-hidden="true" />}
          title="Push Notifications"
          description="Get notified about orders and activity"
          right={
            <Toggle
              checked={settings.push_notifications}
              onToggle={() => handleToggle("push_notifications", settings, setSettings)}
            />
          }
        />

        <SettingRow
          icon={<i className="ti ti-device-desktop" aria-hidden="true" />}
          title="Desktop Notifications"
          description="Show notifications on your desktop"
          right={
            <Toggle
              checked={settings.desktop_notifications}
              onToggle={() => handleToggle("desktop_notifications", settings, setSettings)}
            />
          }
        />
      </section>

      {/* ── Danger Zone ── */}
      <section className="ps-section ps-section--danger">
        <h3 className="ps-section__title">Account</h3>

        <div className="ps-row">
          <div className="ps-row__icon">
            <i className="ti ti-logout" aria-hidden="true" />
          </div>
          <div className="ps-row__text">
            <p className="ps-row__title">Sign Out</p>
            <p className="ps-row__desc">Sign out of your Crimba account</p>
          </div>
          <button className="ps-logout-btn" onClick={() => logout(setUser, navigate)}>
            Sign out
          </button>
        </div>

        <div className="ps-row">
          <div className="ps-row__icon ps-row__icon--danger">
            <i className="ti ti-trash" aria-hidden="true" />
          </div>
          <div className="ps-row__text">
            <p className="ps-row__title ps-row__title--danger">
              Delete Account
            </p>
            <p className="ps-row__desc">
              Permanently delete your account and all data
            </p>
          </div>
          <button className="ps-delete-btn">Delete</button>
        </div>
      </section>

      {saving && <p className="ps-saving">Saving…</p>}
    </div>
  );
}
