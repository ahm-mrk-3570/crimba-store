/* eslint-disable react-hooks/set-state-in-effect */
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import GlobalContext from "../../../context/Context";

export default function CategoryPLM({ type, title, onClose }) {
  /* Context */
  const { loading } = useContext(GlobalContext);
  /* Context */

  /* Search Params */
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  /* Search Params */

  const handleFilter = (e) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (e.target.checked) {
        params.set("category", title.split(" ").join("-").toLowerCase());
      } else {
        params.delete("category");
      }

      return params;
    });
    
    onClose();
  };

  return (
    <li>
      <input
        checked={category === title.split(" ").join("-").toLowerCase()}
        disabled={loading === true}
        onChange={handleFilter}
        type="checkbox"
        id={`checkbox-${type}`}
      />
      <label htmlFor={`checkbox-${type}`}>{title}</label>
    </li>
  );
}
