import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
import GlobalContext from "../../context/Context";
import AuthContext from "../../context/AuthContext";
import {
  handleAddToCart,
  handleAddToWishlists,
  handleRemoveFromWishlists,
} from "../../helpers/CartFunctions";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import useWishlists from '../../hooks/useWishlists';
import useCart from '../../hooks/useCart';

export default function Product({
  id,
  imgLocation,
  title,
  description,
  hasDiscount,
  beforeDiscount,
  afterDiscount,
  isWishlist,
  price,
  isAvailaible,
  size,
  colors,
}) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { cartItems, setCartItems } = useCart(user);
  const { setWishlists } = useWishlists(user);

  return (
    <li className="item-container">
      <div className="image-container">
        <img src={imgLocation} alt="" />
        <p
          className="available"
          style={{
            backgroundColor: isAvailaible
              ? isAvailaible === true
                ? "var(--success)"
                : "var(--error)"
              : "var(--error)",
            color: isAvailaible
              ? isAvailaible === true
                ? "black"
                : "white"
              : "white",
          }}
        >
          {isAvailaible === false ? "out of stock" : "available"}
        </p>
        <button
          onClick={() => {
            isWishlist === true
              ? handleRemoveFromWishlists(id, setWishlists)
              : handleAddToWishlists(id, user, setWishlists);
          }}
          className="favorite"
        >
          <FaHeart
            size={20}
            strokeWidth={25}
            stroke={!isWishlist ? "red" : undefined}
            color={isWishlist === true ? "red" : "transparent"}
          />
        </button>
      </div>
      <div className="detail">
        <div className="detail-container">
          <h4
            onClick={() => navigate(`/product?id=${id}`)}
            className="title-product"
          >
            {title}
          </h4>
          <h6
            onClick={() => navigate(`/product?id=${id}`)}
            className="description-product"
          >
            {description}
          </h6>
        </div>

        <div
          className="price-add-container"
          style={{ display: isAvailaible === false && "none" }}
        >
          {hasDiscount ? (
            <div className="price-container">
              <p>${beforeDiscount}</p>
              <p>${afterDiscount}</p>
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: "x-large",
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                ${price}
              </p>
            </div>
          )}

          <button
            onClick={() => {
              handleAddToCart(size[0], colors[0], id, user, cartItems, setCartItems);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}
