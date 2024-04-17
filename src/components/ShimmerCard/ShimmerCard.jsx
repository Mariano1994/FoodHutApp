import "./ShimmerCard.css";
export const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer__img">
        <div className="shimmer__price"></div>
      </div>

      <div className="shimmer-testimonials">
        <div className="shimmer-photo">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="shimmer__info">
        <div className="shimmer-paragra-1"></div>
        <div className="shimmer-paragra-2"></div>
      </div>
    </div>
  );
};
