import { Fragment } from "react";
import "./ImageSlider.css";

export default function ImageSlider({
  product,
  setSelectedPicture,
  selectedPicture,
}) {
  return (
    <div className="product-image-slider-container">
      <div className="product-image-slider">
        {selectedPicture !== 0 ? (
          <img
            onClick={() => setSelectedPicture(0)}
            src={product?.pictures?.[0]}
            alt="other image"
          />
        ) : null}
        {product?.pictures?.slice(1, product?.pictures?.length).map((p, i) => {
          return (
            <Fragment key={i}>
              {selectedPicture === i + 1 ? null : (
                <img
                  key={i}
                  onClick={() => setSelectedPicture(i + 1)}
                  src={p}
                  alt="other image"
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
