import { useContext, useState } from "react";
import AddReview from "../../../components/AddReview/AddReview";
import CommentReview from "../../../components/CommentReview/CommentReview";
import "./ProductFineInformation.css";
import _ from "lodash";
import GlobalContext from "../../../context/Context";

export default function ProductFineInformation({ product, reviews }) {
  const [secion, setSection] = useState(0);
  
  const { setReviews } = useContext(GlobalContext);

  const colors = product?.colors?.join(", ");
  const size = product?.size?.join(", ");

  return (
    <div className="product-fine-information">
      <div className="product-fine-information-main">
        <div className="header-product-fine-info">
          <div
            onClick={() => setSection(0)}
            className={`description-fine ${secion === 0 && "section-active"}`}
          >
            Description
          </div>
          <div
            onClick={() => setSection(1)}
            className={`additional-fine ${secion === 1 && "section-active"}`}
          >
            Additional Information
          </div>
          <div
            onClick={() => setSection(2)}
            className={`review-fine ${secion === 2 && "section-active"}`}
          >
            Reviews
          </div>
        </div>
        <div className="container-product-fine-info">
          <div
            style={{ display: secion === 0 ? "flex" : "none" }}
            className="description-main-fine"
          >
            {product.description}
          </div>
          <div
            style={{ display: secion === 1 ? "flex" : "none" }}
            className="additional-main-fine"
          >
            <div className="additional-container-item">
              <p>Color </p>
              <span>{colors}</span>
            </div>
            <div className="additional-container-item">
              <p>Size </p>
              <span>{size}</span>
            </div>
          </div>
          <div
            style={{ display: secion === 2 ? "block" : "none" }}
            className="review-main-fine"
          >
            <h4>Customer Reviews</h4>
            {reviews.length !== 0 ? (
              reviews.map((r, i) => (
                <CommentReview review={r} key={i} />
              ))
            ) : (
              <p style={{ marginBlock: "1rem" }}>No comment yet...</p>
            )}
            <AddReview product={product} setReviews={setReviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
