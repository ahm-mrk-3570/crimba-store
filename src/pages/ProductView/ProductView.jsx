import AddressBar from "../../components/AddressBar";
import Header from "../../components/Header/Header";
import ImageSlider from "./ImageSlider/ImageSlider";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductFineInformation from "./ProductFineInformation/ProductFineInformation";
import Product from "../../components/Product/Product";
import Features from "../../components/Features/Features";
import "./ProductView.css";
import Footer from "../../components/Footer/Footer";
import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GlobalContext from "../../context/Context";
import AuthContext from "../../context/AuthContext";
import useProduct from "../../hooks/useProduct";
import useProductReviews from "../../hooks/useProductReviews";
import useWishlists from "../../hooks/useWishlists";
import useRelatedProducts from "../../hooks/useRelatedProducts";

export default function ProductView() {
  const [selectedPicture, setSelectedPicture] = useState(0);
  const [selectedDetail, setSelectedDetail] = useState({
    selected_color: "",
    selected_size: "",
  });

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { product, loading: productLoading } = useProduct(id);
  const { productReviews } = useProductReviews(product);
  const { user } = useContext(AuthContext);
  const { wishlists } = useWishlists(user);
  const { relatedProducts, loading } = useRelatedProducts(product);

  return (
    <>
      <title>Product</title>
      {productLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="main-products-page container-custom">
          <AddressBar address={`Home > Shop > Product > ${id}`} />
          <div className="bottom-main-product">
            <ProductDetail
              reviews={productReviews}
              product={product}
              selectedPicture={selectedPicture}
              setSelectedDetail={setSelectedDetail}
              selectedDetail={selectedDetail}
              setSelectedPicture={setSelectedPicture}
            />
            <ProductFineInformation
              product={product}
              reviews={productReviews}
            />
            <div className="related-products">
              <h4>Related Products</h4>
              <div className="products-related">
                {!loading ? (
                  relatedProducts &&
                  relatedProducts.slice(0, 4).map((product) => {
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
                  })
                ) : (
                  <>Loading</>
                )}
              </div>
            </div>
            <Features />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
