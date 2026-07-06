import { useContext, useState } from "react";
import GlobalContext from "../context/Context";

export default function ChangeThemeBoxHandling({ isSetting }) {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <>
      <button
        style={{
          position: isSetting ? "relative" : "absolute",
          top: isSetting ? "auto" : "50px",
          right: isSetting ? "auto" : "50px",
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="change-theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          style={{ scale: "0.8" }}
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
        Set Theme
        <ul
          style={{
            opacity: isOpen === true ? "1" : "0",
            display: isOpen === true ? "flex" : "none",
          }}
          className="theme-selector"
        >
          <li onClick={() => toggleTheme("system")}>System Theme</li>
          <li onClick={() => toggleTheme("light")}>Light</li>
          <li onClick={() => toggleTheme("dark")}>Dark</li>
        </ul>
      </button>
    </>
  );
}
