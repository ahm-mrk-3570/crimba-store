import _ from "lodash";

export const handleSubmitPrice = (setLoading, fromPrice, toPrice, navigate, setSearchParams) => {
  setLoading(true);
  if (
    _.isEmpty(fromPrice.current.value) ||
    _.isEmpty(fromPrice.current.value)
  ) {
    navigate("/products");
  } else {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      params.set("minPrice", fromPrice.current.value);
      params.set("maxPrice", toPrice.current.value);

      return params;
    });
  }

  setLoading(false);
};
