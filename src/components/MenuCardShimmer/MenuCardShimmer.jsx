import "./MenuCardShimmer.css";
import { Link } from "react-router-dom";

export const MenuCardShimmer = () => {
  return (
    <>
      <div className=" grid place-content-center h-screen">
        <Link
          to="/"
          className="flex items-center justify-center w-32 h-12 mt-32 gap-4 py-2 px-4 rounded-[5px] shimmer-back_home "
        ></Link>
        <div className="flex flex-col items-center w-[60vw]">
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
