/* eslint-disable react-hooks/exhaustive-deps */
import "./ProductListing.css";

import Header from "../../components/Header/Header";
import ProductListMenu from "./ProductListMenu/ProductListMenu";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import Footer from "../../components/Footer/Footer";
import AddressBar from "../../components/AddressBar";
import ProductsPageListing from "./ProductsPageListing/ProductsPageListing";

export default function ProductListing() {
  return (
    <>
      <title>All Products</title>
      <div className="main-products-page container-custom">
        <AddressBar address="Shop > All Products" />
        <div className="bottom-main">
          <ProductListMenu />
          <ProductsGrid />
        </div>
      </div>
      <ProductsPageListing />
      <Footer />
    </>
  );
}
