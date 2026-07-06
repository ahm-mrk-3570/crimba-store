import { useContext, useState } from "react";

import "./ProductDetail.css";
import GlobalContext from "../../../context/Context";
import ImageSlider from "../ImageSlider/ImageSlider";
import { handleAddToCart } from "../../../helpers/CartFunctions";
import useCart from "../../../hooks/useCart";
import AuthContext from "../../../context/AuthContext";
import useWishlists from "../../../hooks/useWishlists";

export default function ProductDetail({
  product,
  selectedPicture,
  reviews,
  setSelectedDetail,
  selectedDetail,
  setSelectedPicture,
}) {
  const [count, setCount] = useState(1);

  const { user } = useContext(AuthContext);
  const { wishlists } = useWishlists(user);
  const { cartItems, setCartItems } = useCart(user);

  const isWishlist = wishlists?.some((w) => w.product_id === product?.id);

  const isAvailaible = product.count > 0;

  return (
    <div className="product-detail-container">
      <div className="image-shower">
        <img src={product?.pictures?.[selectedPicture]} alt="Product" />
        <ImageSlider
          product={product}
          selectedPicture={selectedPicture}
          setSelectedPicture={setSelectedPicture}
        />

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
      </div>
      <div className="detail-shower">
        <div className="title-product">
          <h3>{product?.name}</h3>
          <h5>{product?.description}</h5>
        </div>
        <div className="star-rating">
          <img
            src={`main-images/stars/${product?.rate * 10}.svg`}
            alt="star-rating"
          />
          <p>
            {product.rate} {`(${reviews?.length}) Reviews`}
          </p>
        </div>
        {isAvailaible === true && <div className="price-container">
          {product?.discountprice > 0 ? (
            <>
              <p className="after-discount">${product?.discountprice}</p>
              <p className="before-discount">${product?.price}</p>
            </>
          ) : (
            <p className="after-discount">${product?.price}</p>
          )}
        </div>}
        <div className="color-section">
          <h5>Color</h5>
          <div className="color-container">
            {product?.colors?.map((c, i) => (
              <span
                onClick={() =>
                  setSelectedDetail((prev) => ({ ...prev, selected_color: c }))
                }
                key={i}
                className={`${c.toLowerCase()}-color ${selectedDetail.selected_color === c ? "active-color" : null}`}
              ></span>
            ))}
          </div>
        </div>
        <div className="size-section">
          <h5>Size</h5>
          <div className="size-container">
            {product?.size?.map((s, i) => (
              <span
                onClick={() =>
                  setSelectedDetail((prev) => ({ ...prev, selected_size: s }))
                }
                key={i}
                className={`${s.toLowerCase()}-size ${selectedDetail.selected_size === s ? "active-size" : null}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="operation-container">
          <div className="count-controller-cart">
            <svg
              onClick={() => {
                setCount((prev) => {
                  if (prev === 1) {
                    return prev;
                  } else {
                    return prev - 1;
                  }
                });
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{count}</p>
            <svg
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6V18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="add-to-cart-PV" onClick={() => handleAddToCart(selectedDetail.selected_size, selectedDetail.selected_color, product.id, user, cartItems, setCartItems, count)}>
            <button className="add-to-cart-btn-PV">Add To Cart</button>
          </div>
          <div className="add-to-favorite-PV">
            {isWishlist && isWishlist === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
                style={{ fill: "yellow" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
