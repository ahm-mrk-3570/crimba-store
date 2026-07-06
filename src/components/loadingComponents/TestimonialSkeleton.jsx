import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestimonialSkeleton = () => {
  return (
    <div className="testimonial-card">
      <Skeleton width={40} height={40} />

      <div style={{ marginTop: "20px" }}>
        <Skeleton count={4} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Skeleton circle width={55} height={55} />

        <div>
          <Skeleton width={120} height={20} />
          <Skeleton width={80} height={15} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSkeleton;