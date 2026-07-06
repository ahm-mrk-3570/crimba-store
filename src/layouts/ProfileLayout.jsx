/* eslint-disable react-hooks/refs */
import { Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProfileContext from "../context/ProfileContext";
import MenuProfile from "../pages/Profile/MenuProfile/MenuProfile";
import ProfileHeader from "../pages/Profile/ProfileHeader/ProfileHeader";
import OrderView from "../pages/Profile/ProfileTabs/ProfileOrder/OrderView/OrderView";
import Footer from "../components/Footer/Footer";

const ProfileLayout = () => {
  return (
    <div className="profile-page container-custom">
      <div className="profile-main-page">
        <div className="profile-section">
          <ProfileHeader />
          <div className="main-profile">
            <MenuProfile />
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
