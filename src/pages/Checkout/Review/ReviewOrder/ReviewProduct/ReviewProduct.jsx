import "./ReviewProduct.css";

export default function ReviewProduct({ item }) {
  return (
    <div className="review-product">
      <div className="image-review-product">
        <img src={item.products.pictures[0] || ""} alt="product order" />
      </div>
      <div className="detail-review-product">
        <p>{item.products.name}</p>
        <div>
          <p>
            <span
              style={{
                fontSize: "large",
              }}
            >
              {item.products.discountprice > 0 &&
                `$${item.products.discountprice}`}
            </span>
            {"  "}
            <span style={{
              opacity: item.products.discountprice > 0 && "0.7",
              textDecoration : item.products.discountprice > 0 && "line-through"
            }}>{`$${item.products.price}`}</span>
          </p>
          <p>Quantity: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
}
