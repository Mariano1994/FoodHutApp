import { useRouteError } from "react-router-dom";
import "./ErrorMessage.css";

export const ErrorMessage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="error">
        <div className="error-info">
          <h1>{error.status}</h1>
          <h2>{`Page ${error.statusText}`}</h2>
        </div>
      </div>
    </>
  );
};
