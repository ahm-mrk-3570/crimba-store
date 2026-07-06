import { Link, useNavigate } from "react-router-dom";
import { handleRemoveFromWishlists } from '../../helpers/CartFunctions.js';

const WishlistsProduct = ({
  id,
  imgLocation,
  title,
  description,
  isWishlist,
  productId,
  setWishlists
}) => {
  const navigate = useNavigate();

  return (
    <li className="item-container">
      <div className="image-container">
        <img src={imgLocation} alt="" />
        <div className="tools">
          {isWishlist === true ? (
            <div onClick={() => handleRemoveFromWishlists(id, setWishlists)} className="delete-from-wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="red"
                className="bi bi-trash text-white"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="add-to-cart-btn-container">
          <button
            onClick={() => navigate(`/product?id=${productId}`)}
            className="add-to-cart-btn"
          >
            View Product
          </button>
        </div>
      </div>
      <div className="detail">
        <h4 className="title-product">{title}</h4>
        <h6 className="description-product">{description}</h6>
      </div>
    </li>
  );
};

export default WishlistsProduct;
