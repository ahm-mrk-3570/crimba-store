import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalContext from "../../../context/Context";
import "./ShopDriverContent.css";
import Accordion from "../../../pages/ProductListing/ProductListMenu/Accordion/Accordion";
import CategoryPLM from "../../../pages/ProductListing/Components/CategoryPLM";
import ColorPLM from "../../../pages/ProductListing/Components/ColorPLM";
import SizePLM from "../../../pages/ProductListing/Components/SizePLM";
import categoryData from "../../../constants/CategoryData";
import _ from "lodash";
import useProducts from "../../../hooks/useProducts";
import { handleSubmitPrice } from "../../../helpers/productFunctions";

const ShopDriverContent = ({ handleClose }) => {
  const { themeMode, toggleTheme } = useContext(GlobalContext);

  const navigate = useNavigate();

  const { page } = useContext(GlobalContext);

  const { products, loading, setLoading } = useProducts(page);

  /* States */
  const [filterOpen, setFilterOpen] = useState(0);
  /* States */
  /* Search Params */
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  /* Search Params */
  /* Use Ref */
  const fromPrice = useRef(null);
  const toPrice = useRef(null);
  /* Use Ref */

  /* Effects */
  useEffect(() => {
    if (category) {
      setFilterOpen(4);
    } else {
      setFilterOpen(0);
    }
  }, [category]);
  /* Effects */

  return (
    <>
      <ul className="shop-driver-content">
        <Accordion
          id={4}
          title="Product Categories"
          activeId={filterOpen}
          setActiveId={setFilterOpen}
        >
          <ul className="category-selector-plm">
            {categoryData.map((c) => (
              <CategoryPLM
                onClose={handleClose}
                key={c.title}
                title={c.title}
                type={c.title}
                url={c.url}
              />
            ))}
          </ul>
        </Accordion>

        <Accordion
          id={1}
          title="Filter By Price"
          activeId={filterOpen}
          setActiveId={setFilterOpen}
        >
          <div
            className="price-enter"
            style={{ visibility: filterOpen !== 1 ? "hidden" : "visible" }}
          >
            <input
              ref={fromPrice}
              className="from-price"
              placeholder="from"
              type="text"
              placeholder={minPrice || "from"}
            />
            <input
              ref={toPrice}
              className="to-price"
              type="text"
              placeholder={maxPrice || "to"}
            />
          </div>
          <button
            disabled={loading === true}
            onClick={() => handleSubmitPrice(setLoading, fromPrice, toPrice, navigate, setSearchParams)}
            className="submit-price-filter"
            style={{ visibility: filterOpen !== 1 ? "hidden" : "visible" }}
          >
            Submit
          </button>
        </Accordion>

        <Accordion
          id={2}
          title="Filter By Color"
          activeId={filterOpen}
          setActiveId={setFilterOpen}
        >
          <ul
            className="color-filter-plm"
            style={{ display: filterOpen !== 2 ? "none" : "flex" }}
          >
            <ColorPLM
              onClose={handleClose}
              title="Red"
              count={
                products?.filter((p) => p.colors.includes("Red")).length || 0
              }
            />
            <ColorPLM
              onClose={handleClose}
              title="Blue"
              count={
                products?.filter((p) => p.colors.includes("Blue")).length || 0
              }
            />
            <ColorPLM
              onClose={handleClose}
              title="Orange"
              count={
                products?.filter((p) => p.colors.includes("Orange")).length || 0
              }
            />
            <ColorPLM
              onClose={handleClose}
              title="Black"
              count={
                products?.filter((p) => p.colors.includes("Black")).length || 0
              }
            />
            <ColorPLM
              onClose={handleClose}
              title="Green"
              count={
                products?.filter((p) => p.colors.includes("Green")).length || 0
              }
            />
            <ColorPLM
              onClose={handleClose}
              title="Yellow"
              count={
                products?.filter((p) => p.colors.includes("Yellow")).length || 0
              }
            />
          </ul>
        </Accordion>

        <Accordion
          id={3}
          title="Filter By Size"
          activeId={filterOpen}
          setActiveId={setFilterOpen}
        >
          <ul
            className="size-filter-plm"
            style={{ display: filterOpen !== 3 ? "none" : "block" }}
          >
            <SizePLM
              onClose={handleClose}
              type="small"
              title="S"
              count={products?.filter((p) => p.size.includes("S")).length || 0}
            />
            <SizePLM
              onClose={handleClose}
              type="medium"
              title="M"
              count={products?.filter((p) => p.size.includes("M")).length || 0}
            />
            <SizePLM
              onClose={handleClose}
              type="large"
              title="L"
              count={products?.filter((p) => p.size.includes("L")).length || 0}
            />
            <SizePLM
              onClose={handleClose}
              type="xlarge"
              title="XL"
              count={products?.filter((p) => p.size.includes("XL")).length || 0}
            />
            <SizePLM
              onClose={handleClose}
              type="xxlarge"
              title="XXL"
              count={
                products?.filter((p) => p.size.includes("XXL")).length || 0
              }
            />
            <SizePLM
              onClose={handleClose}
              type="xxxlarge"
              title="XXXL"
              count={
                products?.filter((p) => p.size.includes("XXXL")).length || 0
              }
            />
          </ul>
        </Accordion>
      </ul>
      <ul className="handle-theme">
        {["dark", "light", "system"].map((t) => (
          <button
            key={t}
            className={`ps-theme-btn ${themeMode === t ? "ps-theme-btn--active" : ""}`}
            onClick={() => toggleTheme(t)}
          >
            <i
              className={`ti ti-${t === "dark" ? "moon" : t === "light" ? "sun" : "device-laptop"}`}
              aria-hidden="true"
            />
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </ul>
    </>
  );
};

export default ShopDriverContent;
