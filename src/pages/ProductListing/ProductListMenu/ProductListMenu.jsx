import CategoryPLM from "../Components/CategoryPLM";
import ColorPLM from "../Components/ColorPLM";
import SizePLM from "../Components/SizePLM";
import "./ProductListMenu.css";
import GlobalContext from "../../../context/Context";
import { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as _ from "lodash";
import categoryData from "../../../constants/CategoryData";
import Accordion from "./Accordion/Accordion";
import useProducts from "../../../hooks/useProducts";
import { handleSubmitPrice } from "../../../helpers/productFunctions";

export default function ProductListMenu() {
  const [loading, setLoading] = useState(false);
  const { products } = useProducts();

  /* States */
  const [filterOpen, setFilterOpen] = useState(0);
  /* States */

  /* Search Params */
  const [searchParams, setSearchParams] = useSearchParams();
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  /* Search Params */

  /* Navigation */
  const navigate = useNavigate();
  /* Navigation */

  /* Use Ref */
  const fromPrice = useRef(null);
  const toPrice = useRef(null);
  /* Use Ref */

  return (
    <div className="product-listing-menu">
      <Accordion
        id={4}
        title="Product Categories"
        activeId={filterOpen}
        setActiveId={setFilterOpen}
      >
        <ul className="category-selector-plm">
          {categoryData.map((c) => (
            <CategoryPLM
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
            title="Red"
            count={
              products?.filter((p) => p.colors.includes("Red")).length || 0
            }
          />
          <ColorPLM
            title="Blue"
            count={
              products?.filter((p) => p.colors.includes("Blue")).length || 0
            }
          />
          <ColorPLM
            title="Orange"
            count={
              products?.filter((p) => p.colors.includes("Orange")).length || 0
            }
          />
          <ColorPLM
            title="Black"
            count={
              products?.filter((p) => p.colors.includes("Black")).length || 0
            }
          />
          <ColorPLM
            title="Green"
            count={
              products?.filter((p) => p.colors.includes("Green")).length || 0
            }
          />
          <ColorPLM
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
            type="small"
            title="S"
            count={products?.filter((p) => p.size.includes("S")).length || 0}
          />
          <SizePLM
            type="medium"
            title="M"
            count={products?.filter((p) => p.size.includes("M")).length || 0}
          />
          <SizePLM
            type="large"
            title="L"
            count={products?.filter((p) => p.size.includes("L")).length || 0}
          />
          <SizePLM
            type="xlarge"
            title="XL"
            count={products?.filter((p) => p.size.includes("XL")).length || 0}
          />
          <SizePLM
            type="xxlarge"
            title="XXL"
            count={products?.filter((p) => p.size.includes("XXL")).length || 0}
          />
          <SizePLM
            type="xxxlarge"
            title="XXXL"
            count={products?.filter((p) => p.size.includes("XXXL")).length || 0}
          />
        </ul>
      </Accordion>
    </div>
  );
}
