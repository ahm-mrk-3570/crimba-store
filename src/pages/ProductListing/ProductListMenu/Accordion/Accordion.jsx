import { useEffect, useRef, useState } from "react";

const Accordion = ({
  id,
  title,
  activeId,
  setActiveId,
  children,
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(45);

  const isOpen = activeId === id;

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight + 45);
    } else {
      setHeight(45);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        height: `${height}px`,
        overflow: "hidden",
        transition: "height .4s ease",
      }}
    >
      <div
        className="product-plm-title"
        onClick={() => setActiveId((prev) => (prev === id ? 0 : id))}
      >
        <h2>{title}</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{
            rotate: isOpen ? "-90deg" : "0deg",
            transition: "rotate .3s",
          }}
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>

      <div ref={contentRef} style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

export default Accordion;