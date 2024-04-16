import "./NotFoundMessage.css";
import searchIcon from "../../assets/search-icon.svg";

export const NotFoundMessage = () => {
  return (
    <>
      <div className="not-found__message">
        <img src={searchIcon} />
        <span>
          Food <span className="text-red">not</span> found
        </span>
      </div>
    </>
  );
};
