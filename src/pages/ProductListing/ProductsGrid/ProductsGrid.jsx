import Product from "../../../components/Product/Product";
import GlobalContext from "../../../context/Context";
import ProductCardSkeleton from "../../../components/loadingComponents/ProductCardSkeleton";

import "./ProductsGrid.css";

import { useContext, useState } from "react";
import ProductListShow from "./ProductListShow/ProductListShow";
import { useSearchParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import useProducts from "../../../hooks/useProducts";
import useWishlists from "../../../hooks/useWishlists";

export default function ProductsGrid() {
  /* State */
  const [showOrder, setShowOrder] = useState("grid");
  /* State */

  /* Context */
  const { page } = useContext(GlobalContext);
  const { user } = useContext(AuthContext);
  const { wishlists } = useWishlists(user);
  /* Context */

  /* SearchParams */
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  /* SearchParams */

  const { products, loading } = useProducts(page);

  return (
    <>
      {loading === true ? (
        <div
          className="products-main-grid"
          style={{
            gap: "1rem",
            gridTemplateColumns: showOrder === "list" && "1fr",
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="products-grid">
          <div className="products-header-plg">
            <div className="left-products-header-plg">
              <div className="show-icon">
                <button
                  className="show-items"
                  onClick={() => setShowOrder("grid")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    version="1.1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.5,1c.551,0,1,.449,1,1v7.5c0,.551-.449,1-1,1H2c-.551,0-1-.449-1-1V2c0-.551.449-1,1-1h7.5M9.5,0H2C.895,0,0,.895,0,2v7.5c0,1.105.895,2,2,2h7.5c1.105,0,2-.895,2-2V2c0-1.105-.895-2-2-2h0Z" />
                    <path d="M22,1c.551,0,1,.449,1,1v7.5c0,.551-.449,1-1,1h-7.5c-.551,0-1-.449-1-1V2c0-.551.449-1,1-1h7.5M22,0h-7.5c-1.105,0-2,.895-2,2v7.5c0,1.105.895,2,2,2h7.5c1.105,0,2-.895,2-2V2c0-1.105-.895-2-2-2h0Z" />
                    <path d="M9.5,13.5c.551,0,1,.449,1,1v7.5c0,.551-.449,1-1,1H2c-.551,0-1-.449-1-1v-7.5c0-.551.449-1,1-1h7.5M9.5,12.5H2c-1.105,0-2,.895-2,2v7.5c0,1.105.895,2,2,2h7.5c1.105,0,2-.895,2-2v-7.5c0-1.105-.895-2-2-2h0Z" />
                    <path d="M22,13.5c.551,0,1,.449,1,1v7.5c0,.551-.449,1-1,1h-7.5c-.551,0-1-.449-1-1v-7.5c0-.551.449-1,1-1h7.5M22,12.5h-7.5c-1.105,0-2,.895-2,2v7.5c0,1.105.895,2,2,2h7.5c1.105,0,2-.895,2-2v-7.5c0-1.105-.895-2-2-2h0Z" />
                  </svg>
                </button>
                <button
                  className="show-items"
                  onClick={() => setShowOrder("list")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    version="1.1"
                    viewBox="0 0 35 24"
                  >
                    <path d="M6.634,1.838c2.436,0,4.418,1.982,4.418,4.418s-1.982,4.418-4.418,4.418-4.418-1.982-4.418-4.418S4.197,1.838,6.634,1.838M6.634.838C3.641.838,1.215,3.264,1.215,6.256s2.426,5.418,5.418,5.418,5.418-2.426,5.418-5.418S9.626.838,6.634.838h0Z" />
                    <path d="M6.634,13.66c2.436,0,4.418,1.982,4.418,4.418s-1.982,4.418-4.418,4.418-4.418-1.982-4.418-4.418,1.982-4.418,4.418-4.418M6.634,12.66c-2.992,0-5.418,2.426-5.418,5.418s2.426,5.418,5.418,5.418,5.418-2.426,5.418-5.418-2.426-5.418-5.418-5.418h0Z" />
                    <g>
                      <line
                        x1="14.376"
                        y1="4.758"
                        x2="28.71"
                        y2="4.758"
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                      />
                      <line
                        x1="14.376"
                        y1="7.754"
                        x2="32.551"
                        y2="7.754"
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <g>
                      <line
                        x1="14.376"
                        y1="16.678"
                        x2="28.71"
                        y2="16.678"
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                      />
                      <line
                        x1="14.376"
                        y1="19.479"
                        x2="32.551"
                        y2="19.479"
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                      />
                    </g>
                  </svg>
                </button>
              </div>

              <p>
                Showing{" "}
                <span>1 - {products?.length > 10 ? 10 : products?.length}</span>{" "}
                of{" "}
                {category === "" || category === null
                  ? products?.length
                  : products?.length}{" "}
                results
              </p>
            </div>
          </div>
          <div
            className="products-main-grid"
            style={{
              display: products?.length === 0 && "flex",
              alignItems: products?.length === 0 && "center",
              justifyContent: products?.length === 0 && "center",
              gap: "1rem",
              gridTemplateColumns: showOrder === "list" && "1fr",
            }}
          >
            {showOrder === "grid" ? (
              products?.length > 0 ? (
                products?.map((product) => (
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
                ))
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="main-images/products/no-item.gif"
                    alt="No Products"
                  />
                </div>
              )
            ) : showOrder == "list" ? (
              products?.length > 0 ? (
                products?.map((product) => {
                  return (
                    <ProductListShow
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
                <>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="main-images/products/no-item.gif"
                      alt="No Products"
                    />
                  </div>
                </>
              )
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
