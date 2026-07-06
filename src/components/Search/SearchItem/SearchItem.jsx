import { useNavigate } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ id, img, title, description, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="search-item-box">
      <img src={img} alt="Search Item" />
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <button
        onClick={() => {
          navigate(`/product?id=${id}`);
          onClose();
        }}
      >
        View Product
      </button>
    </div>
  );
};

export default SearchItem;
