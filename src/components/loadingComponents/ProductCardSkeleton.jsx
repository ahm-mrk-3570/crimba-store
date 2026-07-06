import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="product-card">
      <Skeleton height={400} />
      <Skeleton width={120} />
      <Skeleton width={180} />
      <Skeleton width={100} />
    </div>
  );
}

export default ProductCardSkeleton;