import { Link, useLocation, useNavigate } from "react-router-dom";
import "./MainDriverContent.css";
import { useContext } from "react";
import GlobalContext from "../../../context/Context";
import AuthContext from "../../../context/AuthContext";
import { _main_items, _second_items } from "../../../constants/DriverMenuItems";

const MainDriverContent = ({ handleClose }) => {
  const { pathname } = useLocation();

  const { themeMode, toggleTheme } = useContext(GlobalContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <ul className="main-driver-content">
        {user
          ? _main_items.map((i) => {
              return (
                <li>
                  <button
                    className={`${pathname === i.pathname ? "active-page" : null}`}
                    onClick={() => {
                      navigate(i.pathname);
                      handleClose();
                    }}
                  >
                    {i.title}
                  </button>
                </li>
              );
            })
          : _second_items.map((i) => {
              return (
                <li>
                  <button
                    className={`${pathname === i.pathname ? "active-page" : null}`}
                    onClick={() => {
                      navigate(i.pathname);
                      handleClose();
                    }}
                  >
                    {i.title}
                  </button>
                </li>
              );
            })}
      </ul>
      <ul className="handle-theme">
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
      </ul>
    </>
  );
};

export default MainDriverContent;
