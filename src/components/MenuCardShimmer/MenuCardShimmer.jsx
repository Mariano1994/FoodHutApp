import "./MenuCardShimmer.css";
import { Link } from "react-router-dom";

export const MenuCardShimmer = () => {
  return (
    <>
      <div className="shimmer-wrap">
        <Link to="/" className="shimmer-back_home"></Link>
        <div className="shimmer-rest-wrap">
          <div className="shimmer-rest_conteiner">
            <div className="shimme-rest_title"></div>
            <div className="shimmer-rest-info">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="shimmer-rest_conteiner">
            <div className="shimme-rest_title"></div>
            <div className="shimmer-rest-info">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="shimmer-rest_conteiner">
            <div className="shimme-rest_title"></div>
            <div className="shimmer-rest-info">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="shimmer-rest_conteiner">
            <div className="shimme-rest_title"></div>
            <div className="shimmer-rest-info">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
