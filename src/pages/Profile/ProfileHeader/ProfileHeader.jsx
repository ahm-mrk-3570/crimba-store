import { useLocation } from "react-router-dom";
import "./ProfileHeader.css";
import { titles } from '../../../constants/MenuProfileTitles';

export default function ProfileHeader() {
  const data = useLocation();
  const location = data.pathname.slice(1);
  const title = titles[location];

  return (
    <div className="header-profile" style={{ padding: "0 1rem" }}>
      <h3>{title}</h3>
    </div>
  );
}
