import "./BestSeller.css";
import Product from "../../../components/Product/Product";
import { useContext } from "react";
import GlobalContext from "../../../context/Context";
import ProductCardSkeleton from "../../../components/loadingComponents/ProductCardSkeleton";
import AuthContext from "../../../context/AuthContext";
import useBestSellerProducts from "../../../hooks/useBestSellerProducts";

export default function BestSeller() {
  const { wishlists } = useContext(GlobalContext);

  const { bestSellerProducts, loading } = useBestSellerProducts();

  return (
    <div className="best-seller-container container-custom">
      <div className="best-seller-header">Our Bestseller</div>
      <ul className="best-seller-items-container">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          <>
            {bestSellerProducts &&
              bestSellerProducts.map((product) => {
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    imgLocation={product.pictures[0]}
                    title={product.name}
                    description={product.description}
                    hasDiscount={product.discountprice > 0}
                    beforeDiscount={product.discountprice}
                    afterDiscount={product.price}
                    isWishlist={wishlists?.some(
                      (w) => w.product_id === product.id,
                    )}
                    price={product.price}
                    isAvailaible={product.count > 0}
                    size={product.size}
                    colors={product.colors}
                  />
                );
              })}
          </>
        )}
      </ul>
    </div>
  );
}
