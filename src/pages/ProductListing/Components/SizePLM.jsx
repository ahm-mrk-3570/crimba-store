import { useSearchParams } from "react-router-dom";

export default function SizePLM({ type, title, count, onClose }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const size = searchParams.get("size");

  const handleFilter = (e) => {

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      const currentSizes = params.get("size")?.split(",") || [];

      let newSizes;

      if (e.target.checked) {
        newSizes = [...currentSizes, title];
      } else {
        newSizes = currentSizes.filter((size) => size !== title);
      }

      if (newSizes.length > 0) {
        params.set("size", newSizes.join(","));
      } else {
        params.delete("size");
      }

      return params;
    });

    onClose();
  };

  return (
    <li>
      <div className="size-container-plm">
        <input
          checked={size?.split(",").includes(title)}
          onChange={handleFilter}
          type="checkbox"
          id={`checkbox-${type}`}
          value={title}
        />
        <label htmlFor={`checkbox-${type}`}>{title}</label>
      </div>
      <span>{`(${count})`}</span>
    </li>
  );
}
