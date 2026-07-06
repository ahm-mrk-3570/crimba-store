import { useState } from "react";
import "./DriverMenu.css";
import GlobalContext from "../../context/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MainDriverContent from "./MainDriverContent/MainDriverContent";
import ShopDriverContent from "./ShopDriverContent/ShopDriverContent";
import ProfileDriverContent from "./ProfileDriverContent/ProfileDriverContent";
import { CgClose } from "react-icons/cg";
import { _mainPages, _profileTabs } from "../../constants/DriverMenuItems";

export default function DriverMenu({ handleClose }) {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [location, setLocation] = useState(pathname);

  return (
    <div className="driver-menu">
      <div className="header-driver-menu">
        <div
          onClick={() => {
            navigate("/");
            handleClose();
          }}
        >
          <img src={`${import.meta.env.BASE_URL}/logo.svg`} />
          <h4>Crimba</h4>
        </div>

        <button onClick={handleClose} className="back-icon">
          <CgClose size={28} />
        </button>
      </div>

      <div className="driver-content">
        {_mainPages.includes(location) && <MainDriverContent handleClose={handleClose} />}
        {location === "/products" && (
          <ShopDriverContent handleClose={handleClose} />
        )}
        {_profileTabs.includes(location) && <ProfileDriverContent handleClose={handleClose} />}
      </div>
    </div>
  );
}
